import './Tasks.css';
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import Card from '../UI/Card';
import TaskChart from './TaskChart';

function Tasks(props) {   
    const [filterState, setFilterState ] = useState('All'); 
    const changeFilterHandler = (state) => {
        setFilterState(state);
    };
    const aFilteredItems = filterState === 'All' ? props.items : props.items.filter(item => item.state === filterState );

    return (
        <Card className="tasks">
            <TaskFilter onChangeFilter={changeFilterHandler} selected={filterState} />
            <TaskChart tasks={aFilteredItems} />
            <TaskList items={aFilteredItems} />
        </Card>
    )

}

export default Tasks;