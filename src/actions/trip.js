import * as api from "../api/index.js";
import * as actionType from "../constants/actionTypes";

export const getUserTrips = (userid) => async (dispatch) => {
  console.log("Get all the trips");
  try {
    const tripInfos = await api.getUserTrips(userid);
    console.log(tripInfos, "tripInfos");
    dispatch({ type: actionType.TRIP_FETCH_ALL, payload: tripInfos });
  } catch (error) {
    console.log(error);
    alert(error);
  }
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
