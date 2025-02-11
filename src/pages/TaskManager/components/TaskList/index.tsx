import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TaskCard from "../../../../components/TaskCard";
import CategoryFilter from "../CategoryFilter";
import AddIcon from "@mui/icons-material/Add";
import { ITaskListProps } from "../../models/taskModel";

function TaskList({
  toggleCategory,
  hiddenCategories,
  tasks,
  activeCategories,
  categoriesWithTasks,
  toggleTaskModal,
}: ITaskListProps) {
  return (
    <Box sx={{ width: { xs: "90%", lg: "40%" }, m: "16px", height: "100%" }}>
      <CategoryFilter
        categories={categoriesWithTasks}
        toggleCategory={toggleCategory}
        hiddenCategories={hiddenCategories}
      />

      {activeCategories.map((category) => {
        const categoryTasks = Object.values(tasks[category.id] || {});
        return (
          <Accordion
            key={category.id}
            sx={{ mb: 1, border: "none", boxShadow: "none" }}
            defaultExpanded
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{category.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {categoryTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  taskConfig={{ category, id: task.id }}
                />
              ))}
              <Button
                variant="text"
                color="primary"
                startIcon={<AddIcon sx={{ mr: "-8px", ml: "8px" }} />}
                onClick={() => {
                  toggleTaskModal({ isOpen: true, haveCategory: category });
                }}
              >
                {`افزودن به ${category.name}`}
              </Button>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}

export default TaskList;
