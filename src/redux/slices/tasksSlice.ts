import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  category: string;
  title: string;
  description?: string;
  completed: boolean;
  date: string;
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
    updateTask: (
      state,
      action: PayloadAction<{
        category: string;
        id: string;
        title: string;
        description?: string;
        date: string;
      }>
    ) => {
      const { category, id, title, description, date } = action.payload;

      if (state[category] && state[category][id]) {
        if (title !== undefined) {
          state[category][id].title = title;
        }
        if (description !== undefined) {
          state[category][id].description = description;
        }
        if (date !== undefined) {
          state[category][id].date = date;
        }
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
