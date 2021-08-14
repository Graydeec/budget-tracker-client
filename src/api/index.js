import axios from "axios";

const URL = "https://budget-tracker-server-api.herokuapp.com/";
// const URL = "";

export const userSignup = (userInfo) =>
  axios.post(URL + "user/signup", userInfo);
export const userSignin = (userInfo) =>
  axios.post(URL + "user/signin", userInfo);
export const getUserInfo = (userid) => axios.get(URL + `user/${userid}`);

export const getUserTrips = (userid) => axios.get(URL + `trip/user/${userid}`);
export const getTripInfo = (tripid) => axios.get(URL + `trip/${tripid}`);

export const userAddTrip = () => {};
export const getTripPersons = (tripid) => axios.get(URL + `person/${tripid}`);

export const getTripExpenses = (tripid) => axios.get(URL + `expense/${tripid}`);
