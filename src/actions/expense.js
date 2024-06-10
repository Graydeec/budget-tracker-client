import * as api from "../api/index.js";
import * as actionType from "../constants/actionTypes";

export const getExpenses = (tripId) => async (dispatch) => {
  try {
    const expenses = await api.getTripExpenses(tripId);
    dispatch({ type: actionType.EXPENSE_FETCH_ALL, payload: expenses?.data });
  } catch (error) {
    console.log(error);
  }
};

export const createExpense = (formData) => async (dispatch) => {
  try {
    const newExpense = await api.addTripExpense({
      description: formData.description,
      payer: formData.payer,
      amount: formData.amount,
      persons: formData.persons,
      tripId: formData.tripId,
    });
    dispatch({
      type: actionType.EXPENSE_CREATE,
      payload: newExpense?.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteExpense = (id) => async (dispatch) => {
  try {
    await api.deleteTripExpense(id);
    dispatch({ type: actionType.EXPENSE_DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateExpense = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateExpense(formData._id, {
      description: formData.description,
      payer: formData.payer,
      amount: formData.amount,
      persons: formData.persons,
      tripId: formData.tripId,
    });
    dispatch({ type: actionType.EXPENSE_UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
