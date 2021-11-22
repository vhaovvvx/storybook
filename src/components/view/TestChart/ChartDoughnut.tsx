import { ChartData, ChartOptions } from 'chart.js';
import React from 'react';
import Doughnut from 'react-chartjs-2';

interface PChartDonut {
  title: string;
}

function ChartDoughnut({ title }: PChartDonut) {
  const objSetData: ChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        data: [30, 40, 50, 60, 70],
        backgroundColor: [
          'red',
          'blue',
          'green',
          'black',
          'yellow',
          'orange',
          'purple',
        ],
      },
    ],
  };
  const objSetOption: ChartOptions = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <React.Fragment>
      <Doughnut
        type='doughnut'
        data={objSetData}
        options={objSetOption}
      ></Doughnut>
    </React.Fragment>
  );
}
export default ChartDoughnut;
