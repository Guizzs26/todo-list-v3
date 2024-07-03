import {} from "react";

import TaskItem from "../TaskItem/TaskItem";
import { TaskListProps } from "./task.list.types";

export default function TaskList({
  tasks,
  onDeleteTask,
  onToggleTask,
}: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
          key={task.id}
        />
      ))}
    </ul>
  );
}
