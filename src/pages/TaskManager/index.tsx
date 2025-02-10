// src/pages/home/components/TaskManager.tsx

import React from "react";
import { Box } from "@mui/material";
import TaskModals from "./components/TaskModals";
import { useTaskManagerService } from "./hooks/useTaskManagerService";
import TaskList from "./components/TaskList";

const TaskManager: React.FC = () => {
  const { categories, tasks } = useTaskManagerService();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <TaskList tasks={tasks} categories={categories} />
      <TaskModals categories={categories} />

      {/* <div>
        <h3>ایجاد کتگوری</h3>
        <input
          type="text"
          placeholder="نام کتگوری"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <input
          type="text"
          placeholder="توضیحات کتگوری"
          value={newCategoryCaption}
          onChange={(e) => setNewCategoryCaption(e.target.value)}
        />
        <button onClick={handleCategoryCreate}>ایجاد کتگوری</button>
      </div> */}
      {/* لیست کتگوری‌ها */}
      {/* <div>
        <h3>کتگوری‌های موجود</h3>
        <ul>
          {Object.values(categories).map((category) => (
            <li key={category.id}>
              {category.name}
              <button onClick={() => removeCategory({ id: category.id })}>
                حذف
              </button>
            </li>
          ))}
        </ul>
      </div> */}
      {/* ایجاد تسک */}
      {/* <div>
        <h3>ایجاد تسک</h3>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">انتخاب کتگوری</option>
          {Object.values(categories).map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="عنوان تسک"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="توضیحات تسک"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={handleTaskCreate}>ایجاد تسک</button>
      </div> */}
      {/* لیست تسک‌ها */}
      {/* <div>
        {Object.values(categories).map((category) => (
          <div key={category.id}>
            <h4>{category.name}</h4>
            <ul>
              {Object.values(tasks[category.name] || {}).map((task) => (
                // <li key={task.id}>
                //   <div>
                //     <strong>{task.title}</strong> - {task.description}
                //     <button
                //       onClick={() =>
                //         handleTaskMark(category.name, task.id, task.completed)
                //       }
                //     >
                //       {task.completed ? "غیرفعال کردن" : "تکمیل کردن"}
                //     </button>
                //     <button
                //       onClick={() =>
                //         removeTask({ category: category.name, taskId: task.id })
                //       }
                //     >
                //       حذف
                //     </button>
                //   </div>
                // </li>
                <TaskCard
                  key={category.id}
                  taskConfig={{ category, id: task.id }}
                />
              ))}
            </ul>
          </div>
          // <TaskCard key={category.id} taskConfig={{ category, id: tas }} />
        ))}
      </div> */}
    </Box>
  );
};

export default TaskManager;
