import * as actionType from "../constants/actionTypes.js";

const initialState = {
  persons: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.PERSON_FETCH_ALL:
      return { ...state, persons: action.payload };
    default:
      return state;
  }
};
