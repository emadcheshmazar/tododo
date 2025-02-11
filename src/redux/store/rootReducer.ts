// src/redux/store/rootReducer.ts
import { combineReducers } from "redux";
import tasksReducer from "../slices/tasksSlice";
import categoriesReducer from "../slices/categoriesSlice";
import modalReducer from "../slices/modalSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  categories: categoriesReducer,
  modal: modalReducer,
});

export default rootReducer;
