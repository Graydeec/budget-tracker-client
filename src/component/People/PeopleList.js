import React from "react";

import People from "./People/People";

const PeopleList = ({ peopleList = [1, 2] }) => {
  return (
    <div>
      <h1>People List Component</h1>
      {peopleList?.map((people) => (
        <People />
      ))}
    </div>
  );
};

export default PeopleList;
