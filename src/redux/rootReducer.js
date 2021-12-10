import { combineReducers } from "redux";
import { teamplate } from "../features/Teamplate/teamplateSlice";

export const rootReducer = combineReducers({
    teamplate: teamplate.reducer
});