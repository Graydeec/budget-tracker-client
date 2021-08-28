import React from "react";
import { Typography } from "@material-ui/core";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <Typography className={classes.welcomeText} variant="h1">
          Welcome to
        </Typography>
        <Typography className={classes.welcomeText} variant="h1">
          Budget Tracker
        </Typography>
        <Typography variant="h2">
          Best way to keep track of your trip expense
        </Typography>
      </ThemeProvider>
    </div>
  );
};

export default Home;
