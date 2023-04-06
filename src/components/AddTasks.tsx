import { useState } from "react";
import { nanoid } from 'nanoid';

import { useAppDispatch } from '../store/store';
import { addTask } from "../store/features/tasksSlice";

interface IAdd {
  id: string,
  task: string;
  finishedAt: string; 
  isDone: boolean,
  edit: false,
  createdAt: string,
};

const AddTasks = () => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    const add: IAdd = {
      id: nanoid(),
      task: task,
      isDone: true,
      edit: false,
      createdAt: Date.now().toString(),
      finishedAt: date
    }
    if (task === '') {
      return
    } else {
      dispatch(addTask(add));
    }
    setTask('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 m-3 md:flex-row">
        <div className="basis-1/2">
          <input 
            className="w-full p-3" 
            type="text" 
            placeholder="New Tasks" 
            value={task}
            name='task'
            onChange={(event) => setTask(event.target.value)}
          />
        </div>
        <div className="basis-1/4">
          <input 
            className="w-full p-3" 
            type="date" 
            value={date}
            name='finishedAt'
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div className="basis-1/4">
          <button className="bg-fuchsia-400 px-4 rounded-md hover:bg-fuchsia-700 w-full p-3" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddTasks;