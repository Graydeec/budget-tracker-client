import * as api from "../api/index.js";
import * as actionType from "../constants/actionTypes";

export const getPersons = () => async (dispatch) => {
  dispatch({ type: actionType.FETCH_ALL });
};

export const createPerson = (formData = async (dispatch) => {
  dispatch({ type: actionType.CREATE, payload: formData });
});
