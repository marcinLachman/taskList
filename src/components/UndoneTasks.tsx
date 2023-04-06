import { FC } from 'react';
import { ITasks } from '../store/features/tasksSlice';

import { useAppDispatch } from '../store/store';
import { deleteTask, doneTask } from "../store/features/tasksSlice";

import { BsTrash } from "react-icons/bs";

interface IProps {
  tasks: ITasks[]
};

const UndoneTasks: FC<IProps> = ({ tasks }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const today = new Date();
  const displayTasks = tasks.filter( task => task.isDone === true && new Date(task.finishedAt) < today ).map((task) => {
    return (
      <div className="flex flex-row justify-between items-center" key={task.id}>
        <h3 className="text-amber-800 line-through">
          {task.task}
          <p className="text-sm indent-6">&#8594; {task.finishedAt}</p>
        </h3>
        <div className="flex flex-row gap-3">
          <div>
            <button onClick={() => handleDelete(task.id)}><BsTrash className="text-2xl" /></button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      {displayTasks.length != 0  ? displayTasks : <p className='indent-3'>Nie ma zadań</p>}
    </>
  )
}

export default UndoneTasks;