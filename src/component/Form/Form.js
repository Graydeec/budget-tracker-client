import React from "react";
import {
  Paper,
  FormControl,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h3">Expense Form</Typography>
        <FormControl className={classes.form}>
          <Typography>Name</Typography>
          <TextField></TextField>
          <Typography>Amount</Typography>
          <TextField></TextField>
          <Typography>Payer</Typography>
          <TextField></TextField>
          <Typography>NumberOfPeople</Typography>
          <TextField></TextField>
          <Button>Submit</Button>
          <Button>Clear</Button>
        </FormControl>
      </Paper>
    </div>
  );
};

export default Form;
