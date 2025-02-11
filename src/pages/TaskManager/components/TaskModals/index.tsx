import { Box, Button } from "@mui/material";
import CustomModal from "../../../../components/designSystems/Modal";
import useResponsive from "../../../../hooks/generals/useResponsive";
import CategoryModalContent from "./CategoryModalContent";
import AddIcon from "@mui/icons-material/Add";
import TaskModalContent from "./TaskModalContent";
import { CategoryStore } from "../../../../redux/slices/categoriesSlice";
import { ITaskProps } from "../../models/taskModel";
import { ICategoryProps, IWeekProps } from "../../models/categoryModel";

function TaskModals({
  categories,
  taskProps,
  categoryProps,
  weekProps,
}: {
  categories: CategoryStore;
  taskProps: ITaskProps;
  categoryProps: ICategoryProps;
  weekProps: IWeekProps;
}) {
  const isMobile = useResponsive();
  const {
    handleTaskCreate,
    handleTaskEdit,
    isTaskModalOpen,
    newTaskDescription,
    newTaskTitle,
    setNewTaskDescription,
    setNewTaskTitle,
    toggleTaskModal,
    editTask,
  } = taskProps;

  const {
    handleCategoryCreate,
    isCategoryModalOpen,
    newCategoryCaption,
    newCategoryName,
    selectedCategory,
    setNewCategoryCaption,
    setNewCategoryName,
    setSelectedCategory,
    toggleCategoryModal,
  } = categoryProps;

  return (
    <>
      <Box
        sx={{
          width: "100%",
          m: "0 auto 24px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "end",
        }}
      >
        <Button
          variant="text"
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
          editTask={editTask}
          weekProps={weekProps}
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
