const gcd = (a: number, b: number): number => {
  if (b < 0.00001) return a;
  return gcd(b, Math.floor(a % b));
};

export default gcd;
