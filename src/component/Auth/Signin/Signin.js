import React, { useState } from "react";
import {
  Grid,
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Avatar,
  CircularProgress,
  FormControl,
  Modal,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useStyle from "./styles.js";
import Input from "../../Form/Input.js";
import { signin } from "../../../actions/auth.js";
import { LOADING_DATA } from "../../../constants/actionTypes";

const initialState = { email: "", password: "" };
const Signin = () => {
  const [formData, setFormData] = useState(initialState);
  const loading = useSelector((state) => state.auth.loading);
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyle();

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
              />
              <Input
                name="password"
                content="Password"
                placeholder="password"
                handleChange={handleChange}
                type="password"
              />
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
