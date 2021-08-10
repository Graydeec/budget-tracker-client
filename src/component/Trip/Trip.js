import React from "react";

import PeopleList from "../People/PeopleList";
import Expenses from "../Expenses/Expenses";
import Form from "../Form/Form";

const Trip = () => {
  return (
    <div>
      <PeopleList />
      <Expenses />
      <Form />
    </div>
  );
};

export default Trip;
