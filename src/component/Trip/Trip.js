import React, { useState, useEffect } from "react";
import { Typography, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PeopleList from "../People/PeopleList";
import Expenses from "../Expenses/Expenses";
import Form from "../Form/Form";
import useStyles from "./styles";
import UserNotSignIn from "../Error/UserNotSignIn/UserNotSignIn";
import { getTripInfo, getTripPersons, getTripExpenses } from "../../api";
import * as actionType from "../../constants/actionTypes";

const initialTrip = { name: "Trip", expense: [], people: [] };
const Trip = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [trip, setTrip] = useState(initialTrip);
  const tripId = useSelector((state) => state.trip.trip);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(async () => {
    if (!tripId) return;
    console.log("tripId", tripId);
    const info = await getTripInfo(tripId);
    console.log("info", info);
    setTrip(info?.data?.trip);
    const persons = await getTripPersons(tripId);
    const expenses = await getTripExpenses(tripId);
    console.log("persons", persons);
    dispatch({
      type: actionType.PERSON_FETCH_ALL,
      payload: persons?.data?.persons,
    });

    dispatch({
      type: actionType.EXPENSE_FETCH_ALL,
      payload: expenses?.data?.persons,
    });

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
