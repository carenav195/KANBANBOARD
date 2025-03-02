import { useDispatch, useSelector } from 'react-redux';
import Column from '../Column/Column';
import { moveTask } from '../../features/kanban/kanbanSlice';

const Board = ({ onEditTask, onDeleteTask }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.kanban.tasks);
  const columns = Object.keys(tasks);

  const handleMoveTask = (fromColumn, toColumn, index) => {
    dispatch(moveTask({ fromColumn, toColumn, index }));
  };

  return (
    <div className="py-2 bg-gray-100 flex items-center justify-center grid md:grid-cols-4 grid-cols-1 w-full gap-5">
      {columns.map((column, index) => (
        <div
          key={column}
          className={`w-full ${
            index !== 0 ? "border-l border-gray-300" : "" // Left border for all except first column
          } ${
            index !== columns.length - 1 ? "border-r border-gray-300" : "" // Right border for all except last column
          }`}
        >
          <Column
            name={column}
            tasks={tasks[column]}
            onMoveTask={handleMoveTask}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        </div>
      ))}
    </div>
  );
};

export default Board;
