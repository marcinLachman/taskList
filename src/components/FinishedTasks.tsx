import { FC } from 'react';
import { ITasks } from '../store/features/tasksSlice';

import { useAppDispatch } from '../store/store';
import { deleteTask, doneTask } from "../store/features/tasksSlice";

import { BsTrash } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";

interface IProps {
  tasks: ITasks[]
};

const FinishedTasks: FC<IProps> = ({ tasks }) => {
  const dispatch = useAppDispatch();

  const handleDoneTask = (id: string) => {
    dispatch(doneTask(id));
  };
  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const displayTasks = tasks.filter( task => task.isDone !== true).map((task) => {
    return (
      <div className="flex flex-row justify-between items-center" key={task.id}>
        <h3 className="line-through">
          {task.task}
          <p className="text-sm indent-6">&#8594; {task.finishedAt}</p>
        </h3>
        <div className="flex flex-row gap-3">
          <div>
            <button onClick={() => handleDoneTask(task.id)}><GiBackwardTime className="text-2xl" /></button>
          </div>
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

export default FinishedTasks;