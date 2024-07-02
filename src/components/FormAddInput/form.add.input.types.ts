import { TaskItem } from "../TaskItem/task.item.types";

export type FormAddInputProps = {
  onAddTask: (newTask: TaskItem) => void;
};
