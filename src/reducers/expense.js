import * as actionType from "../constants/actionTypes";

const initialState = { expenses: [] };
export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.EXPENSE_FETCH_ALL:
      return { ...state, expenses: action.payload };
    default:
      return state;
  }
};
