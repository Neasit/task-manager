import React, { useState } from "react";

import './TaskForm.css';

function TaskForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredState, setEnteredState] = useState('Scheduled');
  
    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    };
  
    const stateChangeHandler = (event) => {
        setEnteredState(event.target.value);
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
  
      const taskData = {
        title: enteredTitle,
        state: enteredState,
        date: new Date(),
      };
  
      props.onSaveData(taskData);
      setEnteredTitle('');
      setEnteredState('Scheduled');
    };
  
    return (
      <form onSubmit={submitHandler}>
        <div className='new-task__controls'>
          <div className='new-task__control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className='new-task__control'>
            <label>State</label>
            <select value={enteredState} onChange={stateChangeHandler}>
              <option value='Scheduled'>Scheduled</option>
              <option value='In process'>In process</option>
              <option value='Done'>Done</option>
            </select>
          </div>
        </div>
        <div className='new-task__actions'>
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type='submit'>Add Task</button>
        </div>
      </form>
    );
}

export default TaskForm;