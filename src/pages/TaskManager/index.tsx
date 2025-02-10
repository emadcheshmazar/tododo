// src/pages/home/components/TaskManager.tsx

import React from "react";
import { Box } from "@mui/material";
import TaskModals from "./components/TaskModals";
import { useTaskManagerService } from "./hooks/useTaskManagerService";
import TaskList from "./components/TaskList";

const TaskManager: React.FC = () => {
  const { categories, tasks } = useTaskManagerService();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <TaskList tasks={tasks} categories={categories} />
      <TaskModals categories={categories} />
    </Box>
  );
};

export default TaskManager;
