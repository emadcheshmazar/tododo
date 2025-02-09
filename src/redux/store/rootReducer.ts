// src/redux/store/rootReducer.ts
import { combineReducers } from "redux";
import tasksReducer from "../slices/tasksSlice";
import categoriesReducer from "../slices/categoriesSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  categories: categoriesReducer,
});

export default rootReducer;
