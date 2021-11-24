import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface PDoughNut {
  title?: string;
}

const ChartColumnTypeBar = ({ title, ...props }: PDoughNut) => {
  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
  const options: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: title || 'My chart',
      style: {
        fontSize: '40px'
      },
      align: 'left',
      x: 60
    },
    series: [
      {
        type: 'bar',
        name: 'labels1',
        data: [107, 31, 635, 203, 2]
      },
      {
        type: 'bar',
        name: 'labels1',
        color: 'red',
        data: [107, 31, 635, 203, 2]
      }
    ],
    legend: {
      enabled: false
    },
    xAxis: {
      categories: ['Personal', 'Family', 'Household']
    },

    plotOptions: {
      series: {
        cursor: 'pointer'
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {}
    },

    tooltip: {
      enabled: true
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

export default ChartColumnTypeBar;
