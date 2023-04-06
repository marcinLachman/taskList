import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import data from '../../data.json';

export interface ITasks {
  id: string;
  task: string;
  isDone: boolean;
  edit: boolean,
  createdAt: string;
  finishedAt: string; 
};

interface TasksState {
  tasks: ITasks[],
};

const initialState: TasksState = {
  tasks: data,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITasks>) => {
      state.tasks.push(action.payload);
    },
    doneTask: (state, action: PayloadAction<string>) => {
      const finishedTask = state.tasks.filter( z => z.id === action.payload);
      finishedTask.map(x => x.isDone = !x.isDone);
    },
    displayInput: (state, action: PayloadAction<string>) => {
      const displayInput = state.tasks.filter( z => z.id === action.payload);
      displayInput.map(x => x.edit = !x.edit);
    },
    editTask: (state, action: PayloadAction<{id: string, tasks: ITasks }>) => {
      const ediTask = state.tasks.filter( z => z.id === action.payload.id);
      ediTask.map(x => x.task = action.payload.tasks.task)
      ediTask.map(x => x.finishedAt = action.payload.tasks.finishedAt)
      ediTask.map(x => x.edit = action.payload.tasks.edit)
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload)}
    },
  }
});

export const { addTask, deleteTask, doneTask, displayInput, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;