"use client";
import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import { MobileModalProps } from "../models";

const MobileModal: React.FC<MobileModalProps> = ({
  open,
  onClose,
  children,
  hideBackdrop,
}) => {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      hideBackdrop={hideBackdrop}
      PaperProps={{
        sx: {
          height: "fit-content",
        },
      }}
    >
      <Box>{children}</Box>
    </Drawer>
  );
};

export default MobileModal;
