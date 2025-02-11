import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ReduxProvider from "./redux/provider";
import TaskManager from "./pages/TaskManager";
import { ERoutes } from "./constants/routes";

const App: React.FC = () => {
  return (
    <ReduxProvider>
      <Router>
        <Routes>
          <Route path={ERoutes.home} element={<TaskManager />} />
        </Routes>
      </Router>
    </ReduxProvider>
  );
};

export default App;
