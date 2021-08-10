import React, { useState } from "react";
import { Paper, Container, Typography, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import useStyle from "./styles.js";
import Input from "../../Form/Input.js";
import { userSignup } from "../../api/index.js";

const initialState = { name: "", email: "", password: "", confirmPassword: "" };
const Signup = () => {
  const [formData, setFormData] = useState(initialState);
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  let history = useHistory();
  const classes = useStyle();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let object;
    console.log(formData);
    if (formData.name === "") {
      setValidName(false);
      return;
    }
    try {
      object = await userSignup(formData);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Welcome to sign up page</h1>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={10}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Typography className={classes.header} variant="h5">
              Create a New Account
            </Typography>
            <Input
              name="name"
              content="Name"
              placeholder="John Smith"
              handleChange={handleChange}
              error={!validName}
            />
            <Input
              name="email"
              content="Email"
              placeholder="johnsmith@mail.com"
              handleChange={handleChange}
              error={!validEmail}
            />
            <Input
              name="password"
              content="Password"
              placeholder="*********"
              handleChange={handleChange}
            />
            <Input
              name="confirmPassword"
              content="Confirm Password"
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
              sign up
            </Button>
          </form>
          <Typography className={classes.text}>
            Already have an account? <Link to="/signin">Log in</Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Signup;
