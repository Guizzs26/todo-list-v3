import { TaskItemProps } from "./task.item.types";

export default function TaskItem({
  task,
  onDeleteTask,
  onToggleTask,
}: TaskItemProps) {
  const handleChangeInputCheckbox = () => {
    onToggleTask(task.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleChangeInputCheckbox}
        className="check-text-input"
      />

      <span className={`task-name ${task.isCompleted ? "completed" : ""}`}>
        {task.taskName}
      </span>

      <button onClick={() => onDeleteTask(task.id)} className="delete-btn">
        ❌
      </button>
    </li>
  );
}
