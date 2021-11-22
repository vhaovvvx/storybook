import { useRef, useState } from 'react';
import React from 'react';
import Chart, { Bar, Doughnut } from 'react-chartjs-2';
import './TestChartjs2.scss';
import {
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormSelect,
} from '@coreui/react';
import RadioCheck from '../Button/Radio/RadioCheck';
import ButtonDropdown from '../Button/ButtonGroup/ButtonDropdown/ButtonDropDown';
import ButtonGroup from '../Button/ButtonGroup/ButtonGroup';
import ButtonGroup2 from '../Button/ButtonGroup/ButtonGroup2';
import { ChartData, ChartOptions } from 'chart.js';
import { action } from '@storybook/addon-actions';
export const getRandomNum = () => {
  return Math.floor(Math.random() * 5) + 15;
};
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
];

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

// const getOrCreateTooltip = (chart: any) => {
//   let tooltipEl = chart.canvas.parentNode.querySelector('div');

//   if (!tooltipEl) {
//     tooltipEl = document.createElement('div');
//     tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
//     tooltipEl.style.borderRadius = '3px';
//     tooltipEl.style.color = 'white';
//     tooltipEl.style.opacity = 1;
//     tooltipEl.style.pointerEvents = 'none';
//     tooltipEl.style.position = 'absolute';
//     tooltipEl.style.transform = 'translate(-50%, 0)';
//     tooltipEl.style.transition = 'all .1s ease';

//     const table = document.createElement('table');
//     table.style.margin = '0px';

//     tooltipEl.appendChild(table);
//     chart.canvas.parentNode.appendChild(tooltipEl);
//   }

//   return tooltipEl;
// };

// const externalTooltipHandler = (context: any) => {
//   // Tooltip Element
//   const { chart, tooltip } = context;
//   console.log(tooltip);
//   console.log('daylachart', chart);
//   const a1 = context.ctx;

//   const tooltipEl = getOrCreateTooltip(chart);

//   // Hide if no tooltip
//   if (tooltip.opacity === 0) {
//     tooltipEl.style.opacity = 0;
//     return;
//   }

//   // Set Text
//   if (tooltip.body) {
//     const titleLines = tooltip.title || [];
//     const bodyLines = tooltip.body.map((b: any) => b.lines);

//     const tableHead = document.createElement('thead');

//     titleLines.forEach((title: any) => {
//       const tr = document.createElement('tr');
//       tr.style.borderWidth = '10px';
//       tr.style.background = 'red';

//       const th = document.createElement('th');
//       th.style.borderWidth = '10px';
//       th.style.background = 'red';

//       const text = document.createTextNode(title);

//       th.appendChild(text);
//       tr.appendChild(th);
//       tableHead.appendChild(tr);
//     });
//     console.log('head', tableHead);

//     const tableBody = document.createElement('tbody');
//     bodyLines.forEach((body: any, i: number) => {
//       const colors = tooltip.labelColors[i];

//       const span = document.createElement('span');
//       span.style.background = colors.backgroundColor;
//       span.style.borderColor = colors.borderColor;
//       span.style.borderWidth = '2px';
//       span.style.marginRight = '10px';
//       span.style.height = '10px';
//       span.style.width = '10px';
//       span.style.display = 'inline-block';

//       const tr = document.createElement('tr');
//       tr.style.backgroundColor = 'inherit';
//       tr.style.borderWidth = '0';

//       const td = document.createElement('td');
//       td.style.borderWidth = '0';

//       const text = document.createTextNode(body);

//       td.appendChild(span);
//       td.appendChild(text);
//       tr.appendChild(td);
//       tableBody.appendChild(tr);
//     });

//     const tableRoot = tooltipEl.querySelector('table');

//     // Remove old children
//     while (tableRoot.firstChild) {
//       tableRoot.firstChild.remove();
//     }

//     // Add new children
//     tableRoot.appendChild(tableHead);
//     tableRoot.appendChild(tableBody);
//   }

//   const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

//   // Display, position, and set styles for font
//   tooltipEl.style.opacity = 1;
//   tooltipEl.style.left = positionX + tooltip.caretX + 'px';
//   tooltipEl.style.top = positionY + tooltip.caretY + 'px';
//   tooltipEl.style.font = tooltip.options.bodyFont.string;
//   tooltipEl.style.padding =
//     tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
// };

type P = {
  typeChart?: string;
  title?: string;
  indexAxis?: 'x' | 'y';
};

type M = {
  [name2: string]: any;
  years: any;
  month: any;
};

const TestChartJs2: React.FC<P> = ({
  typeChart,
  title,
  indexAxis,
  ...props
}) => {
  const [visibled, setVisibled] = useState(false);
  console.log(visibled);

  const initialObj: M = {
    years: false,
    month: false,
  };
  const [defaultOpen, setDefaultOpen] = useState(initialObj);

  const [defaultOpenMonth, setDefaultOpenMonth] = useState(false);

  const isOpen = (name2: any) => {
    const cloneObj = {
      ...defaultOpen,

      [name2]: !defaultOpen[name2],
    };
    console.log('ahihi', cloneObj);

    setDefaultOpen(cloneObj);
    action('openDropdown')(cloneObj);

    // setDefaultOpen(!defaultOpen);
    // console.log(defaultOpen);
  };

  const [dataDefault, setDataDefault] = useState({
    label: dataObjects[0].label,
    data: dataObjects[0].data,
    title: dataObjects[0].title,
  });
  const objTestData: ChartData = {
    labels: MONTHS,
    datasets: [
      {
        // yAxisID: 'firstChart',
        label: dataDefault.label,
        data: dataDefault.data,
        backgroundColor: '#f58e6a',
        borderColor: '#f58e6a',
        pointBackgroundColor: '#f58e6a',
        pointBorderColor: '#f58e6a',
        pointHoverRadius: 0,
        pointRadius: 0,
        pointStyle: 'circle',
        borderWidth: 5,
        tension: 0.3,
        hoverBorderJoinStyle: 'bevel',
        // hoverBackgroundColor: '#000000',
      },
      {
        yAxisID: 'secondChart2',
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
        pointBackgroundColor: '#8f56e8',
        pointBorderColor: '#8f56e8',
        pointHoverRadius: 0,
        pointRadius: 0,

        borderWidth: 5,
        tension: 0.3,
      },
      {
        // yAxisID: 'secondChart3',
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
        pointBackgroundColor: '#60c2cc',
        pointBorderColor: '#60c2cc',
        pointHoverRadius: 0,
        pointRadius: 0,
        borderWidth: 5,
        tension: 0.3,
      },
    ],
  };

  const onChangeFunc = (value: any, name: any) => {
    let cloneObj = { ...dataDefault };
    cloneObj.label = dataObjects[value].label;
    cloneObj.data = dataObjects[value].data;
    cloneObj.title = dataObjects[value].title;

    const cloneObj2 = { ...defaultOpen, [name]: false };
    console.log('clone', cloneObj2);
    setDefaultOpen(cloneObj2);

    setDataDefault(cloneObj);

    // setDefaultOpen(obj2);
  };

  const objTestOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        align: 'start',
        display: true,
        text: title,
        padding: 50,
        font: {
          weight: 'bold',
          size: 40,
        },
      },
      legend: {
        // display: false,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 50,
        },
        position: 'bottom',
        align: 'start',
      },

      tooltip: {
        // enabled:false,
        // external: externalTooltipHandler,
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
          crossAlign: 'far',
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
  };

  return (
    <div style={{ padding: '1rem', position: 'relative' }}>
      {/* {typeChart === 'line' ? ( */}
      <ButtonGroup2
        maxWidth='90'
        className='chart-select__years'
        name='years'
        // dataClick={[1, 2, 3, 4, 5]}
        // maxWidth='200'
        toggleDrop={isOpen}
        title={dataDefault.title}
      >
        <div
          style={{
            position: 'absolute',
            width: '285px',
            top: '-150px',
            background: '#fff',
          }}
          className={
            defaultOpen.years
              ? 'Drop-down-Btn noHidden'
              : 'Drop-down-Btn Hidden'
          }
        >
          <h2 style={{ textAlign: 'left' }}>Timeframe</h2>
          <RadioCheck
            check={true}
            clickHandle={onChangeFunc}
            valueOptions={0}
            name='years'
          >
            3 Year
          </RadioCheck>
          <RadioCheck clickHandle={onChangeFunc} valueOptions={1} name='years'>
            5 Year
          </RadioCheck>
          <RadioCheck clickHandle={onChangeFunc} valueOptions={2} name='years'>
            10 Year
          </RadioCheck>
        </div>
      </ButtonGroup2>
      ){/* : null} */};
      {/* <CDropdown ref={testRef} >
        <CDropdownToggle
          color='secondary'
          // onClick={() => setVisibled(!visibled)}
        >
          {dataDefault.title}
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem>
            <RadioCheck
              check={true}
              clickHandle={onChangeFunc}
              valueOptions={0}
            >
              2021
            </RadioCheck>
          </CDropdownItem>
          <CDropdownItem>
            <RadioCheck clickHandle={onChangeFunc} valueOptions={1}>
              2020
            </RadioCheck>
          </CDropdownItem>
          <CDropdownItem>
            <RadioCheck clickHandle={onChangeFunc} valueOptions={2}>
              2019
            </RadioCheck>
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown> */}
      <ButtonGroup2
        maxWidth='120'
        className='chart-select__month'
        // dataClick={[1, 2, 3, 4, 5]}
        // maxWidth='200'
        name='month'
        toggleDrop={isOpen}
        title='Monthly'
      >
        <div
          style={{
            position: 'absolute',
            width: '285px',
            top: '-150px',
            background: '#fff',
          }}
          className={
            defaultOpen.month
              ? 'Drop-down-Btn noHidden'
              : 'Drop-down-Btn Hidden'
          }
        >
          <h2 style={{ textAlign: 'left' }}>Timeframe</h2>
          <RadioCheck
            check={true}
            name='month'
            clickHandle={onChangeFunc}
            valueOptions={0}
          >
            Monthly
          </RadioCheck>
          <RadioCheck clickHandle={onChangeFunc} name='month' valueOptions={1}>
            Yearly
          </RadioCheck>
        </div>
      </ButtonGroup2>
      {typeChart === 'line' ? (
        <Chart
          id='chartjs-id'
          type={typeChart}
          data={objTestData}
          options={objTestOptions}
        />
      ) : typeChart === 'doughnut' ? (
        <Chart
          type={typeChart}
          data={{
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
          }}
          options={{
            plugins: {
              title: {
                align: 'start',
                display: true,
                text: title,
                padding: 50,
                font: {
                  weight: 'bold',
                  size: 40,
                },
              },
              legend: {
                labels: {
                  usePointStyle: true,
                  pointStyle: 'circle',
                  padding: 50,
                },
                position: 'right',
              },
            },
          }}
        ></Chart>
      ) : typeChart === 'bar' ? (
        <Chart
          type='line'
          data={{
            labels: ['qwe', 'rty', 'uio', 'asd', 'fgh', 'jkl', 'zxc', 'vbn'],
            datasets: [
              {
                type: 'bar',
                label: 'Datasets 1',
                data: [30, 40, 50, 60, 70, 80, 90, 100],
                backgroundColor: ['red'],
              },

              {
                type: 'bar',
                label: 'Datasets 2',
                data: [40, 50, 60, 70, 80, 90, 100, 110],
                backgroundColor: ['green'],
              },
            ],
          }}
          options={{
            indexAxis: indexAxis,

            plugins: {
              legend: {},
            },
          }}
        ></Chart>
      ) : null}
      {/* <Chart
        id='chartjs-id'
        type={typeChart}
        data={objTestData}
        options={objTestOptions}
      /> */}
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
