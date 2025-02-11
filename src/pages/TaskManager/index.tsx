import React from "react";
import { Box } from "@mui/material";
import TaskModals from "./components/TaskModals";
import { useTaskManagerService } from "./hooks/useTaskManagerService";
import TaskList from "./components/TaskList";
import { useCategoryService } from "./hooks/useCategoryService";
import { useTaskService } from "./hooks/useTaskService";
// import { useDateService } from "./hooks/useDateService";
import Week from "./components/Week";
import { useDateService } from "./hooks/useDateService";

const TaskManager: React.FC = () => {
  const {
    hiddenCategories,
    tasks,
    toggleCategory,
    categories,
    activeCategories,
    categoriesWithTasks,
  } = useTaskManagerService();

  const {
    handleCategoryCreate,
    newCategoryCaption,
    newCategoryName,
    setNewCategoryCaption,
    setNewCategoryName,
    selectedCategory,
    setSelectedCategory,
    isCategoryModalOpen,
    toggleCategoryModal,
  } = useCategoryService();

  const {
    handleTaskCreate,
    newTaskDescription,
    newTaskTitle,
    setNewTaskDescription,
    setNewTaskTitle,
    toggleTaskModal,
    isTaskModalOpen,
    handleTaskEdit,
    editTask,
  } = useTaskService({ selectedCategory, setSelectedCategory });

  const { weekDays, selectedDate, setSelectedDate, getDayName } =
    useDateService();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "absolute",
        top: 0,
        left: 0,
        m: "0 auto",
      }}
    >
      <Week />

      <Box
        sx={{
          width: "100%",
          position: "sticky",
          top: 0,
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TaskList
          tasks={tasks}
          hiddenCategories={hiddenCategories}
          toggleCategory={toggleCategory}
          activeCategories={activeCategories}
          categoriesWithTasks={categoriesWithTasks}
          toggleTaskModal={toggleTaskModal}
        />
      </Box>

      <Box
        sx={{
          width: "40%",
          mt: 2,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <TaskModals
          categories={categories}
          taskProps={{
            handleTaskCreate,
            newTaskDescription,
            newTaskTitle,
            setNewTaskDescription,
            setNewTaskTitle,
            toggleTaskModal,
            isTaskModalOpen,
            handleTaskEdit,
            editTask,
          }}
          categoryProps={{
            handleCategoryCreate,
            newCategoryCaption,
            newCategoryName,
            setNewCategoryCaption,
            setNewCategoryName,
            selectedCategory,
            setSelectedCategory,
            isCategoryModalOpen,
            toggleCategoryModal,
          }}
          weekProps={{
            weekDays,
            selectedDate,
            setSelectedDate,
            getDayName,
          }}
        />
      </Box>
    </Box>
  );
};

export default TaskManager;
