import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { Close, AddCircleOutline } from "@mui/icons-material";
import React from "react";

interface CategoryModalProps {
  onClose: () => void;
  handleCategoryCreate: () => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  caption: string;
  setCaption: React.Dispatch<React.SetStateAction<string>>;
}

function CategoryModalContent({
  onClose,
  handleCategoryCreate,
  name,
  setName,
  caption,
  setCaption,
}: CategoryModalProps) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        p: "8px 16px",
        mx: "auto",
        outline: "none",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
          ایجاد دسته بندی جدید
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            color: "#555",
            "&:hover": { color: "#000" },
          }}
        >
          <Close />
        </IconButton>
      </Box>
      <TextField
        label="نام کتگوری"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ input: { fontSize: "1rem" } }}
      />
      <TextField
        label="توضیحات کتگوری"
        variant="outlined"
        fullWidth
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        multiline
        rows={2}
        sx={{ input: { fontSize: "1rem" } }}
      />

      <Button
        variant="contained"
        fullWidth
        startIcon={<AddCircleOutline />}
        onClick={handleCategoryCreate}
        disabled={!name || !caption}
        sx={{
          bgcolor: "#007bff",
          color: "#fff",
          fontWeight: "bold",
          py: 1.2,
          borderRadius: 2,
          textTransform: "none",
          fontSize: "1rem",
          "&:hover": { bgcolor: "#0056b3" },
        }}
      >
        ایجاد کتگوری
      </Button>
    </Box>
  );
}

export default CategoryModalContent;
