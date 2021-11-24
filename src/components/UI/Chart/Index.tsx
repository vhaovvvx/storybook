import React from 'react';
import PropTypes from 'prop-types';
import HighChartComponent from './ChartJS';
import ChartColumn from './ChartColumn/ChartColumn';
import ChartDoughNut from './ChartDoughNut/ChartDoughNut';
import ChartAreaSpline from '../Chart/ChartAreSpline/ChartAreaSpline';
import ChartColumnTypeBar from './ChartColumn/ChartColumnTypeBar';

interface IndexChartProps {
  title: string;
  name: 'areaspline' | 'pie' | 'bar-column' | 'bar-bar' | 'areasplineFill';
}

function Index({ title, name, ...props }: IndexChartProps) {
  return (
    <React.Fragment>
      {name === 'areaspline' ? (
        <HighChartComponent title={title}></HighChartComponent>
      ) : name === 'pie' ? (
        <ChartDoughNut title={title}></ChartDoughNut>
      ) : name === 'bar-column' ? (
        <ChartColumn title={title}></ChartColumn>
      ) : name === 'bar-bar' ? (
        <ChartColumnTypeBar title={title}></ChartColumnTypeBar>
      ) : name === 'areasplineFill' ? (
        <ChartAreaSpline title={title} />
      ) : null}
    </React.Fragment>
  );
}

export default Index;
