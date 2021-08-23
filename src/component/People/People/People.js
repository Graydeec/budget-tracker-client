import React from "react";
import { Avatar, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";
import { useSelector } from "react-redux";
import Ant from "../../../images/Badger.svg";

const People = ({ person, editMode = false }) => {
  const classes = useStyles();
  // const expenses = useSelector((state) => state.expense.expenses);
  const { name } = person;
  let amountPaid = 0;

  // if (expenses.length > 0) {
  //   const expensesPaid = expenses.filter((exp) => exp.payer === "Billy");
  //   const moneyPaid = expensesPaid.map((exp) => exp.amount);
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //   amountPaid = moneyPaid.reduce(reducer);
  // }

  return (
    <div className={classes.container}>
      <Avatar src={Ant}></Avatar>
      <Typography variant="p">{name}</Typography>
      <Typography variant="p">${amountPaid}</Typography>
      {editMode && <Button color="secondary">X</Button>}
    </div>
  );
};

export default People;
