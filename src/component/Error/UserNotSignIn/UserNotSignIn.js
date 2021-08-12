import React from "react";
import { Paper, Typography, Button, Container } from "@material-ui/core";

import useStyles from "./styles";

const UserNotSignIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.contaner} maxWidth="xl">
        <Typography className={classes.text} variant="h2">
          You need to log in first to view the content
        </Typography>
        <Button variant="contained" color="primary">
          Log in
        </Button>
      </Container>
    </div>
  );
};

export default UserNotSignIn;
