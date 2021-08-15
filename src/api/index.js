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
export const userCreateTrip = (formData) => axios.post(URL + "trip", formData);
export const userDeleteTrip = (tripid) => axios.delete(URL + `trip/${tripid}`);

export const getTripPersons = (tripid) => axios.get(URL + `person/${tripid}`);
export const createTripPersonCollection = (tripid) =>
  axios.post(URL + "person", { tripid });
export const addPersonIntoCollection = (tripid, formData) =>
  axios.post(URL + `person/${tripid}`, formData);
export const deleteTripPersonCollection = (tripid) =>
  axios.delete(URL + `person/trip/${tripid}`);

export const getTripExpenses = (tripid) => axios.get(URL + `expense/${tripid}`);
export const createTripExpenseCollection = (tripid) =>
  axios.post(URL + "expense", { tripid });
export const addExpenseIntoCollection = (tripid, formData) =>
  axios.post(URL + `expense/${tripid}`, { formData });
export const deleteTripExpenseCollection = (tripid) =>
  axios.delete(URL + `expense/trip/${tripid}`);
