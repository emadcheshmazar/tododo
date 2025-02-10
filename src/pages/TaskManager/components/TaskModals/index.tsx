import { Box, Button } from "@mui/material";
import CustomModal from "../../../../components/designSystems/Modal";
import useResponsive from "../../../../hooks/generals/useResponsive";
import { useCategoryService } from "../../hooks/useCategoryService";
import { useTaskService } from "../../hooks/useTaskService";
import CategoryModalContent from "./CategoryModalContent";
import AddIcon from "@mui/icons-material/Add";
import TaskModalContent from "./TaskModalContent";
import { CategoryStore } from "../../../../redux/slices/categoriesSlice";

function TaskModals({ categories }: { categories: CategoryStore }) {
  const isMobile = useResponsive();

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

  console.log(selectedCategory, "selectedCategory");

  const {
    handleTaskCreate,
    // handleTaskMark,
    newTaskDescription,
    newTaskTitle,
    setNewTaskDescription,
    setNewTaskTitle,
    taskModal,
  } = useTaskService({ selectedCategory, setSelectedCategory });

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
            taskModal.toggleModal({ isOpen: false });
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
          handleCategoryCreate={() => {
            taskModal.toggleModal({ isOpen: true });
            handleCategoryCreate();
          }}
          onClose={() => {
            taskModal.toggleModal({ isOpen: true });
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
