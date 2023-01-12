import React, { useState } from "react";
import Tasks from "./Components/Tasks/Tasks";
import NewTask from "./Components/NewTask/NewTask";

const INIT_TASKS = [{
  id: 'Init0',
  date: new Date(),
  title: 'Task 1',
  state: 'In process'
},
{
  id: 'Init1',
  date: new Date(),
  title: 'Task 2',
  state: 'In process'
}];

function App() {
  const [ items, setItems ] = useState(INIT_TASKS);

  const addTaskHandler = function(oNewTaskData) {
    setItems(function(oldState) {
      return [oNewTaskData, ...oldState];
    });
  };
  
  return (
    <div className="app">
      <h2>Tasks for day!</h2>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks items={items}></Tasks>
    </div>
  );
}

export default App;
