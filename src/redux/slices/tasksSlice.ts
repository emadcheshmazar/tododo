// src/redux/slices/tasksSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string; // شناسه تسک (مثلاً "running")
  category: string; // دسته‌بندی (مثلاً "sports")
  title: string; // عنوان تسک
  description?: string; // توضیحات (اختیاری)
  completed: boolean; // وضعیت تکمیل یا فعال بودن
  // فیلدهای دیگر هم می‌توانید اضافه کنید
}

export type TaskStore = {
  [category: string]: {
    [taskId: string]: Task;
  };
};

const initialState: TaskStore = {};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    initTask: (state, action: PayloadAction<{ task: Task }>) => {
      const { task } = action.payload;
      const { category, id } = task;
      if (state[category]) {
        state[category][id] = task;
      } else {
        state[category] = { [id]: task };
      }
    },
    updateTask: (state, action: PayloadAction<{ task: Task }>) => {
      const { task } = action.payload;
      const { category, id } = task;
      if (state[category] && state[category][id]) {
        state[category][id] = { ...state[category][id], ...task };
      }
    },
    removeTask: (
      state,
      action: PayloadAction<{ category: string; id: string }>
    ) => {
      const { category, id } = action.payload;
      if (state[category]) {
        delete state[category][id];
      }
    },
    removeCategoryTasks: (
      state,
      action: PayloadAction<{ category: string }>
    ) => {
      const { category } = action.payload;
      delete state[category];
    },
    toggleTask: (
      state,
      action: PayloadAction<{ category: string; id: string }>
    ) => {
      const { category, id } = action.payload;
      if (state[category] && state[category][id]) {
        const task = state[category][id];
        state[category][id] = {
          ...task,
          completed: !task.completed,
        };
      }
    },
  },
});

export const {
  initTask,
  updateTask,
  removeTask,
  removeCategoryTasks,
  toggleTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;
