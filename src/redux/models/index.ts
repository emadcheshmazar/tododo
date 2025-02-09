export interface Task {
  id: string;
  category: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
}

export type TaskStore = {
  [category: string]: {
    [taskId: string]: Task;
  };
};
