import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Close, AddTask, AddCircleOutline } from "@mui/icons-material";
import React from "react";
import { CategoryStore } from "../../../../redux/slices/categoriesSlice";

interface TaskModalProps {
  onClose: () => void;
  handleTaskCreate: () => void;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  categories: CategoryStore;
  onAddCategory: () => void;
}

function TaskModalContent({
  onClose,
  handleTaskCreate,
  title,
  setTitle,
  description,
  setDescription,
  category,
  setCategory,
  categories,
  onAddCategory,
}: TaskModalProps) {
  console.log(categories, "categories");

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
          ایجاد تسک جدید
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
        label="عنوان تسک"
        variant="filled"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ input: { fontSize: "1rem" } }}
      />
      <TextField
        label="توضیحات تسک"
        variant="filled"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={3}
        sx={{ input: { fontSize: "1rem" } }}
      />

      {/* انتخاب دسته‌بندی */}
      <FormControl fullWidth variant="filled">
        <InputLabel>دسته‌بندی</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          {Object.values(categories).map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.name}
            </MenuItem>
          ))}
          <MenuItem>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<AddCircleOutline />}
              onClick={onAddCategory}
              sx={{
                borderColor: "#007bff",
                color: "#007bff",
                fontWeight: "bold",
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { bgcolor: "#007bff1a", borderColor: "#0056b3" },
              }}
            >
              افزودن کتگوری جدید
            </Button>
          </MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        fullWidth
        startIcon={<AddTask />}
        onClick={handleTaskCreate}
        disabled={!title || !description || !category}
        sx={{
          bgcolor: "#28a745",
          color: "#fff",
          fontWeight: "bold",
          py: 1.2,
          borderRadius: 2,
          textTransform: "none",
          fontSize: "1rem",
          "&:hover": { bgcolor: "#218838" },
        }}
      >
        ایجاد تسک
      </Button>
    </Box>
  );
}

export default TaskModalContent;
