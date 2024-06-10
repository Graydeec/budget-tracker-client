import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  CircularProgress,
  FormControl,
  Modal,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useStyle from "./styles.js";
import Input from "../../Form/Input.js";
import { signin } from "../../../actions/auth.js";
import {
  ERROR_FALSE,
  LOADING_DATA,
  LOADING_DONE,
} from "../../../constants/actionTypes";

const initialState = { email: "", password: "" };
const Signin = () => {
  const [formData, setFormData] = useState(initialState);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.errors);
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyle();

  useEffect(() => {
    dispatch({ type: ERROR_FALSE });
    dispatch({ type: LOADING_DONE });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: LOADING_DATA });
    dispatch(signin(formData, history));
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
        <Paper elevation={10} className={classes.paper}>
          <Typography className={classes.header} variant="h4">
            Log in
          </Typography>
          <FormControl>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Input
                name="email"
                content="Email"
                placeholder="johnsmith@mail.com"
                handleChange={handleChange}
                type="email"
              />
              <Input
                name="password"
                content="Password"
                placeholder="password"
                handleChange={handleChange}
                type="password"
              />
              {error !== null && (
                <Typography className={classes.errorText}>
                  {error.message || " Error"}
                </Typography>
              )}
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                size="medium"
                color="primary"
                onClick={handleSubmit}
              >
                Log In
              </Button>
            </form>
          </FormControl>
          <Typography className={classes.text} variant="body1">
            does not have an account? <Link to="/signup">sign up</Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Signin;
