import React from 'react';
import './App.css';
import Button from './components/view/Button/ButtonGroup/Button/Button';
import DatePickerCustom from './components/view/DatePicker/DatePickerCustom';
import HighChartComponent from './components/view/TestChart/HighChart';
import TestChartJs2 from './components/view/TestChart/TestChartJs2';

function App() {
  return (
    <div className='App'>
      <HighChartComponent></HighChartComponent>
    </div>
  );
}

export default App;
