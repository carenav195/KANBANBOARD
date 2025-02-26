
import { useDrop } from 'react-dnd';
import Task from '../Task/Task';
import '../../styles/column.css';

const Column = ({ name, tasks, onMoveTask, onDeleteTask, onEditTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
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
    <div ref={drop} className={`column ${isOver ? 'over' : ''}`}>
      <h2>{name}</h2>
      <div>
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
