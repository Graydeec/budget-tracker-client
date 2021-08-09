import React from "react";
import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Input = ({ name, handleChange, content, placeholder }) => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Typography variant="h6">{content}</Typography>
      <TextField
        name={name}
        variant="outlined"
        size="small"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(1),
  },
  textField: {
    margin: theme.spacing(1),
  },
}));
