import * as actionType from "../constants/actionTypes.js";

const initialState = {
  persons: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.PERSON_FETCH_ALL:
      return { ...state, persons: action.payload };
    case actionType.PERSON_CREATE:
      return { ...state, persons: [...state.persons, action.payload] };
    case actionType.PERSON_DELETE:
      return {
        ...state,
        persons: state.persons.filter((t) => t._id !== action.payload),
      };
    default:
      return state;
  }
};
