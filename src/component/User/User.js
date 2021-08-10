import React from "react";
import Trip from "../Trip/Trip";

const User = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  if (user?.result?.name) {
    return (
      <div>
        <h1>Welcome to user page</h1>
        <Trip />
      </div>
    );
  }

  return <div>Please sign in to view your account</div>;
};

export default User;
