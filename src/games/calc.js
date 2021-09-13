import { getRandomInteger, getRandElemFromArr } from '../utils.js';

const getCurrentValue = (num1, num2, expression) => {
  switch (true) {
    case expression === '+':
      return num1 + num2;
    case expression === '-':
      return num1 - num2;
    case expression === '*':
      return num1 * num2;
    default:
      return null;
  }
};

const playingCalculate = () => {
  const expressionsArr = ['+', '-', '*'];
  const expression = getRandElemFromArr(expressionsArr);
  const num1 = getRandomInteger(1, 10);
  const num2 = getRandomInteger(1, 10);
  const curAnswer = getCurrentValue(num1, num2, expression);
  const question = `Question: ${num1} ${expression} ${num2}`;

  return [curAnswer.toString(), question];
};

export default playingCalculate;
