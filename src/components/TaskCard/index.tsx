// src/components/TaskCard/TaskCard.tsx
import React from "react";
import { Card, Typography, Checkbox, Box } from "@mui/material";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import useTaskState from "../../hooks/redux/useTasksState";
import {
  markTaskAsCompleted,
  unmarkTaskAsCompleted,
} from "../../core/taskCore";
import { Category } from "../../redux/slices/categoriesSlice";

interface TaskCardProps {
  taskConfig: { category: Category; id: string };
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

  return (
    <Card
      sx={{
        width: "100%",
        m: 1,
        borderRadius: 2,
        backgroundColor: "#fff",
        boxShadow: "none",
        border: "1px solid grey",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
        },
        p: "8px 16px",
      }}
    >
      <Box sx={{ p: 0, m: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            checked={task.completed}
            onChange={(e) => handleChange(e.target.checked)}
            icon={<RadioButtonUnchecked fontSize="small" />}
            checkedIcon={
              <CheckCircle fontSize="small" sx={{ color: "green" }} />
            }
            sx={{ p: 0, ml: 1 }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              fontSize: "1.05rem",
              fontWeight: 800,
              color: "#333",
            }}
          >
            {task.title}
          </Typography>
        </Box>
        {task.description && (
          <Typography
            variant="body2"
            sx={{ mt: 1, color: "#666", fontSize: "0.85rem" }}
          >
            {task.description}
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default TaskCard;
