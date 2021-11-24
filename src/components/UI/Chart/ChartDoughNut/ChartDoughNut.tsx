import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { action, actions } from '@storybook/addon-actions';
import { getRandomNum, MONTHS } from '../../../FunctionDetails/FuncitonDetails';
import ButtonGroup from '../../Button/ButtonGroup/ButtonGroup';
import RadioCheck from '../../Button/ButtonRadio/RadioCheck';
import { dataObjectsDefault } from '../ChartJS.config';
import './ChartDoughNut.scss';

interface PDoughNut {
  title?: string;
  type?: string;
}

let dataObjects = dataObjectsDefault;

type initObject = {
  [name2: string]: boolean;
  years: boolean;
  month: boolean;
};

const ChartDoughNut = ({ title, type, ...props }: PDoughNut) => {
  const [titleDropdownMonth, setTitleDropdownMonth] = React.useState('Monthly');

  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
  const options: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: title || 'My chart',
      align: 'center',
      style: {
        fontSize: '40px'
      },
      x: -30
    },
    series: [
      {
        type: 'pie',
        borderColor: 'transparent',
        borderWidth: 50,
        name: 'Full time(XX.X%)',
        innerSize: '50%',
        fillColor: 'transparent',
        data: [
          ['Chrome', 58.9],
          ['Firefox', 13.29],
          ['Internet Explorer', 13],
          ['Edge', 3.78],
          ['Safari', 3.42]
        ]
      }
    ],
    legend: {
      enabled: true,
      align: 'right',
      layout: 'vertical',
      verticalAlign: 'middle',
      y: 30
    },

    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false
        },
        showInLegend: true,
        cursor: 'pointer'
      }
    },

    tooltip: {
      enabled: false
    },

    credits: {
      enabled: false
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
    </div>
  );
};

export default ChartDoughNut;
