import React, { useState, useEffect } from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
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
  const [tracker, setTracker] = useState(false);
  const tripId = useSelector((state) => state.trip.trip);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(async () => {
    if (!tripId) return;

    console.log("trip", trip);
    const info = await getTripInfo(tripId);

    setTrip(info?.data?.trip);

    const persons = await getTripPersons(tripId);
    const expenses = await getTripExpenses(tripId);

    dispatch({
      type: actionType.PERSON_FETCH_ALL,
      payload: persons?.data?.persons[0].persons,
    });

    // dispatch({
    //   type: actionType.EXPENSE_FETCH_ALL,
    //   payload: expenses?.data?.expenses,
    // });
  }, [tripId, tracker, dispatch]);

  const updateData = () => {
    setTracker(!tracker);
  };

  if (!user?.result?.name) return <UserNotSignIn />;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item container spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.header}>
              <Typography variant="h5" component={Link} to="/user">
                Go Back
              </Typography>
              <Typography variant="h4">{trip.name}</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} md={8} lg={9}>
            <Grid item xs={12}>
              <PeopleList updateData={updateData} />
            </Grid>
            <Grid item xs={12}>
              <Expenses expenses={trip.expense} updateData={updateData} />
            </Grid>
          </Grid>
          <Grid xs={12} md={4} lg={3} item>
            <Form className={classes.form} updateData={updateData} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Trip;
