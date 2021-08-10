import { combineReducers } from "redux";

import auth from "./auth";
import person from "./person";
import expense from "./expense";

export const reducers = combineReducers({ person, auth, expense });
