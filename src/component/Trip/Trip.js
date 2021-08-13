import React, { useState, useEffect } from "react";
import { Typography, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

import PeopleList from "../People/PeopleList";
import Expenses from "../Expenses/Expenses";
import Form from "../Form/Form";
import useStyles from "./styles";
import UserNotSignIn from "../Error/UserNotSignIn/UserNotSignIn";
import { TRIP_INFO } from "../../constants/actionTypes";
import { tripInfo } from "../../api";
import { useSelector } from "react-redux";

const initialTrip = { name: "Trip", expense: [], people: [] };
const Trip = () => {
  const classes = useStyles();
  const [trip, setTrip] = useState(initialTrip);
  const tripId = useSelector((state) => state.trip.trip);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(async () => {
    console.log("tripId", tripId);
    const info = await tripInfo({ id: tripId });
    setTrip(info?.data?.trip);
    console.log("info", info);
  }, [tripId]);

  if (!user?.result?.name) return <UserNotSignIn />;

  return (
    <div>
      <Paper className={classes.header}>
        <Typography variant="h5" component={Link} to="/user">
          Go Back
        </Typography>
        <Typography variant="h4">{trip.name}</Typography>
      </Paper>
      <div className={classes.contentPanel}>
        <div className={classes.contentLeftPanel}>
          <PeopleList people={trip.people} />
          <Expenses expenses={trip.expense} />
        </div>
        <Form className={classes.form} />
      </div>
    </div>
  );
};

export default Trip;
