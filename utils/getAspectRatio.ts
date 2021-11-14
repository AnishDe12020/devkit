const gcd = (width: number, height: number): number => {
  return height === 0 ? width : gcd(height, width % height);
};

const getAspectRatio = (width: number, height: number): number[] => {
  const g = gcd(width, height);
  return [width / g, height / g];
};

export default getAspectRatio;
