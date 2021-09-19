import { getRandomInteger } from '../utils.js';

export const DESC = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const startGameGcd = () => {
  const num1 = getRandomInteger(1, 10);
  const num2 = getRandomInteger(1, 10);
  const answer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;

  return [answer.toString(), question];
};

export default startGameGcd;
