import {
  useCategories,
  useTasks,
} from "../../../hooks/redux/useCategoriesAndTasks";

export const useTaskManagerService = () => {
  const tasks = useTasks();
  const categories = useCategories();

  return { tasks, categories };
};
