// src/components/TaskCard/TaskCard.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import useTaskState from "../../hooks/redux/useTaksState";
import {
  markTaskAsCompleted,
  unmarkTaskAsCompleted,
} from "../../core/taskCore";

interface TaskCardProps {
  taskConfig: { category: string; id: string }; // کانفیگ تسک
}

const TaskCard: React.FC<TaskCardProps> = ({ taskConfig }) => {
  // استفاده از هوک ما برای دریافت وضعیت تسک
  const task = useTaskState(taskConfig);

  const handleChange = (checked: boolean) => {
    if (checked) {
      markTaskAsCompleted({ category: task.category, id: task.id });
    } else {
      unmarkTaskAsCompleted({
        category: task.category,
        id: task.id,
      });
    }
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          وضعیت: {task.completed ? "تکمیل شده" : "فعال"}
        </Typography>
        {/* {task.dueDate && (
          <Typography variant="body2" color="text.secondary">
            تاریخ انجام: {task.dueDate}
          </Typography>
        )} */}
      </CardContent>
      <CardActions>
        <Checkbox
          checked={task.completed}
          onChange={(e) => handleChange(e.target.checked)}
          color="primary"
        />
        <Button
          onClick={() => handleChange(!task.completed)}
          variant="contained"
          color="primary"
        >
          {task.completed ? "علامت به عنوان فعال" : "علامت به عنوان تکمیل شده"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
