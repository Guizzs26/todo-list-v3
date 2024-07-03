export type TaskItemType = {
  id: string;
  taskName: string;
  isCompleted: boolean;
};

export type TaskItemProps = {
  task: TaskItemType;
  onDeleteTask: (id: string) => void;
  onToggleTask: (id: string) => void;
};
