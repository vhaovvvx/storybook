import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface PDoughNut {
  title?: string;
}

const ChartColumn = ({ title, ...props }: PDoughNut) => {
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
      x: 30
    },
    series: [
      {
        type: 'column',
        name: 'labels1',
        data: [107, 31, 635, 203, 2]
      },
      {
        type: 'column',
        name: 'labels1',
        color: 'red',
        data: [107, 31, 635, 203, 2]
      }
    ],
    legend: {
      enabled: true,
      align: 'left',
      layout: 'vertical',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      shadow: true
    },
    xAxis: {
      categories: ['10', '20', '30', '40', '50']
    },

    plotOptions: {
      series: {
        cursor: 'pointer'
      }
    },
    yAxis: {
      title: {
        text: ''
        // align: 'high'
      },
      labels: {
        // overflow: 'justify'
      }
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

export default ChartColumn;
