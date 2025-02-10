// src/components/TaskCard/TaskCard.tsx
import React from "react";
import { Card, Typography, Checkbox, Box, IconButton } from "@mui/material";
import {
  CheckCircle,
  RadioButtonUnchecked,
  Edit,
  Delete,
} from "@mui/icons-material";
import useTaskState from "../../hooks/redux/useTasksState";
import {
  markTaskAsCompleted,
  removeTask,
  setTaskForEdit,
  unmarkTaskAsCompleted,
  // updateTask,
} from "../../core/taskCore";
import { Category } from "../../redux/slices/categoriesSlice";
import { openModalById } from "../../core/modalCore";

interface TaskCardProps {
  taskConfig: {
    category: Category;
    id: string;
  };
}

const TaskCard: React.FC<TaskCardProps> = ({ taskConfig }) => {
  const task = useTaskState(taskConfig);

  const handleChange = (checked: boolean) => {
    if (checked) {
      markTaskAsCompleted({ category: task.category, id: task.id });
    } else {
      unmarkTaskAsCompleted({ category: task.category, id: task.id });
    }
  };

  const handleDeleteTask = () => {
    removeTask({ category: task.category, taskId: task.id });
  };

  const handleEditTask = () => {
    setTaskForEdit({ task });
    openModalById("taskModal");
    // updateTask({ category: task.category, })
  };

  return (
    <Card
      sx={{
        width: "100%",
        m: 1,
        p: "10px",
        borderRadius: "12px",
        backgroundColor: task.completed ? "#f0fdf4" : "#fff",
        border: `1px solid ${task.completed ? "#4caf50" : "#ccc"}`,
        transition: "transform 0.2s, box-shadow 0.2s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "flex-start", flexDirection: "row" }}
      >
        <Checkbox
          checked={task.completed}
          onChange={(e) => handleChange(e.target.checked)}
          icon={<RadioButtonUnchecked fontSize="small" />}
          checkedIcon={
            <CheckCircle fontSize="small" sx={{ color: "#4caf50" }} />
          }
          sx={{ p: "5px 0 0 0", ml: 1 }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              fontSize: "0.95rem",
              fontWeight: 700,
              color: task.completed ? "#4caf50" : "#333",
            }}
          >
            {task.title}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 400,
              color: "#333",
            }}
          >
            {task.description}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          size="small"
          onClick={handleEditTask}
          sx={{ color: "#1976d2" }}
        >
          <Edit fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={handleDeleteTask}
          sx={{ color: "#d32f2f" }}
        >
          <Delete fontSize="small" />
        </IconButton>
      </Box>
    </Card>
  );
};

export default TaskCard;
