import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Category {
  id: string;
  name: string;
  caption: string;
}

export type CategoryStore = {
  [id: string]: Category;
};

const initialState: CategoryStore = {
  default: { id: "default", name: "عمومی", caption: "کتگوری پیش‌فرض" },
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      const category = action.payload;
      state[category.id] = category;
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      const category = action.payload;
      if (state[category.id]) {
        state[category.id] = { ...state[category.id], ...category };
      }
    },
    removeCategory: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      if (id !== "default") {
        delete state[id];
      }
    },
  },
});

export const { addCategory, updateCategory, removeCategory } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
