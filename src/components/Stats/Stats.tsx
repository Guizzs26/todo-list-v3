import {} from "react";

import { TaskItemType } from "../TaskItem/task.item.types";

export interface StatsProps {
  tasks: TaskItemType[];
}

export default function Stats({ tasks }: StatsProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <div>
      <h3>Task Stats</h3>

      <p>
        <strong>Total Tasks:</strong> {totalTasks}
      </p>

      <p>
        Done: {completedTasks} of {totalTasks}
      </p>

      <p>
        <strong>Remaining Tasks:</strong> {totalTasks - completedTasks}
      </p>
    </div>
  );
}
