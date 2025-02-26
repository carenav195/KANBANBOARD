import React from "react";
import { useDrop } from "react-dnd";
import Task from "../Task/Task";

const Column = ({ name, tasks, onMoveTask, onDeleteTask, onEditTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) => {
      if (item.column !== name) {
        onMoveTask(item.column, name, item.index);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`p-4 bg-white rounded-lg shadow-md w-[300px] h-[500px]  max-h-[500px]flex flex-col border-2 border-rose-500 flex-col ${isOver ? "bg-gray-100 border-l border-gray-300" : ""   }`}>
      <h2 className="text-lg font-bold mb-2  capitalize">{name}</h2>
      {/* Scrollable container for tasks */}
      <div className="space-y-2 flex-1 overflow-y-auto ">
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            task={task}
            column={name}
            index={index}
            onMoveTask={onMoveTask}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
