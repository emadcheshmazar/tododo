// src/core/stateSelectors.ts
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const useCategories = () => {
  return useSelector((state: RootState) => state.categories);
};

export const useTasks = () => {
  return useSelector((state: RootState) => state.tasks);
};
