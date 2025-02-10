import { useState } from "react";
import { addCategory, removeCategory } from "../../../core/categoryCore";
import { useCategories } from "../../../hooks/redux/useCategoriesAndTasks";
import { closeModalById, openModalById } from "../../../core/modalCore";
import { useModalState } from "../../../hooks/generals/useModalOpen";

export const useCategoryService = () => {
  const categories = useCategories();

  const [newCategoryName, setNewCategoryName] = useState<string | null>(null);
  const [newCategoryCaption, setNewCategoryCaption] = useState<string | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryModalId = "categoryModal";

  const handleCategoryCreate = () => {
    if (newCategoryName && newCategoryCaption) {
      addCategory({
        name: newCategoryName.trim(),
        caption: newCategoryCaption.trim(),
      });
      setNewCategoryName(null);
      setNewCategoryCaption(null);
      toggleCategoryModal({ isOpen: false });
    }
  };

  const toggleCategoryModal = ({ isOpen }: { isOpen: boolean }) => {
    if (isOpen) {
      openModalById(categoryModalId);
    } else {
      closeModalById(categoryModalId);
    }
  };

  const isCategoryModalOpen: boolean = useModalState({
    modalId: categoryModalId,
  });

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
    toggleCategoryModal,
    isCategoryModalOpen,
  };
};
