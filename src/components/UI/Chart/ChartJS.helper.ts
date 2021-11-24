import { getRandomNum } from './../../FunctionDetails/FuncitonDetails';
//this function return an array of numOfPoints random numbers
//example numOfPoints = 3 => [3,6,1]

export const generateChartPoints = (numOfPoints: number) =>
  Array(numOfPoints)
    .fill(0)
    .map((_) => getRandomNum());
