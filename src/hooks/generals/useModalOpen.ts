import { useAppSelector } from "../../redux/store";

export const useModalState = (args: { modalId: string }) => {
  const { modalId } = args;

  const modal = useAppSelector((state) => state.modal[modalId]);
  return modal;
};
