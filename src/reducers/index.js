import { combineReducers } from "redux";

import auth from "./auth";
import person from "./person";
import expense from "./expense";
import trip from "./trip";

export const reducers = combineReducers({ person, auth, expense, trip });
