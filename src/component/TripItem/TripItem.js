import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";

const TripItem = ({ trip }) => {
  const classes = useStyles();
  const history = useHistory();

  const { name, date } = trip;

  const handleRedirect = () => {
    history.push("/trip");
  };

  return (
    <div className={classes.card} onClick={handleRedirect}>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="h6">Created at: {date}</Typography>
    </div>
  );
};

export default TripItem;
