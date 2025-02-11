export interface ICategoryProps {
  newCategoryName: string | null;
  setNewCategoryName: React.Dispatch<React.SetStateAction<string | null>>;
  newCategoryCaption: string | null;
  setNewCategoryCaption: React.Dispatch<React.SetStateAction<string | null>>;
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
  handleCategoryCreate: () => void;
  toggleCategoryModal: ({ isOpen }: { isOpen: boolean }) => void;
  isCategoryModalOpen: boolean;
}

export interface ICategoryModalProps {
  onClose: () => void;
  handleCategoryCreate: () => void;
  name: string | null;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
  caption: string | null;
  setCaption: React.Dispatch<React.SetStateAction<string | null>>;
}
export interface IWeekProps {
  weekDays: string[];
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  getDayName: (date: string) => string;
}
