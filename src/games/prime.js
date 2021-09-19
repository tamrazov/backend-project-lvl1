import { getRandomInteger } from '../utils.js';

export const DESC = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const startGamePrime = () => {
  const num = getRandomInteger(1, 10);
  const answer = isPrime(num) ? 'yes' : 'no';

  return [answer, num];
};

export default startGamePrime;
