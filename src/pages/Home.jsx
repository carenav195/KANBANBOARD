import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, addTask, deleteTask } from "../features/kanban/kanbanSlice";
import TaskModal from "../components/Modal/TaskModal";
import Board from "../components/Board/Board";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [editColumn, setEditColumn] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const dispatch = useDispatch();

  const handleOpenEditModal = (task, column, index) => {
    setTaskToEdit(task);
    setEditColumn(column);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handleSubmit = (taskData) => {
    if (taskToEdit) {
      dispatch(
        editTask({
          column: editColumn,
          index: editIndex,
          newTask: taskData,
        })
      );
    } else {
      dispatch(
        addTask({
          id: Date.now().toString(),
          ...taskData,
        })
      );
    }
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

  const handleDeleteTask = (column, index) => {
    dispatch(deleteTask({ column, index }));
  };

  return (
    <div className="flex flex-col flex-grow p-8 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">Anikala Kanban Board</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Add New Task
        </button>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <Board onEditTask={handleOpenEditModal} onDeleteTask={handleDeleteTask} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <TaskModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            taskToEdit={taskToEdit}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
