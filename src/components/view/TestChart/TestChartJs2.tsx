import { useState } from 'react';
import React from 'react';
import Chart from 'react-chartjs-2';
import './TestChartjs2.scss';
import { CFormSelect } from '@coreui/react';
import RadioCheck from '../Button/Radio/RadioCheck';
import ButtonDropdown from '../Button/ButtonGroup/ButtonDropdown/ButtonDropDown';
import ButtonGroup from '../Button/ButtonGroup/ButtonGroup';
import ButtonGroup2 from '../Button/ButtonGroup/ButtonGroup2';

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
      title: '2021',
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
      title: '2020',
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
      title: '2019',

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
      title: '2018',
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
      title: '2017',
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
    title: dataObjects[0].title,
  });

  const onChangeFunc = (value: any) => {
    console.log(value);
    let cloneObj = { ...dataDefault };
    cloneObj.label = dataObjects[value].label;
    cloneObj.data = dataObjects[value].data;
    cloneObj.title = dataObjects[value].title;
    setDataDefault(cloneObj);
  };

  return (
    <div>
      <ButtonGroup2
        maxWidth='215'
        // dataClick={[1, 2, 3, 4, 5]}
        // maxWidth='200'
        title={dataDefault.title}
      >
        <h2>Timeframe</h2>
        <RadioCheck check={true} clickHandle={onChangeFunc} valueOptions={0}>
          2021
        </RadioCheck>
        <RadioCheck clickHandle={onChangeFunc} valueOptions={1}>
          2020
        </RadioCheck>
        <RadioCheck clickHandle={onChangeFunc} valueOptions={2}>
          2019
        </RadioCheck>
        <RadioCheck clickHandle={onChangeFunc} valueOptions={3}>
          2018
        </RadioCheck>
        <RadioCheck clickHandle={onChangeFunc} valueOptions={4}>
          2017
        </RadioCheck>
      </ButtonGroup2>
      <Chart
        id='chartjs-id'
        type='line'
        data={{
          labels: MONTHS,
          datasets: [
            {
              // yAxisID: 'firstChart',
              type: 'line',
              label: dataDefault.label,
              data: dataDefault.data,
              backgroundColor: '#f5c831',
              borderColor: '#f5c831',
              pointBackgroundColor: 'transparent',
              pointBorderColor: 'transparent',
              borderWidth: 5,
              tension: 0.3,
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
              tension: 0.3,
            },
            {
              // yAxisID: 'secondChart3',
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
              tension: 0.3,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            title: {
              align: 'start',
              display: true,
              text: 'Portfolio Performance',
              padding: 50,
              font: {
                weight: 'bold',
                size: 40,
              },
            },
            legend: {
              labels: {
                padding: 50,
              },
              position: 'bottom',
              align: 'start',
            },
          },
          interaction: {
            intersect: false,
          },
          scales: {
            secondChart2: {
              offset: true,

              type: 'linear',
              // grace: '10%',
              position: 'right',
              min: 15,
              max: 25,
              ticks: {
                // padding: 50,

                stepSize: 5,
              },
              grid: {
                // borderColor: 'transparent',
                drawOnChartArea: false,
                display: false,
              },
            },
            x: {
              offset: true,

              ticks: {
                autoSkip: false,
                // minRotation: 30,
              },
              grid: {
                // tickBorderDashOffset: 40,
                // drawOnChartArea: false,
                // drawBorder: false,
                // borderColor: 'transparent',
                display: false,
              },
            },
            y: {
              offset: true,
              type: 'linear',
              // grace: '%',
              min: 10,
              max: 20,
              ticks: {
                // padding: 50,
                stepSize: 5,
              },

              grid: {
                color: 'transparent',
                // borderColor: 'transparent',

                // display: false,
              },
            },
          },
        }}
      />
      {/* <ButtonGroup2
        maxWidth='215'
        // dataClick={[1, 2, 3, 4, 5]}
        // maxWidth='200'
        title={dataDefault.title}
      >
        <RadioCheck check={true} clickHandle={onChangeFunc} valueOptions={0}>
          2021
        </RadioCheck>
        <RadioCheck clickHandle={onChangeFunc} valueOptions={1}>
          2020
        </RadioCheck>
        <RadioCheck clickHandle={onChangeFunc} valueOptions={2}>
          2019
        </RadioCheck>
        <RadioCheck clickHandle={onChangeFunc} valueOptions={3}>
          2018
        </RadioCheck>
        <RadioCheck clickHandle={onChangeFunc} valueOptions={4}>
          2017
        </RadioCheck>
      </ButtonGroup2> */}
    </div>
  );
};

export default TestChartJs2;
