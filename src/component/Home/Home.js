import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.welcomeText} variant="h1">
        Welcome to
      </Typography>
      <Typography className={classes.welcomeText} variant="h1">
        Budget Tracker
      </Typography>
      <Typography variant="h2">
        Best way to keep track of your trip expense
      </Typography>
    </div>
  );
};

export default Home;
