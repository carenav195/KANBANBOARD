import { configureStore } from '@reduxjs/toolkit';
import kanbanReducer from './features/kanban/kanbanSlice';

const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('kanban', JSON.stringify(state.kanban));
});

export default store;
