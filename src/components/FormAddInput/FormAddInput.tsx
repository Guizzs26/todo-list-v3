import { useState, FormEvent, ChangeEvent } from "react";

import { TaskItemType } from "../TaskItem/task.item.types";
import { FormAddInputProps } from "./form.add.input.types";
import { generateUniqueId } from "../../utils/generateUniqueID";

export default function FormAddInput({ onAddTask }: FormAddInputProps) {
  const [taskName, setTaskName] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!taskName.trim()) return;

    const newTask: TaskItemType = {
      id: generateUniqueId(),
      taskName,
      isCompleted: false,
    };

    onAddTask(newTask);

    setTaskName("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add new task..."
        value={taskName}
        onChange={handleInputChange}
        className="add-task-input"
      />

      <button type="submit" className="add-task-btn">
        Add Task
      </button>
    </form>
  );
}
