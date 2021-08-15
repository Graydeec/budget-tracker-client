import React, { useState } from "react";
import {
  Paper,
  FormControl,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";
import { useSelector } from "react-redux";

const initialState = { name: "", amount: 0, payer: "", numberofpeople: [] };
const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const personAll = useSelector((state) => state.person.persons);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h3">Expense Form</Typography>
        <FormControl className={classes.form}>
          <Typography>Name</Typography>
          <TextField name="name" value={formData.name}></TextField>
          <Typography>Amount</Typography>
          <TextField name="amount" value={formData.amount}></TextField>
          <Typography>Payer</Typography>
          <TextField></TextField>
          <Typography>NumberOfPeople</Typography>
          <div className={classes.payField}>
            {personAll?.map((p) => (
              <Typography>{p.name}</Typography>
            ))}
          </div>
          <TextField></TextField>
          <Button type="submit">Submit</Button>
          <Button>Clear</Button>
        </FormControl>
      </Paper>
    </div>
  );
};

export default Form;
