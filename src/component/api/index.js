import axios from "axios";

//const URL = "https://budget-tracker-server-api.herokuapp.com/";
const URL = "";

export const userSignup = (userInfo) =>
  axios.post(URL + "user/signup", userInfo);
export const userSignin = (userInfo) =>
  axios.post(URL + "user/signin", userInfo);
