"use client";
import React from "react";
import { ModalProps } from "./models";
import { Box } from "@mui/material";
import DesktopModal from "./components/DesktopModal";
import MobileModal from "./components/MobileModal";

const CustomModal: React.FC<ModalProps> = ({ config, children }) => {
  const { open, onClose, type, hideBackdrop } = config;
  // const topbarProps = { ...topbar, onClose };

  const ModalComponent = type === "desktop" ? DesktopModal : MobileModal;

  return (
    <ModalComponent open={open} onClose={onClose} hideBackdrop={hideBackdrop}>
      <Box>{children}</Box>
    </ModalComponent>
  );
};

export default CustomModal;
