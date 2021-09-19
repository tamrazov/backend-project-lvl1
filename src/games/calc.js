import { getRandomInteger, getRandElemFromArr } from '../utils.js';

export const DESC = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
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
  const answer = calculate(num1, num2, operator);
  const question = `${num1} ${operator} ${num2}`;

  return [answer.toString(), question];
};

export default startGameCalculate;
