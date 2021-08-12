import * as actionType from "../constants/actionTypes";
const initialState = {
  trips: [],
  trip: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.TRIP_FETCH_ALL:
      return { ...state, trips: [...action.payload?.data?.tripInfos] };
    case actionType.TRIP_CURRENT:
      return { ...state, trip: action.payload };
    case actionType.TRIP_CREATE:
      return { ...state, trips: [...state.trips, action.payload] };
    case actionType.TRIP_DELETE:
      return state;
    default:
      return state;
  }
};
