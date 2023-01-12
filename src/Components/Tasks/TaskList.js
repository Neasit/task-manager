import './TaskList.css';
import TaskItem from './TaskItem';

function TaskList(props) {
    const aItems = props.items;
    if (aItems.length === 0) {
        return <h2 className='task-list__fallback'>Found no tasks.</h2>;
      }
    
      return (
        <ul className='task-list'>
          {aItems.map(context => {
                return <TaskItem key={context.id} title={context.title} date={context.date} state={context.state} />;
           })}
        </ul>
      );

}

export default TaskList;