import { Task, TaskStore } from "../../../redux/models";
import { Category, CategoryStore } from "../../../redux/slices/categoriesSlice";
import { IWeekProps } from "./categoryModel";

export interface ITaskProps {
  newTaskTitle: string | null;
  setNewTaskTitle: React.Dispatch<React.SetStateAction<string | null>>;
  newTaskDescription: string | null;
  setNewTaskDescription: React.Dispatch<React.SetStateAction<string | null>>;
  handleTaskCreate: () => void;
  handleTaskEdit: () => void;
  toggleTaskModal: ({ isOpen }: { isOpen: boolean }) => void;
  isTaskModalOpen: boolean;
  editTask: Task;
}
export interface ITaskModalProps {
  onClose: () => void;
  handleTaskCreate: () => void;
  handleTaskEdit: () => void;
  title: string | null;
  setTitle: React.Dispatch<React.SetStateAction<string | null>>;
  description: string | null;
  setDescription: React.Dispatch<React.SetStateAction<string | null>>;
  category: string | null;
  setCategory: React.Dispatch<React.SetStateAction<string | null>>;
  categories: CategoryStore;
  onAddCategory: () => void;
  editTask: Task;
  weekProps: IWeekProps;
}

export interface ITaskListProps {
  toggleCategory: (categoryId: string) => void;
  hiddenCategories: Set<string>;
  tasks: TaskStore;
  activeCategories: Category[];
  categoriesWithTasks: Category[];
  toggleTaskModal: ({
    isOpen,
    haveCategory,
  }: {
    isOpen: boolean;
    haveCategory?: Category;
  }) => void;
}
