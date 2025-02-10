import { Box, Button } from "@mui/material";
import CustomModal from "../../../../components/designSystems/Modal";
import useResponsive from "../../../../hooks/generals/useResponsive";
import { useCategoryService } from "../../hooks/useCategoryService";
import { useTaskService } from "../../hooks/useTaskService";
import CategoryModalContent from "./CategoryModalContent";
import AddIcon from "@mui/icons-material/Add";
import TaskModalContent from "./TaskModalContent";
import { CategoryStore } from "../../../../redux/slices/categoriesSlice";
import { TaskStore } from "../../../../redux/models";

function TaskModals({
  categories,
  tasks,
}: {
  categories: CategoryStore;
  tasks: TaskStore;
}) {
  const isMobile = useResponsive();
  console.log(tasks, "tasks");

  const {
    categoryModal,
    handleCategoryCreate,
    newCategoryCaption,
    newCategoryName,
    setNewCategoryCaption,
    setNewCategoryName,
    selectedCategory,
    setSelectedCategory,
  } = useCategoryService();

  const {
    handleTaskCreate,
    // handleTaskMark,
    newTaskDescription,
    newTaskTitle,
    setNewTaskDescription,
    setNewTaskTitle,
    taskModal,
  } = useTaskService({ selectedCategory });

  return (
    <>
      <Box
        sx={{
          width: "100%",
          m: "0 auto 24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon sx={{ mr: "-8px", ml: "8px" }} />}
          onClick={() => {
            taskModal.toggleModal({ isOpen: true });
          }}
        >
          افزودن تسک
        </Button>
      </Box>
      <CustomModal
        config={{
          open: taskModal.isOpen,
          onClose() {
            taskModal.toggleModal({ isOpen: false });
          },
          type: isMobile ? "mobile" : "desktop",
        }}
      >
        <TaskModalContent
          categories={categories}
          category={selectedCategory}
          setCategory={setSelectedCategory}
          onAddCategory={() => {
            categoryModal.toggleModal({ isOpen: true });
          }}
          description={newTaskDescription}
          title={newTaskTitle}
          handleTaskCreate={handleTaskCreate}
          onClose={() => {
            taskModal.toggleModal({ isOpen: false });
          }}
          setDescription={setNewTaskDescription}
          setTitle={setNewTaskTitle}
        />
      </CustomModal>
      <CustomModal
        config={{
          open: categoryModal.isOpen,
          onClose() {
            categoryModal.toggleModal({ isOpen: false });
          },
          type: isMobile ? "mobile" : "desktop",
        }}
      >
        <CategoryModalContent
          caption={newCategoryCaption}
          name={newCategoryName}
          handleCategoryCreate={handleCategoryCreate}
          onClose={() => {
            categoryModal.toggleModal({ isOpen: false });
          }}
          setCaption={setNewCategoryCaption}
          setName={setNewCategoryName}
        />
      </CustomModal>
    </>
  );
}

export default TaskModals;
