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
    const info = await getTripInfo(tripId);

    setTrip(info?.data?.trip);

    const persons = await getTripPersons(tripId);
    const expenses = await getTripExpenses(tripId);

    dispatch({
      type: actionType.PERSON_FETCH_ALL,
      payload: persons?.data?.persons[0].persons,
    });

    dispatch({
      type: actionType.EXPENSE_FETCH_ALL,
      payload: expenses?.data?.expenses,
    });
  }, [tripId, dispatch]);

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
          <PeopleList />
          <Expenses expenses={trip.expense} />
        </div>
        <Form className={classes.form} />
      </div>
    </div>
  );
};

export default Trip;
