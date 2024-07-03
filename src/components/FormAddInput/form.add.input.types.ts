import { TaskItemType } from "../TaskItem/task.item.types";

export type FormAddInputProps = {
  onAddTask: (newTask: TaskItemType) => void;
};
