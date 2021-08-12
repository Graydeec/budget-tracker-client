import React from "react";
import { Avatar, Typography } from "@material-ui/core";

import useStyles from "./styles";
import { useSelector } from "react-redux";
import Ant from "../../../images/Badger.svg";

const People = () => {
  const classes = useStyles();
  const expenses = useSelector((state) => state.expense.expenses);

  let amountPaid = 0;

  if (expenses.length > 0) {
    const expensesPaid = expenses.filter((exp) => exp.payer === "Billy");
    const moneyPaid = expensesPaid.map((exp) => exp.amount);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    amountPaid = moneyPaid.reduce(reducer);
  }

  return (
    <div className={classes.container}>
      <Avatar src={Ant}></Avatar>
      <Typography variant="p">Name</Typography>
      <Typography variant="p">${amountPaid}</Typography>
    </div>
  );
};

export default People;
