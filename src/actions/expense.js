import * as api from "../api/index.js";
import * as actionType from "../constants/actionTypes";

export const getExpenses = (tripId) => async (dispatch) => {
  console.log(tripId, "Before fetching");
  try {
    const expenses = await api.getTripExpenses(tripId);
    console.log("Done fetching", expenses);
    dispatch({ type: actionType.EXPENSE_FETCH_ALL, payload: expenses?.data });
  } catch (error) {
    console.log(error);
  }
};

export const createExpense = (formData) => async (dispatch) => {
  console.log("formDatafsaf", formData);
  try {
    const newExpense = await api.addTripExpense({
      description: formData.description,
      payer: formData.payer,
      amount: formData.amount,
      persons: formData.persons,
      tripId: formData.tripId,
    });
    console.log("done", formData);
    dispatch({
      type: actionType.EXPENSE_CREATE,
      payload: newExpense?.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteExpense = (id) => async (dispatch) => {
  console.log("Delete", id);
  try {
    await api.deleteTripExpense(id);
    dispatch({ type: actionType.EXPENSE_DELETE, payload: id });
    console.log("Done deleteing");
  } catch (error) {
    console.log(error);
  }
};

export const updateExpense = (formData) => async (dispatch) => {
  console.log("Update start", formData);
  try {
    const { data } = await api.updateExpense(formData._id, {
      description: formData.description,
      payer: formData.payer,
      amount: formData.amount,
      persons: formData.persons,
      tripId: formData.tripId,
    });
    console.log("Update good");
    dispatch({ type: actionType.EXPENSE_UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
