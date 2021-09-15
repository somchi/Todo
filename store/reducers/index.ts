import { combineReducers } from "redux";
import { noteSlice } from "./reducer";

export const reducers = combineReducers({
        todo: noteSlice.reducer    
   });