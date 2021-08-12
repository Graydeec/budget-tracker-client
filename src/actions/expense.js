import * as api from "../api/index.js";
import * as actionType from "../constants/actionTypes";

export const getExpenses = (expenses) = async (dispatch) => {
    dispatch({type: actionType.FETCH_ALL, expenses})
}

export const createExpense = (formData) = async (dispatch) => {
    dispatch({type: actionType.CREATE, payload: formData})
}

export const deleteExpense = (id) = async(dispatch) => {
    dispatch({type: actionType.DELETE, payload: id})
}

export const updateExpense = (id, formData) = async(dispatch) => {
    dispatch({type: actionType.UPDATE, payload: formData})
}