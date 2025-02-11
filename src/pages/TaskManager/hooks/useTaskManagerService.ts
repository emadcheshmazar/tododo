import { useState } from "react";
import {
  useCategories,
  useTasks,
} from "../../../hooks/redux/useCategoriesAndTasks";

export const useTaskManagerService = () => {
  const tasks = useTasks();
  const categories = useCategories();
  const [hiddenCategories, setHiddenCategories] = useState<Set<string>>(
    new Set()
  );

  const categoriesWithTasks = Object.values(categories).filter(
    (category) =>
      tasks[category.id] && Object.keys(tasks[category.id]).length > 0
  );

  const activeCategories = categoriesWithTasks.filter(
    (category) => !hiddenCategories.has(category.id)
  );

  const toggleCategory = (categoryId: string) => {
    setHiddenCategories((prev) => {
      const newHidden = new Set(prev);
      if (newHidden.has(categoryId)) {
        newHidden.delete(categoryId);
      } else {
        newHidden.add(categoryId);
      }
      return newHidden;
    });
  };

  return {
    tasks,
    categories,
    toggleCategory,
    hiddenCategories,
    activeCategories,
    categoriesWithTasks,
  };
};
