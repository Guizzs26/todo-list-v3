import { useState, useEffect } from "react";

import { TaskItemType } from "./components/TaskItem/task.item.types";

import FormAddInput from "./components/FormAddInput/FormAddInput";
import TaskList from "./components/TaskList/TaskList";
import Stats from "./components/Stats/Stats";

export default function App() {
  const [tasks, setTasks] = useState<TaskItemType[]>([]);

  useEffect(() => {
    if (tasks.length > 0) localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks) as TaskItemType[];

        setTasks(parsedTasks);
      } catch (error) {
        // Handle the error, such as clearing local storage or setting a default value for tasks
        console.error("Error parsing local storage data:", error);
      }
    }
  }, []);

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
