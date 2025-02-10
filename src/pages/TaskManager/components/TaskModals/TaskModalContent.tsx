import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  FormControl,
  Autocomplete,
} from "@mui/material";
import { Close, AddTask } from "@mui/icons-material";
import React from "react";
import { CategoryStore } from "../../../../redux/slices/categoriesSlice";
import AddIcon from "@mui/icons-material/Add";
import { getLocalData } from "../../../../utils/localStorage";
import { Task } from "../../../../redux/models";
interface TaskModalProps {
  onClose: () => void;
  handleTaskCreate: () => void;
  handleTaskEdit: () => void;
  title: string | null;
  setTitle: React.Dispatch<React.SetStateAction<string | null>>;
  description: string | null;
  setDescription: React.Dispatch<React.SetStateAction<string | null>>;
  category: string | null;
  setCategory: React.Dispatch<React.SetStateAction<string | null>>;
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
  handleTaskEdit,
}: TaskModalProps) {
  const editeTask: Task = getLocalData("task4Edit") as Task;
  console.log({ editeTask }, "modal task logs");

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
        value={title !== null ? title : editeTask?.title || ""}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ input: { fontSize: "1rem" } }}
      />
      <TextField
        label="توضیحات تسک"
        variant="filled"
        fullWidth
        value={
          description !== null ? description : editeTask?.description || ""
        }
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={3}
        sx={{ input: { fontSize: "1rem" } }}
      />

      <FormControl
        variant="filled"
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Autocomplete
          fullWidth
          options={Object.values(categories)}
          getOptionLabel={(option) => option.name}
          value={
            editeTask
              ? Object.values(categories).find(
                  (cat) => cat.id === editeTask.category
                )
              : Object.values(categories).find((cat) => cat.id === category) ||
                null
          }
          disabled={!!editeTask}
          onChange={(_, newValue) => setCategory(newValue?.id || "")}
          renderInput={(params) => (
            <TextField {...params} label="دسته‌بندی" variant="filled" />
          )}
          noOptionsText={
            <Button
              variant="outlined"
              fullWidth
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
              افزودن دسته بندی جدید
            </Button>
          }
        />
        <IconButton
          onClick={onAddCategory}
          sx={{
            color: "#007bff",
            fontWeight: "bold",
            py: 1,
            borderRadius: 2,
            textTransform: "none",
            width: "fit-content",
            fontSize: "1rem",
            border: "none",
            "&:hover": { bgcolor: "#007bff1a" },
          }}
        >
          <AddIcon />
        </IconButton>
      </FormControl>

      <Button
        variant="contained"
        fullWidth
        startIcon={<AddTask />}
        onClick={editeTask ? handleTaskEdit : handleTaskCreate}
        disabled={editeTask ? false : !title || !category}
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
        {editeTask ? "ویرایش تسک" : "ایجاد تسک"}
      </Button>
    </Box>
  );
}

export default TaskModalContent;
