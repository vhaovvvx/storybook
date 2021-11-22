import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TestChartJs2 from '../components/view/TestChart/TestChartJs2';

export default {
  title: 'Example/Chart',
  component: TestChartJs2,
} as ComponentMeta<typeof TestChartJs2>;

const Template: ComponentStory<typeof TestChartJs2> = (args) => (
  <TestChartJs2 {...args} />
);

export const ChartJSLine = Template.bind({});
ChartJSLine.args = {
  typeChart: 'line',
  title: 'Portfolio performance',
  //   user: {},
};

export const ChartJSDoughNut = Template.bind({});
ChartJSDoughNut.args = {
  typeChart: 'doughnut',
  title: 'XXX in labor force',
};

export const ChartJSBar = Template.bind({});
ChartJSBar.args = {
  typeChart: 'bar',
  title: '18.3% for sale',
  indexAxis: 'y',
};
