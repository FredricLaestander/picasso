export type HSL = { h: number; s: number; l: number };

const getColorValue = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const getRandomColor = (): HSL => {
  return {
    h: getColorValue(360),
    s: getColorValue(100),
    l: getColorValue(100),
  };
};
