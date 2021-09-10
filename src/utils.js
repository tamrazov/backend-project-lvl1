export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);

  return Math.floor(rand);
};

export const isEven = (num) => num % 2 === 0;

export const randElemFromArr = (array) => array[Math.floor(Math.random() * array.length)];
