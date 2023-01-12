import './Tasks.css';
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import Card from '../UI/Card';

function Tasks(props) {   
    const [filterState, setFilterState ] = useState('All'); 
    const changeFilterHandler = (state) => {
        setFilterState(state);
    };
    const aFilteredItems = filterState === 'All' ? props.items : props.items.filter(item => item.state === filterState );

    return (
        <Card className="tasks">
            <TaskFilter onChangeFilter={changeFilterHandler} selected={filterState} />
            <TaskList items={aFilteredItems} />
        </Card>
    )

}

export default Tasks;