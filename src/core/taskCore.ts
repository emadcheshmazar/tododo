import { AppReduxStore } from "../redux/store";
import {
  initTask as initTaskAction,
  updateTask as updateTaskAction,
  removeTask as removeTaskAction,
  // removeCategoryTasks as removeCategoryTasksAction,
  toggleTask as toggleTaskAction,
} from "../redux/slices/tasksSlice";
import { isCategoryExistByName } from "./categoryCore";
// import { v4 as uuidv4 } from "uuid";

// افزودن تسک به کتگوری
export const addTask = ({
  category,
  task,
}: {
  category: string;
  task: {
    title: string;
    description?: string;
  };
}) => {
  if (!isCategoryExistByName({ categoryName: category })) {
    console.warn(`کتگوری "${category}" وجود ندارد.`);
    return;
  }

  const newTask = {
    id: "uuidv4()",
    category,
    title: task.title,
    description: task.description,
    completed: false,
  };

  AppReduxStore.dispatch(initTaskAction({ task: newTask }));
};

// ویرایش تسک داخل کتگوری
export const updateTask = ({
  category,
  task,
}: {
  category: string;
  task: {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
  };
}) => {
  if (!isCategoryExistByName({ categoryName: category })) {
    console.warn(`کتگوری "${category}" وجود ندارد.`);
    return;
  }

  AppReduxStore.dispatch(updateTaskAction({ task: { ...task, category } }));
};

// حذف تسک از کتگوری
export const removeTask = ({
  category,
  taskId,
}: {
  category: string;
  taskId: string;
}) => {
  if (!isCategoryExistByName({ categoryName: category })) {
    console.warn(`کتگوری "${category}" وجود ندارد.`);
    return;
  }

  AppReduxStore.dispatch(removeTaskAction({ category, id: taskId }));
};

// متد مارک کردن تسک (تکمیل تسک)
export const markTaskAsCompleted = ({
  category,
  id,
}: {
  category: string;
  id: string;
}) => {
  // استفاده از toggleTask برای تغییر وضعیت به true (مارک کردن)
  AppReduxStore.dispatch(toggleTaskAction({ category, id }));
};

// متد بدون مارک کردن تسک (غیرفعال کردن)
export const unmarkTaskAsCompleted = ({
  category,
  id,
}: {
  category: string;
  id: string;
}) => {
  // ابتدا تسک رو پیدا می‌کنیم، سپس وضعیت completed رو به false تغییر می‌دهیم.
  AppReduxStore.dispatch(toggleTaskAction({ category, id }));
};
// گرفتن وضعیت تسک داخل کتگوری
export const getTaskStatus = ({
  category,
  taskId,
}: {
  category: string;
  taskId: string;
}): boolean | undefined => {
  if (!isCategoryExistByName({ categoryName: category })) {
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
