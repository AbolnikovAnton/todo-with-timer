import React, { useState } from "react";
import PaloAlto from "./components";
// import InputForm from "./components/InputForm";
// import TaskItem from "./components/TaskItem";
// import PaloAlto from "./components";

// interface Task {
//   id: number;
//   title: string;
//   timeLeft: number;
//   isRunning: boolean;
//   completed: boolean;
// }

const App: React.FC = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);

  // const addTask = (title: string, time: number) => {
  //   setTasks([
  //     ...tasks,
  //     {
  //       id: Date.now(),
  //       title,
  //       timeLeft: time,
  //       isRunning: false,
  //       completed: false,
  //     },
  //   ]);
  // };

  // const updateTask = (updatedTask: Task) => {
  //   setTasks((prev) =>
  //     prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
  //   );
  // };

  return (
    // <div className="p-4 max-w-md mx-auto">
    //   <InputForm onAddTask={addTask} />
    //   <div className="space-y-4">
    //     {tasks.map((task) => (
    //       <TaskItem key={task.id} task={task} onUpdate={updateTask} />
    //     ))}
    //   </div>
    // </div>
    <PaloAlto />
  );
};

export default App;
