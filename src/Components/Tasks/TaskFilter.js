import React from "react";

import './TaskFilter.css';

function TaskFilter(props) {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
      <div className='task-filter'>
        <div className='task-filter__control'>
          <label>Filter by state</label>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value='All'>All</option>
            <option value='Scheduled'>Scheduled</option>
            <option value='In process'>In process</option>
            <option value='Done'>Done</option>
          </select>
        </div>
      </div>
    );
}

export default TaskFilter;