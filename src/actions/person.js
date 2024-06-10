import * as api from "../api/index.js";
import * as actionType from "../constants/actionTypes";

export const getPersons = () => async (dispatch) => {
  dispatch({ type: actionType.PERSON_FETCH_ALL });
};

export const createPerson = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addPersonIntoCollection(formData);
    dispatch({ type: actionType.PERSON_CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePerson = (id) => async (dispatch) => {
  try {
    await api.deletePerson(id);
    dispatch({ type: actionType.PERSON_DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
