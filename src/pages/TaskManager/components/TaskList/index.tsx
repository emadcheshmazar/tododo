import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TaskStore } from "../../../../redux/models";
import { CategoryStore } from "../../../../redux/slices/categoriesSlice";
import TaskCard from "../../../../components/TaskCard";

function TaskList({
  tasks,
  categories,
}: {
  tasks: TaskStore;
  categories: CategoryStore;
}) {
  return (
    <Box sx={{ width: { xs: "90%", lg: "40%" }, m: "16px" }}>
      {Object.values(categories)
        .filter(
          (category) =>
            tasks[category.id] && Object.keys(tasks[category.id]).length > 0
        )
        .map((category) => {
          const categoryTasks = Object.values(tasks[category.id]); // گرفتن لیست تسک‌های دسته

          return (
            <Accordion key={category.id} sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{category.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {categoryTasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      taskConfig={{ category, id: task.id }}
                    />
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </Box>
  );
}

export default TaskList;
