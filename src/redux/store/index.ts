// src/redux/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["tasks", "categories"], // ذخیره تسک‌ها و دسته‌ها در localStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const AppReduxStore = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(AppReduxStore);
export type RootState = ReturnType<typeof AppReduxStore.getState>;
