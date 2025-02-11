import { closeModal, createModal, openModal } from "../redux/slices/modalSlice";
import { AppReduxStore } from "../redux/store";

export const isModalExisted = (modalId: string): boolean => {
  const state = AppReduxStore.getState();
  return modalId in state.modal;
};

export const openModalById = (modalId: string) => {

  if (!isModalExisted(modalId)) {
    AppReduxStore.dispatch(createModal(modalId)); 
  }

  AppReduxStore.dispatch(openModal(modalId));
};

export const closeModalById = (modalId: string) => {
  if (isModalExisted(modalId)) {
    AppReduxStore.dispatch(closeModal(modalId));
  } else {
    console.error(`مودال با شناسه "${modalId}" وجود ندارد`);
  }
};

export const isModalOpenById = (modalId: string): boolean => {
  if (isModalExisted(modalId)) {
    const state = AppReduxStore.getState();
    return state.modal[modalId] || false;
  }
  console.error(`مودال با شناسه "${modalId}" وجود ندارد`);
  return false;
};
