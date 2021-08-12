import { AUTH, LOADING_DONE } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router, setLoading) => async (dispatch) => {
  try {
    const { data } = await api.userSignin(formData);
    dispatch({ type: AUTH, data });
    console.log("you wish");
    dispatch({ type: LOADING_DONE });
    router.push("/user");
  } catch (error) {
    dispatch({ type: LOADING_DONE });
    alert(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.userSignup(formData);
    dispatch({ type: AUTH, data });
    dispatch({ type: LOADING_DONE });
    router.push("/user");
  } catch (error) {
    dispatch({ type: LOADING_DONE });
    alert(error);
  }
};
