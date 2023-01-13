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

    let content = <button onClick={startEditingHandler}>Add New Task</button>;
    if(isEditing) {
        content = <TaskForm
        onSaveData={saveDataHandler}
        onCancel={stopEditingHandler}
      />;
    }


    return (
        <div className='new-task'>
            {content}
        </div>
    );
}

export default NewTask;