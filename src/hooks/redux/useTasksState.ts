import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Task } from "../../redux/models";
import { Category } from "../../redux/slices/categoriesSlice";

const useTasksState = (taskConfig: { category: Category; id: string }) => {
  const task = useSelector(
    (state: RootState) => state.tasks[taskConfig.category.id][taskConfig.id]
  );

  if (!task) {
    console.warn(
      `Task with id ${taskConfig.id} not found in category ${taskConfig.category}`
    );
    return {} as Task;
  }

  return task;
};

export default useTasksState;
