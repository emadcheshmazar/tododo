"use client";
import React from "react";
import { Chip } from "@mui/material";

interface ChipBoxProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

const ChipBox: React.FC<ChipBoxProps> = ({ title, isSelected, onClick }) => {
  return (
    <Chip
      label={title}
      onClick={onClick}
      sx={{
        padding: "6px 10px",
        height: "32px",
        borderRadius: "16px",
        fontWeight: 500,
        backgroundColor: isSelected ? "#007BFF" : "#E0E0E0",
        color: isSelected ? "#fff" : "#333",
        border: `1px solid ${isSelected ? "#007BFF" : "#A0A0A0"}`,
        transition: "0.3s",
        "&:hover": {
          backgroundColor: isSelected ? "#0056b3" : "#d6d6d6",
        },
      }}
    />
  );
};

export default ChipBox;
