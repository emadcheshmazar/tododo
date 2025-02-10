import { useState } from "react";
import { addCategory, removeCategory } from "../../../core/categoryCore";
import { useCategories } from "../../../hooks/redux/useCategoriesAndTasks";

export const useCategoryService = () => {
  const categories = useCategories();

  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [newCategoryCaption, setNewCategoryCaption] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);

  const handleCategoryCreate = () => {
    if (newCategoryName && newCategoryCaption) {
      addCategory({ name: newCategoryName.trim(), caption: newCategoryCaption.trim() });
      setNewCategoryName("");
      setNewCategoryCaption("");
      toggleCategoryModal({isOpen: false})
    }
  };
  const toggleCategoryModal = ({ isOpen }: { isOpen: boolean }) => {
    setCategoryModalOpen(isOpen);
  };


  return {
    categories,
    newCategoryName,
    newCategoryCaption,
    selectedCategory,
    setNewCategoryName,
    setNewCategoryCaption,
    setSelectedCategory,
    handleCategoryCreate,
    removeCategory,
    categoryModal: {
      isOpen: categoryModalOpen,
      toggleModal: toggleCategoryModal,
    },
  };
};
