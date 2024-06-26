import React from "react";
import { Avatar, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Ant from "../../../images/Badger.svg";
import { deletePerson } from "../../../actions/person";

const People = ({ person, editMode = false }) => {
  const classes = useStyles();
  const expenses = useSelector((state) => state.expense.expenses);
  const { name, _id } = person;

  const dispatch = useDispatch();
  let amountPaid = 0;
  let amountOwe = 0;

  if (expenses.length > 0) {
    const expensesPaid = expenses.filter((exp) => exp.payer === _id);
    const moneyPaid = expensesPaid.map((exp) => exp.amount);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (moneyPaid.length > 0) {
      amountPaid = moneyPaid.reduce(reducer);
    }

    const expensesIn = expenses.filter((exp) => exp.persons.includes(_id));
    const moneyOwe = expensesIn.map(
      (exp) =>
        Math.round((exp.amount / exp.persons.length + Number.EPSILON) * 100) /
        100
    );
    if (moneyOwe.length > 0) {
      amountOwe = moneyOwe.reduce(reducer);
    }
  }

  const handleClick = () => {
    if (amountPaid === 0 && amountOwe === 0) {
      dispatch(deletePerson(person._id));
    }
  };

  return (
    <div className={classes.container}>
      <Avatar src={Ant}></Avatar>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="h6">
        ${Math.round((amountPaid - amountOwe + Number.EPSILON) * 100) / 100}
      </Typography>
      {editMode && (
        <Button color="secondary" onClick={handleClick}>
          X
        </Button>
      )}
    </div>
  );
};

export default People;
