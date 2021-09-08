export const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max - min + 1);

  return Math.floor(rand);
};

export const isEven = (num) => {
  return num % 2 === 0;
};
