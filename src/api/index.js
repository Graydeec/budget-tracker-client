import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const URL = process.env.REACT_APP_SERVER_URL;

export const userSignup = (userInfo) =>
  axios.post(URL + "user/signup", userInfo);
export const userSignin = (userInfo) =>
  axios.post(URL + "user/signin", userInfo);
export const getUserInfo = (userid) => axios.get(URL + `user/${userid}`);

export const getUserTrips = (userid) => axios.get(URL + `trip/user/${userid}`);
export const getTripInfo = (tripid) => axios.get(URL + `trip/${tripid}`);
export const userCreateTrip = (formData) =>
  axios.post(URL + "trip/create", formData);
export const userDeleteTrip = (tripid) => axios.delete(URL + `trip/${tripid}`);

export const getTripPersons = (tripid) => axios.get(URL + `person/${tripid}`);
export const addPersonIntoCollection = (formData) =>
  axios.post(URL + `person/create`, formData);
export const deletePerson = (personId) =>
  axios.delete(URL + `person/${personId}`);

export const getTripExpenses = (tripid) => axios.get(URL + `expense/${tripid}`);
export const addTripExpense = (formData) =>
  axios.post(URL + `expense/`, formData);
export const deleteTripExpense = (id) => axios.delete(URL + `expense/${id}`);
export const updateExpense = (id, formData) =>
  axios.patch(URL + `expense/${id}`, formData);
