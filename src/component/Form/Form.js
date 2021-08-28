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
import { EXPENSE_CREATE } from "../../constants/actionTypes";

const initialState = { name: "", amount: 0, payer: "", people: [] };
const Form = ({ updateData }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const personAll = useSelector((state) => state.person.persons);
  const dispatch = useDispatch();

  console.log(formData);

  const handleTextChange = (e) => {
    if (e.target.name === "amount") {
      setFormData({ ...formData, [e.target.name]: parseFloat(e.target.value) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handlePayerChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckBoxChange = (e, checked) => {
    if (checked) {
      setFormData({
        ...formData,
        people: [...formData.people, e.target.value],
      });
    } else {
      setFormData({
        ...formData,
        people: formData.people.filter((p) => p !== e.target.value),
      });
    }
  };

  const handleAllChange = (e, checked) => {
    console.log(checked);

    if (checked) {
      setFormData({
        ...formData,
        people: personAll.map((p) => p._id),
      });
    } else {
      setFormData({
        ...formData,
        people: [],
      });
    }
  };

  const handleClear = () => {
    setFormData(initialState);
  };

  const handleSubmit = () => {
    console.log(formData);
    dispatch({
      type: EXPENSE_CREATE,
      payload: { ...formData, numofpeople: formData.people.length },
    });
    updateData();
    setFormData(initialState);
  };

  return (
    <div>
      <Paper className={classes.root}>
        =<Typography variant="h3">Expense Form</Typography>
        <FormControl className={classes.form}>
          <Typography>Name</Typography>
          <TextField
            name="name"
            value={formData.name}
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
                <option value={p.name}>{p.name}</option>
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
                  checked={personAll.length === formData.people.length}
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
                    checked={formData.people.includes(p._id)}
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
