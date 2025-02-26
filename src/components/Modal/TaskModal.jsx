import { useState, useEffect } from "react";
import { FaTimes, FaTasks, FaExclamationCircle } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import { CalendarDays } from "lucide-react";

const TaskModal = ({ isOpen, onClose, taskToEdit, onSubmit }) => {
  const [task, setTask] = useState({
    taskName: "",
    description: "",
    startTime: "",
    priority: "Low",
  });

  useEffect(() => {
    if (isOpen) {
      if (taskToEdit) {
        setTask({
          taskName: taskToEdit.taskName || "",
          description: taskToEdit.description || "",
          startTime: taskToEdit.startTime || "",
          priority: taskToEdit.priority || "Low",
        });
      } else {
        setTask({ taskName: "", description: "", startTime: "", priority: "Low" });
      }
    }
  }, [taskToEdit, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.taskName.trim() || !task.startTime.trim()) {
      alert("Task name and due date are required.");
      return;
    }
    onSubmit(task);
    onClose(); // Close modal after submitting
  };

  // Function to determine icon color based on priority
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Low":
        return "text-green-500";
      case "Medium":
        return "text-yellow-500";
      case "High":
        return "text-orange-500";
      case "Critical":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };

  if (!isOpen) return null; // Prevent rendering when modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center h-full w-full bg-black/40 backdrop-blur-md z-50">
      <div className="bg-white dark:bg-gray-800 w-[400px] p-6 rounded-xl shadow-lg relative transition-transform transform scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-red-600 transition"
        >
          <FaTimes size={22} />
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
          {taskToEdit ? "Edit Task" : "Add New Task"} <IoMdAddCircle className="ml-2 text-blue-500" />
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Task Name */}
          <div className="flex items-center border rounded-lg p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaTasks className="text-gray-500 mr-2" />
            <input
              name="taskName"
              type="text"
              value={task.taskName}
              onChange={handleChange}
              placeholder="Task Name"
              required
              className="w-full outline-none text-gray-800 dark:text-white bg-transparent"
            />
          </div>

          {/* Task Description */}
          <div className="flex items-center border rounded-lg p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
            <MdOutlineDescription className={`mr-2 ${getPriorityColor(task.priority)}`} />
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Task Description"
              className="w-full outline-none text-gray-800 dark:text-white bg-transparent resize-none"
            />
          </div>

          {/* Due Date */}
          <div className="flex items-center border rounded-lg p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
            <CalendarDays className="text-gray-500 mr-2" />
            <input
              name="startTime"
              type="date"
              value={task.startTime}
              onChange={handleChange}
              required
              className="w-full outline-none text-gray-800 dark:text-white bg-transparent"
            />
          </div>

          {/* Priority Selection */}
          <div className="flex items-center border rounded-lg p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaExclamationCircle className="mr-2 text-gray-500" />
            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all"
          >
            {taskToEdit ? "Save Changes" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
