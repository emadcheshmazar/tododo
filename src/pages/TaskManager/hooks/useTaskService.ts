import React, { useState } from "react";
import {
  addTask,
  markTaskAsCompleted,
  unmarkTaskAsCompleted,
} from "../../../core/taskCore";

export const useTaskService = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskDescription, setNewTaskDescription] = useState<string>("");
  const [taskModalOpen, setTaskModalOpen] = useState<boolean>(false);

  const handleTaskCreate = () => {
    console.log(selectedCategory, newTaskTitle);
    if (selectedCategory && newTaskTitle) {
      addTask({
        category: selectedCategory,
        task: {
          title: newTaskTitle,
          description: newTaskDescription,
        },
      });
      setNewTaskTitle("");
      setNewTaskDescription("");
      setSelectedCategory("");
      toggleTaskModal({ isOpen: false });
    }
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

  const toggleTaskModal = ({ isOpen }: { isOpen: boolean }) => {
    setTaskModalOpen(isOpen);
  };

  return {
    newTaskTitle,
    setNewTaskTitle,
    newTaskDescription,
    setNewTaskDescription,
    handleTaskCreate,
    handleTaskMark,
    taskModal: {
      isOpen: taskModalOpen,
      toggleModal: toggleTaskModal,
    },
  };
};
