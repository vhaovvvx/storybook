import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HighChart from '../components/view/TestChart/HighChart';

export default {
  title: 'Example/HighChart',
  component: HighChart,
} as ComponentMeta<typeof HighChart>;

const Template: ComponentStory<typeof HighChart> = (args) => (
  <HighChart {...args} />
);

export const ChartJSLine = Template.bind({});
ChartJSLine.args = {
  title: 'Portfolio performance',
  //   user: {},
};

export const ChartJSDoughNut = Template.bind({});
ChartJSDoughNut.args = {
  title: 'XXX in labor force',
};

export const ChartJSBar = Template.bind({});
ChartJSBar.args = {
  title: '18.3% for sale',
  //   indexAxis: 'y',
};
