import * as api from "../api/index.js";
import * as actionType from "../constants/actionTypes";

export const getTrips = () => async (dispatch) => {
  console.log("Get all the trips");
  dispatch({ type: actionType.TRIP_FETCH_ALL, example });
};

export const createTrip = (formData) => async (dispatch) => {
  console.log("Creating a trip");

  dispatch({ type: actionType.TRIP_CREATE, payload: formData });
};

export const deleteTrip = () => async (dispatch) => {
  console.log("Deleting a trip");
  dispatch({ type: actionType.TRIP_DELETE });
};

const example = [
  { id: 1, name: "John" },
  { id: 2, name: "John" },
  { id: 3, name: "John" },
  { id: 4, name: "John" },
  { id: 5, name: "John" },
];
