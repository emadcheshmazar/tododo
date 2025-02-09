// src/hooks/redux/useTaskState.ts
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store"; 
import { Task } from "../../redux/models";

const useTaskState = (taskConfig: { category: string; id: string }) => {
  const task = useSelector(
    (state: RootState) => state.tasks[taskConfig.category]?.[taskConfig.id]
  );

  if (!task) {
    console.warn(
      `Task with id ${taskConfig.id} not found in category ${taskConfig.category}`
    );
    return {} as Task;
  }

  return task;
};

export default useTaskState;
