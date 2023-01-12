import React, { useState} from "react";
import TaskForm from "./TaskForm";

import "./NewTask.css";

function NewTask(props) {
    const [isEditing, setIsEditing] = useState(false);

    const saveDataHandler = (enteredTaskData) => {
        const taskData = {
          ...enteredTaskData,
          id: Math.random().toString(),
        };
        props.onAddTask(taskData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
       setIsEditing(true);
    };
    
    const stopEditingHandler = () => {
       setIsEditing(false);
    };


    return (
        <div className='new-task'>
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Task</button>
        )}
        {isEditing && (
          <TaskForm
            onSaveData={saveDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    );
}

export default NewTask;