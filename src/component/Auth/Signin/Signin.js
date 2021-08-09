import React from "react";
import {
  Grid,
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyle from "./styles.js";

const Signin = () => {
  const classes = useStyle();

  return (
    <div>
      <h1>Welcome to sign in page</h1>
      <Container component="main" maxWidth="xs">
        <Paper elevation={10} className={classes.paper}>
          <Avatar classname={classes.avatar}>G</Avatar>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography className={classes.typography} variant="h6">
                Email
              </Typography>
              <TextField className={classes.label} variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography className={classes.typography} variant="h6">
                Paasword
              </Typography>
              <TextField className={classes.label} variant="outlined" />
            </Grid>
          </Grid>
          <Typography className={classes.typography} variant="h6">
            Email
          </Typography>
          <TextField className={classes.label} variant="outlined" />
          <Typography className={classes.typography} variant="h6">
            Paasword
          </Typography>
          <TextField className={classes.label} variant="outlined" />
          <Button className={classes.button} variant="outlined">
            Sign In
          </Button>
          <Typography className={classes.text} variant="body1">
            does not have an account? <Link to="/signup">sign up</Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Signin;
