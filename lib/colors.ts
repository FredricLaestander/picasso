const getColorValue = () => {
  return Math.floor(Math.random() * 255);
};

export type RGB = { r: number; g: number; b: number };

export const randomColor = (): RGB => {
  const r = getColorValue();
  const g = getColorValue();
  const b = getColorValue();

  return {
    r,
    g,
    b,
  };
};
