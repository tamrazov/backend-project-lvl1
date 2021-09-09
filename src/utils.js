export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);

  return Math.floor(rand);
};

export const isEven = (num) => num % 2 === 0;
