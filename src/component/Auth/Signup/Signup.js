import React, { useEffect, useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Button,
  CircularProgress,
  Modal,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useStyle from "./styles.js";
import Input from "../../Form/Input.js";
import { signup } from "../../../actions/auth.js";
import { ERROR_FALSE, LOADING_DONE } from "../../../constants/actionTypes.js";

const initialState = { name: "", email: "", password: "", confirmPassword: "" };
const Signup = () => {
  const [formData, setFormData] = useState(initialState);
  const error = useSelector((state) => state.auth.errors);
  const loading = useSelector((state) => state.auth.loading);
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyle();

  useEffect(() => {
    dispatch({ type: ERROR_FALSE });
    dispatch({ type: LOADING_DONE });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signup(formData, history));
    setFormData(initialState);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Modal className={classes.modal} open={loading}>
        <Container className={classes.modalContainter} maxWidth="md">
          <CircularProgress />
          <Typography variant="h6">Loading</Typography>
        </Container>
      </Modal>
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
              value={formData.name}
              handleChange={handleChange}
            />
            <Input
              name="email"
              content="Email"
              placeholder="johnsmith@mail.com"
              value={formData.email}
              handleChange={handleChange}
            />
            <Input
              name="password"
              content="Password"
              placeholder="password"
              handleChange={handleChange}
              value={formData.password}
              type="password"
            />
            <Input
              name="confirmPassword"
              content="Confirm Password"
              placeholder="password"
              handleChange={handleChange}
              value={formData.confirmPassword}
              type="password"
            />
            {error !== null && (
              <Typography className={classes.errorText}>
                {error.message || "Error"}
              </Typography>
            )}
            <Button
              className={classes.button}
              variant="contained"
              size="medium"
              color="primary"
              type="submit"
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
