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
    <div className="py-2 bg-gray-100 flex w-full gap-5 items-stretch">
      {columns.map((column, index) => (
        <div
          key={column}
          className={`flex-1 flex flex-col ${
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
