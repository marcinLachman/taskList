import { FC } from 'react';
import { ITasks } from '../store/features/tasksSlice';

import { useAppDispatch } from '../store/store';
import { deleteTask, doneTask, displayInput } from "../store/features/tasksSlice";

import EditTask from './EditTask';

import { BsPencilFill } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { MdOutlineFileDownloadDone } from "react-icons/md";

interface IProps {
  tasks: ITasks[]
};

const ActiveTasks: FC<IProps> = ({ tasks }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleDoneTask = (id: string) => {
    dispatch(doneTask(id));
  };

  const handleEdit = (id: string) => {
    dispatch(displayInput(id));
  };

  const today = new Date();
  const displayTasks = tasks.filter( task => task.isDone === true && new Date(task.finishedAt) > today ).map((task) => {
    return (
      <div className="flex flex-row justify-between items-center m-2" key={task.id}>
        {!task.edit ? (
          <h3>
            {task.task}
            <p className="text-sm indent-6">&#8594; {task.finishedAt}</p>
          </h3>) : (
            <EditTask task={task} />
        )}
        {!task.edit &&
          <div className="flex flex-row gap-3">
            <div>
              <button onClick={() => handleDoneTask(task.id)}>
                <MdOutlineFileDownloadDone className="text-2xl"  />
              </button>
            </div>
            <div>
              <button onClick={() => handleEdit(task.id)}>
                <BsPencilFill className="text-2xl" />
              </button>
            </div>
            <div>
              <button onClick={() => handleDelete(task.id)}>
                <BsTrash className="text-2xl" />
              </button>
            </div>
          </div>
        }
      </div>
    )
  });
  
  return (
    <>
      {displayTasks.length != 0  ? displayTasks : <p className='indent-3'>Nie ma zadań</p>}
    </>
  )
}

export default ActiveTasks;