import React from "react";

import Expense from "./Expense/Expense";

const Expenses = ({ expenses = [1, 2] }) => {
  return (
    <div>
      <h1>Expense List</h1>
      {expenses.length && expenses.map((expense) => <Expense />)}
    </div>
  );
};

export default Expenses;
