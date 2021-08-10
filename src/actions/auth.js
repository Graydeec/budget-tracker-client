import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.userSignin(formData);
    dispatch({ type: AUTH, data });
    console.log("you wish");
    router.push("/user");
  } catch (error) {
    alert(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.userSignup(formData);
    dispatch({ type: AUTH, data });

    router.push("/user");
  } catch (error) {
    alert(error);
  }
};
