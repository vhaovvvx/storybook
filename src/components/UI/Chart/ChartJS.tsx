import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './ChartJS.scss';
import { action, actions } from '@storybook/addon-actions';
import { getRandomNum, MONTHS } from '../../FunctionDetails/FuncitonDetails';
import ButtonGroup from '../Button/ButtonGroup/ButtonGroup';
import RadioCheck from '../Button/ButtonRadio/RadioCheck';
import { dataObjectsDefault } from './ChartJS.config';

interface PChartJS {
  title?: string;
  type?: string;
}

let dataObjects = dataObjectsDefault;

let titleMonthly = [
  {
    title: 'Monthly'
  },
  {
    title: 'Yearly'
  }
];

type initObject = {
  [name2: string]: boolean;
  years: boolean;
  month: boolean;
};

const HighChartComponent = ({ title, type, ...props }: PChartJS) => {
  const initialObj: initObject = {
    years: false,
    month: false
  };

  const [titleDropdownMonth, setTitleDropdownMonth] = React.useState('Monthly');
  const [defaultOpen, setDefaultOpen] = React.useState(initialObj);
  const [dataDefault, setDataDefault] = React.useState({
    label: dataObjects[0].label,
    data: dataObjects[0].data,
    title: dataObjects[0].title,
    titleMonthly: titleMonthly[0].title
  });

  const isOpen = (name2: string) => {
    const cloneObj = {
      ...defaultOpen,

      [name2]: !defaultOpen[name2]
    };
    setDefaultOpen(cloneObj);
  };

  const onChangeFunc = (value: number, name: string, valueData: string) => {
    let cloneObj = { ...dataDefault };

    if (name === 'month') {
      cloneObj.titleMonthly = titleMonthly[value].title;
    } else {
      cloneObj.label = dataObjects[value].label;
      cloneObj.data = dataObjects[value].data;
      cloneObj.title = dataObjects[value].title;
    }

    const cloneStateObj = { ...defaultOpen, [name]: false };
    setDefaultOpen(cloneStateObj);
    setDataDefault(cloneObj);
  };
  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
  const options: Highcharts.Options = {
    title: {
      text: title || 'My chart',
      align: 'left',
      style: {
        fontSize: '40px'
      },
      x: 50,
      y: 20
    },
    series: [
      {
        borderColor: 'transparent',
        name: 'labels1',
        type: 'areaspline',
        fillColor: 'transparent',
        data: dataDefault.data,
        lineWidth: 5,
        cursor: 'pointer'
      },
      {
        name: 'labels2',
        fillColor: 'transparent',
        type: 'areaspline',
        data: dataDefault.data,
        lineWidth: 8,
        cursor: 'pointer'
      },
      {
        name: 'labels3',
        type: 'areaspline',
        fillColor: 'transparent',
        data: dataDefault.data,
        lineWidth: 8,
        cursor: 'pointer'
      },
      {
        name: 'Temperature',
        type: 'areaspline',
        fillColor: 'transparent',
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
          getRandomNum()
        ],
        lineWidth: 8,
        cursor: 'pointer'
      }
    ],
    legend: {
      align: 'left',
      verticalAlign: 'bottom',
      padding: 20,
      x: 90,
      symbolRadius: 5,
      symbolWidth: 20,
      enabled: true
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false
        }
      }
    },

    credits: {
      enabled: false
    },
    xAxis: {
      offset: 30,
      categories: MONTHS
    },
    yAxis: [
      {
        opposite: true,
        gridLineColor: 'transparent',
        offset: 50,
        title: {
          text: ''
        }
      },
      {
        offset: 50,
        min: 0,
        max: 200,
        tickInterval: 50,
        gridLineWidth: 0,
        title: {
          style: {
            color: 'transparent'
          }
        }
      }
    ],
    tooltip: {
      outside: true,
      useHTML: true,
      backgroundColor: 'transparent',
      shadow: false,
      borderWidth: 0,
      formatter: function () {
        const points: string[] = [];
        const tooltipArray = [
          `<div class='tooltip-custom' style="background-color:${this.color}"> ${this.y}% </div>`
        ];

        points.forEach(function (point: any, index: number) {
          tooltipArray.push(' <b>' + point.y + +'</b>');
        });

        return tooltipArray;
      }
    }
  };

  const callBackhandle = (chart: any) => {
    // callback handle custom chart
  };

  return (
    <div style={{ position: 'relative' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        callback={callBackhandle}
      ></HighchartsReact>
      <ButtonGroup
        maxWidth="95"
        className="chart-select__years"
        name="years"
        toggleDrop={isOpen}
        title={dataDefault.title}
      >
        <div
          className={
            defaultOpen.years
              ? 'wrap-btn--years drop-down-btn no-hidden'
              : 'wrap-btn--years drop-down-btn hidden'
          }
        >
          <h2 style={{ textAlign: 'left' }}>Timeframe</h2>
          <RadioCheck
            valueData="3 Year"
            check={true}
            clickHandle={onChangeFunc}
            valueOptions={0}
            name="years"
          ></RadioCheck>
          <RadioCheck
            clickHandle={onChangeFunc}
            valueOptions={1}
            name="years"
            valueData="5 Year"
          >
            5 Year
          </RadioCheck>
          <RadioCheck
            clickHandle={onChangeFunc}
            valueOptions={2}
            name="years"
            valueData="10 Year"
          ></RadioCheck>
        </div>
      </ButtonGroup>
      <ButtonGroup
        maxWidth="120"
        className="chart-select__month"
        name="month"
        toggleDrop={isOpen}
        title={dataDefault.titleMonthly}
      >
        <div
          className={
            defaultOpen.month
              ? 'wrap-btn--month drop-down-btn no-hidden'
              : 'wrap-btn--month drop-down-btn hidden'
          }
        >
          <h2 style={{ textAlign: 'left' }}>Timeframe</h2>
          <RadioCheck
            valueData="Monthly"
            check={true}
            name="month"
            clickHandle={onChangeFunc}
            valueOptions={0}
          ></RadioCheck>
          <RadioCheck
            clickHandle={onChangeFunc}
            name="month"
            valueOptions={1}
            valueData="Yearly"
          ></RadioCheck>
        </div>
      </ButtonGroup>
    </div>
  );
};

export default HighChartComponent;
