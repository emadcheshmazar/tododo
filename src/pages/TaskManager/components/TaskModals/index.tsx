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
  } = useTaskService({ selectedCategory, setSelectedCategory });

  console.log({ isTaskModalOpen }, "isTaskModalOpen");
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
            toggleTaskModal({ isOpen: true });
          }}
        >
          افزودن تسک
        </Button>
      </Box>
      <CustomModal
        config={{
          open: isTaskModalOpen,
          onClose() {
            toggleTaskModal({ isOpen: false });
          },
          type: isMobile ? "mobile" : "desktop",
        }}
      >
        <TaskModalContent
          categories={categories}
          category={selectedCategory}
          setCategory={setSelectedCategory}
          onAddCategory={() => {
            toggleTaskModal({ isOpen: false });
            toggleCategoryModal({ isOpen: true });
          }}
          description={newTaskDescription}
          title={newTaskTitle}
          handleTaskCreate={handleTaskCreate}
          handleTaskEdit={handleTaskEdit}
          onClose={() => {
            toggleTaskModal({ isOpen: false });
          }}
          setDescription={setNewTaskDescription}
          setTitle={setNewTaskTitle}
        />
      </CustomModal>
      <CustomModal
        config={{
          open: isCategoryModalOpen,
          onClose() {
            toggleCategoryModal({ isOpen: false });
          },
          type: isMobile ? "mobile" : "desktop",
        }}
      >
        <CategoryModalContent
          caption={newCategoryCaption}
          name={newCategoryName}
          handleCategoryCreate={() => {
            toggleTaskModal({ isOpen: true });
            handleCategoryCreate();
          }}
          onClose={() => {
            toggleTaskModal({ isOpen: true });
            toggleCategoryModal({ isOpen: false });
          }}
          setCaption={setNewCategoryCaption}
          setName={setNewCategoryName}
        />
      </CustomModal>
    </>
  );
}

export default TaskModals;
