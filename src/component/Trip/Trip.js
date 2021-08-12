import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

import PeopleList from "../People/PeopleList";
import Expenses from "../Expenses/Expenses";
import Form from "../Form/Form";
import useStyles from "./styles";
import UserNotSignIn from "../Error/UserNotSignIn/UserNotSignIn";

const Trip = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  if (!user?.result?.name) return <UserNotSignIn />;

  return (
    <div>
      <Paper className={classes.header}>
        <Typography variant="h5" component={Link} to="/user">
          Go Back
        </Typography>
        <Typography variant="h4">Trip Name</Typography>
      </Paper>
      <div className={classes.contentPanel}>
        <div className={classes.contentLeftPanel}>
          <PeopleList />
          <Expenses />
        </div>
        <Form className={classes.form} />
      </div>
    </div>
  );
};

export default Trip;
