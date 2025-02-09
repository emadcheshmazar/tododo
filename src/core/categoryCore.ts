import { AppReduxStore } from "../redux/store";
import {
  addCategory as addCategoryAction,
  removeCategory as removeCategoryAction,
  updateCategory as updateCategoryAction,
} from "../redux/slices/categoriesSlice";
// import { v4 as uuidv4 } from "uuid";

//  بررسی موجود بودن کتگوری با نام
export const isCategoryExistByName = ({
  categoryName,
}: {
  categoryName: string;
}): boolean => {
  const state = AppReduxStore.getState();
  return Object.values(state.categories).some(
    (category) => category.name === categoryName
  );
};
//  بررسی موجود بودن کتگوری با ای دی
export const isCategoryExistById = ({
  categoryId,
}: {
  categoryId: string;
}): boolean => {
  const state = AppReduxStore.getState();
  return !!state.categories[categoryId];
};

//افزودن کتگوری جدید
export const addCategory = ({
  name,
  caption,
}: {
  name: string;
  caption: string;
}) => {
  if (isCategoryExistByName({ categoryName: name })) {
    console.warn(`دسته‌بندی "${name}" قبلاً ثبت شده است.`);
    return;
  }

  const newCategory = {
    id: "uuidv4()",
    name,
    caption,
  };

  AppReduxStore.dispatch(addCategoryAction(newCategory));
};

//ویرایش کتگوری
export const updateCategory = ({
  id,
  name,
  caption,
}: {
  id: string;
  name: string;
  caption: string;
}) => {
  const state = AppReduxStore.getState();
  if (!state.categories[id]) {
    console.warn(`دسته‌بندی با ID ${id} یافت نشد.`);
    return;
  }

  AppReduxStore.dispatch(updateCategoryAction({ id, name, caption }));
};

//حذف کتگوری
export const removeCategory = ({ id }: { id: string }) => {
  const state = AppReduxStore.getState();
  if (!state.categories[id]) {
    console.warn(`دسته‌بندی با ID ${id} وجود ندارد.`);
    return;
  }

  AppReduxStore.dispatch(removeCategoryAction({ id }));
};
