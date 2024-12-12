import React from "react";
import "../App.css";

interface Task {
  id: number;
  title: string;
  timeLeft: number;
  completed: boolean;
}

interface Props {
  tasks: Task[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ tasks, onComplete, onDelete }) => {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center p-4 border rounded"
        >
          <div>
            <h3
              className={`text-lg ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </h3>
            <p>
              {task.timeLeft > 0 ? `${task.timeLeft} сек.` : "Время истекло!"}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onComplete(task.id)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Выполнено
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Удалить
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
