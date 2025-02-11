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
import AddIcon from "@mui/icons-material/Add";
import { ITaskModalProps } from "../../models/taskModel";

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
  editTask,
}: ITaskModalProps) {
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
        value={title !== null ? title : editTask?.title || ""}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ input: { fontSize: "1rem" } }}
      />
      <TextField
        label="توضیحات تسک"
        variant="filled"
        fullWidth
        value={description !== null ? description : editTask?.description || ""}
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
            editTask
              ? Object.values(categories).find(
                  (cat) => cat.id === editTask.category
                )
              : Object.values(categories).find((cat) => cat.id === category) ||
                null
          }
          disabled={!!editTask}
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
        onClick={editTask ? handleTaskEdit : handleTaskCreate}
        disabled={editTask ? false : !title || !category}
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
        {editTask ? "ویرایش تسک" : "ایجاد تسک"}
      </Button>
    </Box>
  );
}

export default TaskModalContent;
