import * as api from "../api/index.js";
import * as actionType from "../constants/actionTypes";

export const getPersons = () => async (dispatch) => {
  dispatch({ type: actionType.PERSON_FETCH_ALL });
};

export const createPerson = (tripid, formData) => async (dispatch) => {
  console.log(tripid, formData);
  try {
    await api.addPersonIntoCollection(tripid, formData);
    console.log("done");
    dispatch({ type: actionType.PERSON_CREATE, payload: formData });
  } catch (error) {
    console.log(error);
  }
};
