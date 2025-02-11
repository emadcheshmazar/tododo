// src/redux/selectors/tasksSelectors.ts
import { Task } from "../models";
import { RootState } from "../store";

// سلکتور برای بیرون کشیدن تمامی تسک‌ها به صورت آرایه
export const selectAllTasks = (state: RootState): Task[] => {
  const tasksByCategory = state.tasks; // state.tasks ساختار شیء دسته‌بندی شده دارد
  let tasks: Task[] = [];
  for (const category in tasksByCategory) {
    tasks = tasks.concat(Object.values(tasksByCategory[category]));
  }
  return tasks;
};

export const selectCompletedTasks = (state: RootState): Task[] =>
  selectAllTasks(state).filter((task) => task.completed);

export const selectActiveTasks = (state: RootState): Task[] =>
  selectAllTasks(state).filter((task) => !task.completed);
