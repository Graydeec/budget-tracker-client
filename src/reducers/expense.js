import * as actionType from "../constants/actionTypes";

const initialState = { expenses: [] };
export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.EXPENSE_FETCH_ALL:
      return { ...state, expenses: action.payload };
    case actionType.EXPENSE_CREATE:
      return { ...state, expenses: [...state.expenses, action.payload] };
    case actionType.EXPENSE_DELETE:
      return {
        ...state,
        expenses: state.expenses.filter((t) => t._id !== action.payload),
      };
    case actionType.EXPENSE_UPDATE:
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense._id === action.payload._id ? action.payload : expense
        ),
      };
    default:
      return state;
  }
};
