export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);

  return Math.floor(rand);
};

export const isEven = (num) => num % 2 === 0;

export const randElemFromArr = (array) => array[Math.floor(Math.random() * array.length)];

export const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export const getProgression = (start, step, count) => {
  let number = start;
  const result = [];

  for (let i = 0; i < count; i += 1) {
    number += step;
    result.push(number);
  }

  return result;
};
