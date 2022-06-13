import React, { useState } from "react";
import {
  Paper,
  FormControl,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  NativeSelect,
} from "@material-ui/core";

import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { createExpense, updateExpense } from "../../actions/expense";
import { EXPENSE_CREATE } from "../../constants/actionTypes";

const initialState = { description: "", amount: 0, payer: "", persons: [] };
const Form = ({
  updateData,
  updateFormData,
  formData,
  tripId,
  editMode,
  setEditMode,
}) => {
  const classes = useStyles();
  const personAll = useSelector((state) => state.person.persons);
  const dispatch = useDispatch();
  if (formData.payer === "" && personAll.length !== 0) {
    formData.payer = personAll[0]?._id;
  } else if (personAll.length === 0) {
    formData.payer = "";
  }
  console.log("data", personAll, formData);

  const handleTextChange = (e) => {
    if (e.target.name === "amount") {
      updateFormData({
        ...formData,
        [e.target.name]: parseFloat(e.target.value),
      });
    } else {
      updateFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handlePayerChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckBoxChange = (e, checked) => {
    if (checked) {
      updateFormData({
        ...formData,
        persons: [...formData.persons, e.target.value],
      });
    } else {
      updateFormData({
        ...formData,
        persons: formData.persons.filter((p) => p !== e.target.value),
      });
    }
  };

  const handleAllChange = (e, checked) => {
    console.log(checked);

    if (checked) {
      updateFormData({
        ...formData,
        persons: personAll.map((p) => p._id),
      });
    } else {
      updateFormData({
        ...formData,
        persons: [],
      });
    }
  };

  const handleClear = () => {
    updateFormData(initialState);
  };

  const handleSubmit = () => {
    console.log("update", editMode);
    if (formData.persons.length === 0) {
      return;
    }
    if (editMode) {
      dispatch(updateExpense(formData));
    } else {
      dispatch(createExpense({ ...formData, tripId }));
    }
    setEditMode(false);
    updateData();
    updateFormData(initialState);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h3">Expense Form</Typography>
        <FormControl className={classes.form}>
          <Typography>Name</Typography>
          <TextField
            name="description"
            value={formData.description}
            onChange={handleTextChange}
          ></TextField>
          <Typography>Amount</Typography>
          <TextField
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleTextChange}
          ></TextField>
          <Typography>Payer</Typography>
          <div className={classes.payField}>
            <NativeSelect
              value={formData.payer}
              name="payer"
              onChange={handlePayerChange}
            >
              {personAll?.map((p) => (
                <option value={p._id}>{p.name}</option>
              ))}
            </NativeSelect>
          </div>
          <Typography>NumberOfPeople</Typography>
          <div className={classes.peopleField}>
            <FormControlLabel
              control={
                <Checkbox
                  name="all"
                  color="primary"
                  onChange={handleAllChange}
                  checked={personAll.length === formData.persons.length}
                />
              }
              label="ALL"
            />
            {personAll?.map((p) => (
              <FormControlLabel
                control={
                  <Checkbox
                    name={`p-${p.name}`}
                    color="primary"
                    onChange={handleCheckBoxChange}
                    value={p._id}
                    checked={formData.persons.includes(p._id)}
                  />
                }
                label={p.name}
              />
            ))}
          </div>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={handleClear}>Clear</Button>
        </FormControl>
      </Paper>
    </div>
  );
};

export default Form;
