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
  console.log("Creating a trip", formData);

  try {
    const newTrip = await api.userCreateTrip(formData);
    const tripid = newTrip?.data?.newTrip._id;
    const newPersonCollection = await api.createTripPersonCollection(tripid);
    const newExpenseCollection = await api.createTripExpenseCollection(tripid);

    console.log("new collections", newPersonCollection, newExpenseCollection);
    dispatch({ type: actionType.TRIP_CREATE, payload: formData });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTrip = (tripid) => async (dispatch) => {
  try {
    console.log("Deleting a trip", tripid);
    await api.userDeleteTrip(tripid);
    await api.deleteTripExpenseCollection(tripid);
    await api.deleteTripPersonCollection(tripid);
    dispatch({ type: actionType.TRIP_DELETE, payload: tripid });
  } catch (error) {
    console.log(error);
  }
};

const example = [
  { id: 1, name: "John" },
  { id: 2, name: "John" },
  { id: 3, name: "John" },
  { id: 4, name: "John" },
  { id: 5, name: "John" },
];
