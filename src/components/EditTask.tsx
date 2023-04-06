import { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import { ITasks } from '../store/features/tasksSlice';

import { useAppDispatch } from '../store/store';
import { editTask } from '../store/features/tasksSlice';

const EditTask: FC<ITasks | any> = ({ task }) => {
  const dispatch = useAppDispatch();
  const [inputTask, setInputTask] = useState(task.task);
  const [inputData, setInputData] = useState(task.finishedAt);

  const handleSubmit = ( event: React.FormEvent<HTMLFormElement>, id: string ) => {
    event.preventDefault();
    const add: ITasks = {
      id: nanoid(),
      task: inputTask,
      finishedAt: inputData,
      isDone: true,
      edit: false,
      createdAt: Date.now().toString(),
    }
    dispatch(editTask({ id: id, tasks: add }));
  };

  return (
    <form className='flex flex-row space-x-3' onSubmit={(event) => handleSubmit(event, task.id)}>
    <div className='basis-1/2'>
      <input 
        className='w-full p-1' 
        type='text' 
        placeholder='asa' 
        name='editTask'
        value={inputTask}
        onChange={(event) => setInputTask(event.target.value)}
      />
    </div>
    <div className='basis-1/4'>
      <input 
        className='w-full p-1' 
        type='date' 
        name='editDate'
        value={inputData}
        onChange={(event) => setInputData(event.target.value)}
      />
    </div>
    <div className='basis-1/4'>
      <button type='submit' className='bg-fuchsia-400 px-4 rounded-md hover:bg-fuchsia-700 p-1 w-full'>
        Submit
      </button>
    </div>
  </form>
  )
}

export default EditTask;