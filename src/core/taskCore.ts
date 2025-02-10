import { AppReduxStore } from "../redux/store";
import {
  initTask as initTaskAction,
  updateTask as updateTaskAction,
  removeTask as removeTaskAction,
  // removeCategoryTasks as removeCategoryTasksAction,
  toggleTask as toggleTaskAction,
} from "../redux/slices/tasksSlice";
import { isCategoryExistById } from "./categoryCore";
import generateUniqueId from "../utils/uniqueId";
import { removeLocalData, storeLocalData } from "../utils/localStorage";
import { Task } from "../redux/models";

export const addTask = ({
  category,
  task,
}: {
  category: string;
  task: {
    title: string | null;
    description?: string | null;
  };
}) => {
  if (!isCategoryExistById({ categoryId: category })) {
    console.warn(`کتگوری "${category}" وجود ندارد.`);
    return;
  }
  if (task.title) {
    const newTask = {
      id: generateUniqueId(),
      category,
      title: task.title,
      ...(task.description && { description: task.description }),
      completed: false,
    };

    console.log(newTask, "newTask");
    AppReduxStore.dispatch(initTaskAction({ task: newTask }));
  }
};

export const updateTask = ({
  category,
  title,
  description,
  id,
}: {
  category: string;
  title: string;
  description?: string;
  id: string;
}) => {
  if (!isCategoryExistById({ categoryId: category })) {
    console.warn(`کتگوری "${category}" وجود ندارد.`);
    return;
  }

  console.log("1");

  const editedTask = {
    id,
    category,
    title: title,
    ...(description !== null && { description }),
  };
  console.log(editedTask, "edited task");
  AppReduxStore.dispatch(updateTaskAction({ ...editedTask }));
};

export const removeTask = ({
  category,
  taskId,
}: {
  category: string;
  taskId: string;
}) => {
  if (!isCategoryExistById({ categoryId: category })) {
    console.warn(`کتگوری "${category}" وجود ندارد.`);
    return;
  }

  AppReduxStore.dispatch(removeTaskAction({ category, id: taskId }));
};

export const markTaskAsCompleted = ({
  category,
  id,
}: {
  category: string;
  id: string;
}) => {
  AppReduxStore.dispatch(toggleTaskAction({ category, id }));
};

export const unmarkTaskAsCompleted = ({
  category,
  id,
}: {
  category: string;
  id: string;
}) => {
  AppReduxStore.dispatch(toggleTaskAction({ category, id }));
};

export const getTaskStatus = ({
  category,
  taskId,
}: {
  category: string;
  taskId: string;
}): boolean | undefined => {
  if (!isCategoryExistById({ categoryId: category })) {
    console.warn(`کتگوری "${category}" وجود ندارد.`);
    return;
  }

  const state = AppReduxStore.getState();
  const task = state.tasks[category]?.[taskId];
  if (task) {
    return task.completed;
  } else {
    console.warn(`تسک با ID ${taskId} در کتگوری ${category} یافت نشد.`);
  }
};

export const setTaskForEdit = ({ task }: { task: Task }) => {
  storeLocalData("task4Edit", task);
};

export const clearTaskForEdit = () => {
  removeLocalData("task4Edit");
};
