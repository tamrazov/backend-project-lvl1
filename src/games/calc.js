import { getRandomInteger, getRandElemFromArr } from '../utils.js';

const calculate = (num1, num2, operator) => {
  switch (true) {
    case operator === '+':
      return num1 + num2;
    case operator === '-':
      return num1 - num2;
    case operator === '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const startGameCalculate = () => {
  const operatorsArr = ['+', '-', '*'];
  const operator = getRandElemFromArr(operatorsArr);
  const num1 = getRandomInteger(1, 10);
  const num2 = getRandomInteger(1, 10);
  const curAnswer = calculate(num1, num2, operator);
  const question = `${num1} ${operator} ${num2}`;

  return [curAnswer.toString(), question];
};

export default startGameCalculate;
