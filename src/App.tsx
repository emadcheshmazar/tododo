import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ReduxProvider from "./redux/provider";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";

const App: React.FC = () => {
  return (
    <ReduxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-tasks" element={<TaskManager />} />
        </Routes>
      </Router>
    </ReduxProvider>
  );
};

export default App;
