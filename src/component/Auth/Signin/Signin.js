import React, { useState } from "react";
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
import Input from "../../Form/Input.js";
import { userSignin } from "../../api/index.js";

const initialState = { email: "", password: "" };
const Signin = () => {
  const [formData, setFormData] = useState(initialState);
  const classes = useStyle();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let object;
    console.log(formData);
    try {
      object = await userSignin(formData);
      console.log(object);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Welcome to sign in page</h1>
      <Container component="main" maxWidth="xs">
        <Paper elevation={10} className={classes.paper}>
          <Typography className={classes.header} variant="h4">
            Log in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Input
              name="email"
              content="Email"
              placeholder="johnsmith@mail.com"
              handleChange={handleChange}
            />
            <Input
              name="password"
              content="Password"
              placeholder="*********"
              handleChange={handleChange}
            />
            <Button
              className={classes.button}
              variant="contained"
              size="medium"
              color="primary"
              onClick={handleSubmit}
            >
              Log In
            </Button>
          </form>
          <Typography className={classes.text} variant="body1">
            does not have an account? <Link to="/signup">sign up</Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Signin;