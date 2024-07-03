import { useState } from "react";

import { TaskItemType } from "./components/TaskItem/task.item.types";

import FormAddInput from "./components/FormAddInput/FormAddInput";
import TaskList from "./components/TaskList/TaskList";
import Stats from "./components/Stats/Stats";

export default function App() {
  const [tasks, setTasks] = useState<TaskItemType[]>([]);

  const handleAddTask = (newTask: TaskItemType) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div>
      <FormAddInput onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
      <Stats tasks={tasks} />
    </div>
  );
}
