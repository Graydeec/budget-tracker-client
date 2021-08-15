import * as actionType from "../constants/actionTypes";

export default (
  state = { authData: null, loading: false, errors: null },
  action
) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    case actionType.LOADING_DATA:
      return { ...state, loading: true };
    case actionType.LOADING_DONE:
      return { ...state, loading: false };
    case actionType.ERROR_TRUE:
      return { ...state, errors: action.payload };
    case actionType.ERROR_FALSE:
      return { ...state, errors: null };
    default:
      return state;
  }
};
