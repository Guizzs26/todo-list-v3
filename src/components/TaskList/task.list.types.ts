import { TaskItemType } from "../TaskItem/task.item.types";

export type TaskListProps = {
  tasks: TaskItemType[];
  onDeleteTask: (id: string) => void;
  onToggleTask: (id: string) => void;
};
