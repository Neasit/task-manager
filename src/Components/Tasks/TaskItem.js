import React, { useState } from 'react';

import TaskDate from './TaskDate';
import Card from '../UI/Card';
import './TaskItem.css';

const TaskItem = (props) => {
  return (
    <Card className='task-item'>
      <TaskDate date={props.date} />
      <div className='task-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='task-item__price'>{props.state}</div>
    </Card>
  );
}

export default TaskItem;