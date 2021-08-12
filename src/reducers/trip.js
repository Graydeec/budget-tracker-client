import * as actionType from "../constants/actionTypes";
const initialState = {
  trips: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.TRIP_FETCH_ALL:
      console.log(action);
      return { ...state, trips: [...action?.example] };
    case actionType.TRIP_CREATE:
      return { ...state, trips: [...state.trips, action.payload] };
    case actionType.TRIP_DELETE:
      return state;
    default:
      return state;
  }
};
