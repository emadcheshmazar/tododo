import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DateEntry {
  date: string;
}

export type DateStore = {
  activeDate: string | null;
};

const initialState: DateStore = {
  activeDate: null,
};

const datesSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setActiveDate: (state, action: PayloadAction<string>) => {
      state.activeDate = action.payload;
    },
  },
});

export const { setActiveDate } = datesSlice.actions;
export default datesSlice.reducer;
