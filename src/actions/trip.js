import * as api from "../api/index.js";
import * as actionType from "../constants/actionTypes";

export const getUserTrips = (userid) => async (dispatch) => {
  try {
    const tripInfos = await api.getUserTrips(userid);
    dispatch({ type: actionType.TRIP_FETCH_ALL, payload: tripInfos });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const createTrip = (formData) => async (dispatch) => {
  try {
    const newTrip = await api.userCreateTrip(formData);

    const tripid = newTrip?.data?._id;

    dispatch({
      type: actionType.TRIP_CREATE,
      payload: { ...formData, _id: tripid },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTrip = (tripid) => async (dispatch) => {
  try {
    console.log("Deleting a trip", tripid);
    await api.userDeleteTrip(tripid);
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
