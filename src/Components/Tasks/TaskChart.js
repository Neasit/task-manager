import React from 'react';

import Chart from '../Chart/Chart';

const TaskChart = (props) => {
  const chartDataPoints = [
    { label: 'Scheduled', value: 0 },
    { label: 'In process', value: 0 },
    { label: 'Done', value: 0 },
  ];

  for (const task of props.tasks) {
    let index;
    if(task.state === 'Scheduled') {
        index = 0;
    } else if(task.state === 'In process') {
        index = 1;
    } else if(task.state === 'Done') {
        index = 2;
    }
    chartDataPoints[index].value += 1;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default TaskChart;