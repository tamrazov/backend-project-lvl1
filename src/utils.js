export const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);

  return Math.floor(rand);
};

export const getRandElemFromArr = (array) => array[Math.floor(Math.random() * array.length)];
