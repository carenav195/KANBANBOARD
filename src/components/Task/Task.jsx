import { useDrag } from "react-dnd";
import { FiEdit, FiTrash } from "react-icons/fi";

const priorityColors = {
  High: "bg-red-500 text-white",
  Medium: "bg-yellow-400 text-gray-900",
  Low: "bg-green-500 text-white",
};

const TaskCard = ({ task, column, index, onEditTask, onDeleteTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id, column, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{border:"1px solid #F2F2F2"}}
      className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg ${
        priorityColors[task.priority] || "border-gray-300"
      } transition-all transform ${isDragging ? "opacity-50 scale-95" : "hover:scale-[1.02]"}`}
    >
      {/* Task Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{task.taskName}</h3>
        <div className="flex gap-2">
          <button onClick={() => onEditTask(task, column, index)} className="text-blue-500 hover:text-blue-700 transition">
            <FiEdit size={18} />
          </button>
          <button onClick={() => onDeleteTask(column, index)} className="text-red-500 hover:text-red-700 transition">
            <FiTrash size={18} />
          </button>
        </div>
      </div>

      {/* Task Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{task.description || "No description provided"}</p>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-3">
        {/* Priority Label */}
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>

        {/* Due Date */}
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <span className="font-medium">Due: </span> {task.startTime}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
