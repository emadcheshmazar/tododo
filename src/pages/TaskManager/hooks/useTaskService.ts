import React, { useState } from "react";
import {
  addTask,
  clearTaskForEdit,
  markTaskAsCompleted,
  unmarkTaskAsCompleted,
  updateTask,
} from "../../../core/taskCore";
import { closeModalById, openModalById } from "../../../core/modalCore";
import { useModalState } from "../../../hooks/generals/useModalOpen";
import { Task } from "../../../redux/models";
import { getLocalData } from "../../../utils/localStorage";
import { Category } from "../../../redux/slices/categoriesSlice";

export const useTaskService = (args?: {
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState<string | null>(null);
  const [newTaskDescription, setNewTaskDescription] = useState<string | null>(
    null
  );
  const isTaskModalOpen: boolean = useModalState({ modalId: "taskModal" });

  const handleTaskCreate = () => {
    if (args?.selectedCategory && newTaskTitle) {
      const newTask = {
        title: newTaskTitle,
        ...(newTaskDescription && { description: newTaskDescription }),
      };

      addTask({
        category: args?.selectedCategory,
        task: newTask,
      });

      setNewTaskTitle(null);
      setNewTaskDescription(null);
      args?.setSelectedCategory("");
      closeModalById("taskModal");
    }
  };

  const editeTask: Task = getLocalData("task4Edit") as Task;

  const handleTaskEdit = () => {
    const updatedTask: Task = {
      title: newTaskTitle !== null ? newTaskTitle : editeTask?.title || "",
      description:
        newTaskDescription !== null
          ? newTaskDescription
          : editeTask?.description || "",
      id: editeTask.id,
      category: editeTask.category,
      completed: editeTask.completed,
    };

    console.log(updatedTask, "updatedTask");
    updateTask(updatedTask);
    toggleTaskModal({ isOpen: false });
  };

  const handleTaskMark = (
    category: string,
    taskId: string,
    completed: boolean
  ) => {
    if (completed) {
      unmarkTaskAsCompleted({ category, id: taskId });
    } else {
      markTaskAsCompleted({ category, id: taskId });
    }
  };

  const toggleTaskModal = ({
    isOpen,
    haveCategory,
  }: {
    isOpen: boolean;
    haveCategory?: Category;
  }) => {
    if (haveCategory) {
      args?.setSelectedCategory(haveCategory.id);
    }
    if (isOpen) {
      openModalById("taskModal");
    } else {
      clearTaskForEdit();
      setNewTaskTitle(null);
      setNewTaskDescription(null);
      closeModalById("taskModal");
    }
  };
  const editTask: Task = getLocalData("task4Edit") as Task;

  return {
    newTaskTitle,
    setNewTaskTitle,
    newTaskDescription,
    setNewTaskDescription,
    handleTaskCreate,
    handleTaskEdit,
    handleTaskMark,
    toggleTaskModal,
    isTaskModalOpen,
    editTask,
  };
};
