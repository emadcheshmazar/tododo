// src/redux/provider/ReduxProvider.tsx
import React from "react";
import { Provider } from "react-redux";
import { AppReduxStore, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";

interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return (
    <Provider store={AppReduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
