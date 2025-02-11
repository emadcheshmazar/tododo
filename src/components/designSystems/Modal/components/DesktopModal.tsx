"use client"
import React from "react"
import Modal from "@mui/material/Modal"
import { Box } from "@mui/material"
import { DesktopModalProps } from "../models"

const DesktopModal: React.FC<DesktopModalProps> = ({
  open,
  onClose,
  children,
  hideBackdrop,
}) => {
  return (
    <Modal open={open} onClose={onClose} hideBackdrop={hideBackdrop}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "fit-content",
          minWidth: "400px",
          bgcolor: "background.paper",
          borderRadius: "4px",
          boxShadow:
            "var(--Droplist-X, 0px) var(--Droplist-Y, 2px) var(--Droplist-Blur, 4px) var(--Droplist-Spread, 0px) rgba(0, 0, 0, 0.10)",
        }}
      >
        {children}
      </Box>
    </Modal>
  )
}

export default DesktopModal
