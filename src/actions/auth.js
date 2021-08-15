import { AUTH, ERROR_TRUE, LOADING_DONE } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router, setLoading) => async (dispatch) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validEmail = re.test(formData.email);

  if (!validEmail) {
    dispatch({ type: LOADING_DONE });
    dispatch({
      type: ERROR_TRUE,
      payload: { message: "Please enter an valid email." },
    });
    return;
  }

  if (formData.password?.length < 6) {
    dispatch({ type: LOADING_DONE });
    dispatch({
      type: ERROR_TRUE,
      payload: { message: "Password needs at least 6 characters" },
    });
    return;
  }

  try {
    const { data } = await api.userSignin(formData);
    dispatch({ type: AUTH, data });
    console.log("you wish");
    dispatch({ type: LOADING_DONE });
    router.push("/user");
  } catch (error) {
    dispatch({ type: LOADING_DONE });
    if (error.message.includes("404"))
      dispatch({
        type: ERROR_TRUE,
        payload: { message: "This user does not exist" },
      });
    else
      dispatch({
        type: ERROR_TRUE,
        payload: { message: "Invalid credentials" },
      });
  }
};

export const signup = (formData, router) => async (dispatch) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validEmail = re.test(formData.email);

  if (!formData.name) {
    dispatch({ type: LOADING_DONE });
    dispatch({
      type: ERROR_TRUE,
      payload: { message: "Name can not be empty" },
    });
    return;
  }

  if (!validEmail) {
    dispatch({ type: LOADING_DONE });
    dispatch({
      type: ERROR_TRUE,
      payload: { message: "Please enter an valid email." },
    });
    return;
  }

  if (formData.password?.length < 6) {
    dispatch({ type: LOADING_DONE });
    dispatch({
      type: ERROR_TRUE,
      payload: { message: "Password needs at least 6 characters" },
    });
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    dispatch({ type: LOADING_DONE });
    dispatch({
      type: ERROR_TRUE,
      payload: { message: "Passwords do not match" },
    });
    return;
  }

  try {
    const { data } = await api.userSignup(formData);
    dispatch({ type: AUTH, data });
    dispatch({ type: LOADING_DONE });
    router.push("/user");
  } catch (error) {
    dispatch({ type: LOADING_DONE });
    dispatch({ type: ERROR_TRUE, payload: { message: "Invalid information" } });
  }
};
