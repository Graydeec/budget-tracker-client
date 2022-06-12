import React, { useState, useEffect } from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PeopleList from "../People/PeopleList";
import Expenses from "../Expenses/Expenses";
import Form from "../Form/Form";
import useStyles from "./styles";
import UserNotSignIn from "../Error/UserNotSignIn/UserNotSignIn";
import { getTripInfo, getTripPersons, getTripExpenses } from "../../api";
import * as actionType from "../../constants/actionTypes";

const initialState = {
  descriptions: "",
  amount: 0,
  payer: "",
  persons: [],
  tripId: "",
  _id: "",
};
const Trip = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [tracker, setTracker] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { tripId } = useParams();
  const expenses = useSelector((state) => state.expense.expenses);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(async () => {
    if (!tripId) return;

    const info = await getTripInfo(tripId);

    const persons = await getTripPersons(tripId);
    const expenses = await getTripExpenses(tripId);

    console.log("yooo", persons);

    dispatch({
      type: actionType.PERSON_FETCH_ALL,
      payload: persons?.data,
    });

    dispatch({
      type: actionType.EXPENSE_FETCH_ALL,
      payload: expenses?.data,
    });
  }, [tripId, tracker, dispatch]);

  const updateData = () => {
    setTracker(!tracker);
  };

  const handleEdit = (formData) => {
    setEditMode(true);
    setFormData(formData);
  };

  const updateFormData = (formData) => {
    setFormData(formData);
  };

  if (!user?.result?.name) return <UserNotSignIn />;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {/* <Grid item container>
          <Grid item xs={12}>
            <Paper className={classes.header}>
              <Typography variant="h5" component={Link} to="/user">
                Go Back
              </Typography>
              <Typography variant="h4">{trip?.name}</Typography>
            </Paper>
          </Grid>
        </Grid> */}
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} md={8} lg={9} container spacing={2}>
            <Grid item xs={12}>
              <PeopleList updateData={updateData} />
            </Grid>
            <Grid item xs={12}>
              <Expenses
                tripId={tripId}
                expenses={expenses}
                updateData={updateData}
                updateFormData={updateFormData}
                handleEdit={handleEdit}
              />
            </Grid>
          </Grid>
          <Grid xs={12} md={4} lg={3} item>
            <Form
              updateData={updateData}
              updateFormData={updateFormData}
              editMode={editMode}
              setEditMode={setEditMode}
              formData={formData}
              tripId={tripId}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Trip;
