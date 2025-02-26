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
    <div className="grid grid-cols-2 bg-gray-100  w-full  gap-5 items-stretch">
          <Column
            name={column}
            tasks={tasks[column]}
            onMoveTask={handleMoveTask}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
    </div>
  );
};

export default Board;
