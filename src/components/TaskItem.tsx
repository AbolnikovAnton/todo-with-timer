import React, { useEffect, useState } from "react";
import "../App.css";

interface Task {
  id: number;
  title: string;
  timeLeft: number;
  isRunning: boolean;
  completed: boolean;
}

interface Props {
  task: Task;
  onUpdate: (updatedTask: Task) => void;
}

const TaskItem: React.FC<Props> = ({ task, onUpdate }) => {
  const [localTimeLeft, setLocalTimeLeft] = useState(task.timeLeft);

  useEffect(() => {
    let timer: number;
    if (task.isRunning && localTimeLeft > 0) {
      timer = setInterval(() => {
        setLocalTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (localTimeLeft === 0 && task.isRunning) {
      onUpdate({ ...task, isRunning: false, completed: true });
    }
    return () => clearInterval(timer);
  }, [task.isRunning, localTimeLeft, onUpdate]);

  const handleStart = () => {
    if (!task.isRunning) {
      onUpdate({ ...task, isRunning: true });
    }
  };

  const taskClass = task.completed
    ? "line-through text-gray-500"
    : "text-black";

  return (
    <div className="task_item">
      <div>
        <h3 className={`task_text ${taskClass}`}>{task.title}</h3>
        <p>{formatTime(localTimeLeft)}</p>
      </div>
      <div className="task_status">
        {!task.isRunning && !task.completed && (
          <button onClick={handleStart}>Start</button>
        )}
        {task.completed && <span>Completed</span>}
      </div>
    </div>
  );
};

const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export default TaskItem;
