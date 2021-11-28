import gcd from "@/utils/gcd";

const decimalToFraction = (decimal: number): number[] => {
  const decimalFractionLength = decimal.toString().length - 2;

  let denominator = Math.pow(10, decimalFractionLength);
  let numerator = Math.floor(decimal * denominator);

  const divisor = gcd(numerator, denominator);
  numerator /= divisor;
  denominator /= divisor;

  return [numerator, denominator];
};

export default decimalToFraction;
