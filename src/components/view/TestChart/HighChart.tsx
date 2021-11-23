import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './HighChart.scss';
import { actions } from '@storybook/addon-actions';
import { getRandomNum } from './TestChartJs2';

// The wrapper exports only a default component that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props) and
// RefObject interface (HighchartsReact.RefObject). All other interfaces
// like Options come from the Highcharts module itself.

interface PHighChart {
  title?: string;
  type?: string;
}

// React supports function components as a simple way to write components that
// only contain a render method without any state (the App component in this
// example).

const HighChartComponent = ({ title, type, ...props }: PHighChart) => {
  const asd = React.useRef(null);
  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
  const options: Highcharts.Options = {
    title: {
      text: 'My chart',
    },
    series: [
      {
        borderColor: 'transparent',
        name: 'labels1',
        type: 'areaspline',
        fillColor: 'transparent',
        data: [10, 12, 14, 16, 12, 14, 17, 25],
        //   size: '100%',
        //   innerSize: '50%',

        showInLegend: true,
        //   borderColor: 'transparent',
        dataLabels: {
          enabled: false,
        },
        marker: {
          //   radius: 6,
          //   symbol: 'circle',
        },
        point: {},
        events: {
          mouseOver: function () {},
        },
        lineWidth: 10,
        cursor: 'pointer',
      },
      {
        name: 'labels2',
        fillColor: 'transparent',

        type: 'areaspline',
        data: [14, 10, 11, 12, 21, 25, 10, 11],
        //   size: '100%',
        //   innerSize: '50%',
        showInLegend: true,
        //   borderColor: 'transparent',
        dataLabels: {
          enabled: false,
        },
        point: {},
        events: {
          mouseOver: function () {},
        },
        lineWidth: 10,
        cursor: 'pointer',
      },
      {
        name: 'labels3',
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
        ],
        cursor: 'pointer',

        //   size: '100%',
        //   innerSize: '50%',
        showInLegend: true,
        //   borderColor: 'transparent',
        dataLabels: {
          enabled: false,
        },
        point: {},
        events: {
          mouseOver: function () {},
        },
        lineWidth: 10,
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
        ],
        tooltip: {
          valueSuffix: ' ',
        },
        //   size: '100%',
        //   innerSize: '50%',
        //   showInLegend: true,
        //   borderColor: 'transparent',
        //   dataLabels: {
        //     enabled: false,
        //   },
        //   point: {},
        //   events: {
        //     mouseOver: function () {},
        //   },
        lineWidth: 10,
        cursor: 'pointer',
      },
    ],
    legend: {
      align: 'left',
      verticalAlign: 'bottom',
      padding: 20,
      itemStyle: {},
      x: 90,
      symbolRadius: 5,
      symbolWidth: 20,
      // layout: 'vertical',
      enabled: true,
      itemHiddenStyle: {
        opacity: 0.5,
      },
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: true,
          radius: 0,
          width: 20,
        },
      },
      //   series: {
      //     marker: {
      //       enabled: false,
      //       radius: 6,
      //       width: 12,
      //       height: 12,
      //     },
      //   },
    },

    credits: {
      enabled: false,
    },
    xAxis: {
      offset: 30,
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      //   gridLineColor: 'transparent',
    },

    yAxis: [
      {
        title: {
          text: '',
        },
        labels: {},
        min: 0,
        max: 25,
        tickInterval: 5,
        opposite: true,
        gridLineColor: 'transparent',
        offset: 50,
      },
      {
        offset: 50,
        min: 0,
        max: 25,
        gridLineWidth: 0,
        tickInterval: 5,
        title: {
          style: {
            color: 'transparent',
          },
        },
        labels: {
          format: '{value} ',
          style: {},
        },
      },
    ],
    tooltip: {
      outside: true,
      useHTML: true,
      backgroundColor: 'transparent',
      valueSuffix: ' ',
      shadow: false,
      borderWidth: 0,
      formatter: function () {
        var points = [] as string[];
        var tooltipArray = [
          `<div class='tooltip-custom' style="background-color:${this.color}"> ${this.y}% </div>`,
        ];

        points.forEach(function (point: any, index: number) {
          tooltipArray.push(' <b>' + point.y + +'</b>');
        });

        // setDefaultColor(color);

        return tooltipArray;
      },
    },
  };

  const callBackhandle = (chart: any) => {
    console.log(chart);
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      callback={callBackhandle}
    />
  );
};

export default HighChartComponent;
