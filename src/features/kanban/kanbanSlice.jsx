import { createSlice } from '@reduxjs/toolkit';
import { initialKanbanState } from './kanbanState';

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: initialKanbanState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.todo.push(action.payload);
    },
    editTask: (state, action) => {
      const { column, index, newTitle } = action.payload;
      if (state.tasks[column] && state.tasks[column][index]) {
        state.tasks[column][index].title = newTitle;
      } else {
        console.error(`Task not found at column: ${column}, index: ${index}`);
      }
    },
    moveTask: (state, action) => {
      const { fromColumn, toColumn, index } = action.payload;
    
      // Ensure columns exist and are initialized
      if (!state.tasks[fromColumn] || !state.tasks[toColumn]) {
        console.error(`Invalid columns: ${fromColumn} or ${toColumn} does not exist`);
        return;
      }
    
      const [movedTask] = state.tasks[fromColumn].splice(index, 1);
      state.tasks[toColumn].push(movedTask);
    },
    deleteTask: (state, action) => {
      const { column, index } = action.payload;
      if (state.tasks[column]) {
        state.tasks[column].splice(index, 1); // delete task from column
      } else {
        console.error(`Column ${column} not found`);
      }
    },
  },
});

// Add `editTask` to the exported actions
export const { addTask, editTask, moveTask, deleteTask } = kanbanSlice.actions;

export default kanbanSlice.reducer;
