import React, { useState } from "react";
import "../App.css";

interface Props {
  onAddTask: (title: string, time: number) => void;
}

const InputForm: React.FC<Props> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && time > 0) {
      onAddTask(title, time * 60); // Convert minutes to seconds
      setTitle("");
      setTime(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        className="task_title"
      />
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(parseInt(e.target.value) || 0)}
        placeholder="Minutes"
        className="task_minutes"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default InputForm;
