import { FC } from 'react';
import { useAppSelector } from './store/store';

import AddTasks from "./components/AddTasks";
import ActiveTasks from "./components/ActiveTasks";
import FinishedTasks from "./components/FinishedTasks";
import UndoneTasks from "./components/UndoneTasks";

const App: FC = () => {
  const { tasks } = useAppSelector((state) => state.tasks);

  return (
    <main className="container mx-auto font-display">
      <header>
        <h1 className="text-center text-4xl font-extrabold m-12">Tasks List</h1>
      </header>

      <section id="section-form-addTask">
        <AddTasks />
      </section>

      <section className="flex flex-col justify-around gap-3 md:flex-row">
        <div className="p-3 w-screen mt-2">
            <h2 className="text-xl border-b-4 border-slate-950 mb-3">Active Tasks</h2>
            <ActiveTasks tasks={tasks} />
        </div>
        <div className="p-3 w-screen mt-2">
          <h2 className="text-xl border-b-4 border-slate-950 mb-3">Finished Tasks</h2>
          <FinishedTasks tasks={tasks} />
        </div>
        <div className="p-3 w-screen mt-2">
          <h2 className="text-xl border-b-4 border-slate-950 mb-3">Unfinished Tasks</h2>
          <UndoneTasks tasks={tasks} />
        </div>
      </section> 

      {/* <section>
        <div className="grid grid-cols-3 grid-flow-col gap-3 mt-8">
          <div><ActiveTasks tasks={tasks} /></div>
          <div><FinishedTasks tasks={tasks} /></div>
          <div><UndoneTasks tasks={tasks} /></div>
          
          
          
        </div>
      </section> */}
    </main>
  )
}

export default App
