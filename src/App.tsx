import { useState } from "react";

import { TaskItem } from "./components/TaskItem/task.item.types";

import FormAddInput from "./components/FormAddInput/FormAddInput";
// import TaskList from "./components/TaskList";
// import Stats from "./components/Stats";

export default function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const handleAddTask = (newTask: TaskItem) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <FormAddInput onAddTask={handleAddTask} />
      {/* <TaskList />
      <Stats />  */}
    </div>
  );
}
