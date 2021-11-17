import { useState } from 'react';
import React from 'react';
import Chart from 'react-chartjs-2';

type P = {};

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getRandomNum = () => {
  return Math.floor(Math.random() * 5) + 15;
};

const TestChartJs2: React.FC<P> = ({ ...props }) => {
  let dataObjects = [
    {
      label: 'Datasets 1',
      data: [
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
      ],
    },
    {
      label: 'Datasets 2',
      data: [
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
      ],
    },
    {
      label: 'Datasets 3',
      data: [
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
      ],
    },
    {
      label: 'Datasets 4',
      data: [
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
      ],
    },
    {
      label: 'Datasets 5',
      data: [
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
        getRandomNum(),
      ],
    },
  ];

  const [dataDefault, setDataDefault] = useState({
    label: dataObjects[0].label,
    data: dataObjects[0].data,
  });

  const onChangeFunc = (e: any) => {
    let dataNumber = parseInt(e.target.value);
    console.log(dataNumber);
    let cloneObj = { ...dataDefault };
    cloneObj.label = dataObjects[dataNumber].label;
    cloneObj.data = dataObjects[dataNumber].data;

    console.log(cloneObj);

    setDataDefault(cloneObj);
  };

  return (
    <div>
      <select id='years' onChange={onChangeFunc}>
        <option value='0'>2021</option>
        <option value='1'>2020</option>
        <option value='2'>2019</option>
        <option value='3'>2018</option>
        <option value='4'>2017</option>
      </select>
      <Chart
        type='line'
        data={{
          labels: MONTHS,
          datasets: [
            {
              yAxisID: 'firstChart',
              type: 'line',
              label: dataDefault.label,
              data: dataDefault.data,
              backgroundColor: '#f5c831',
              borderColor: '#f5c831',
              pointBackgroundColor: 'transparent',
              pointBorderColor: 'transparent',
              borderWidth: 5,
              tension: 0.2,
            },
            {
              yAxisID: 'secondChart2',
              type: 'line',
              label: 'Datasets 6',
              data: [
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
              ],
              backgroundColor: '#8f56e8',
              borderColor: '#8f56e8',
              pointBackgroundColor: 'transparent',
              pointBorderColor: 'transparent',
              borderWidth: 5,
              tension: 0.2,
            },
            {
              yAxisID: 'secondChart3',
              type: 'line',
              label: 'Datasets 8',
              data: [
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
                getRandomNum(),
              ],
              backgroundColor: '#60c2cc',
              borderColor: '#60c2cc',
              pointBackgroundColor: 'transparent',
              pointBorderColor: 'transparent',
              borderWidth: 5,
              tension: 0.2,
            },
          ],
        }}
        options={{
          interaction: {
            intersect: false,
          },
          scales: {
            // secondChart2: {
            //   position: 'right',
            //   min: 10,
            //   max: 20,
            //   grid: {
            //     borderColor: 'transparent',
            //     drawOnChartArea: false,
            //     display: false,
            //   },
            // },
            // x: {
            //   grid: {
            //     drawOnChartArea: false,
            //     drawBorder: false,
            //     borderColor: 'transparent',
            //     display: false,
            //   },
            // },
            y: {
              grid: {
                // drawTicks: false,
                // borderColor: 'transparent',
                // display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default TestChartJs2;
