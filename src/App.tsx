// src/App.tsx

import React from "react";
import ReduxProvider from "./redux/provider";

const App: React.FC = () => {
  return (
    <ReduxProvider>
      <></>
    </ReduxProvider>
  );
};

export default App;
