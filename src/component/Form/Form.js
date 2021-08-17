import React, { useState } from "react";
import {
  Paper,
  FormControl,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import useStyles from "./styles";
import { useSelector } from "react-redux";

const initialState = { name: "", amount: 0, payer: "", people: [] };
const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const personAll = useSelector((state) => state.person.persons);

  const handleTextChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

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
            value={formData.amount}
            onChange={handleTextChange}
          ></TextField>
          <Typography>Payer</Typography>
          <div className={classes.payField}>
            {personAll?.map((p) => (
              <FormControlLabel
                control={<Checkbox name={`payer-${p.name}`} color="primary" />}
                label={p.name}
              />
            ))}
          </div>
          <Typography>NumberOfPeople</Typography>
          <div className={classes.peopleField}>
            {personAll?.map((p) => (
              <FormControlLabel
                control={
                  <Checkbox
                    name={`p-${p.name}`}
                    color="primary"
                    onChange={handleCheckBoxChange}
                    value={p._id}
                  />
                }
                label={p.name}
              />
            ))}
          </div>
          <Button type="submit">Submit</Button>
          <Button>Clear</Button>
        </FormControl>
      </Paper>
    </div>
  );
};

export default Form;
