import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HighChart from '../../components/UI/Chart/Index';

export default {
  title: 'Example/HighChart',
  component: HighChart
} as ComponentMeta<typeof HighChart>;

const Template: ComponentStory<typeof HighChart> = (args) => (
  <HighChart {...args} />
);

export const ChartJSLine = Template.bind({});
ChartJSLine.args = {
  name: 'areaspline',
  title: 'Portfolio performance'
};

export const ChartJSPie = Template.bind({});
ChartJSPie.args = {
  name: 'pie',
  title: 'XXX in labor force'
};

export const ChartJSBarTypeColumn = Template.bind({});
ChartJSBarTypeColumn.args = {
  name: 'bar-column',
  title: '$XXX (personal)'
};

export const ChartJSBarTypeBar = Template.bind({});
ChartJSBarTypeBar.args = {
  name: 'bar-bar',
  title: '18.3% for sale'
};

export const ChartJSAreaSpline = Template.bind({});
ChartJSAreaSpline.args = {
  name: 'areasplineFill',
  title: '$595,600'
};
