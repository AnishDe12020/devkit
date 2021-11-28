import caclulateLuminance from "@/utils/calculateLuminance";
import hexToRgb from "@/utils/hexToRgb";
import decimalToFraction from "@/utils/decimalToFraction";

const calculateContrastRatio = (c1: string, c2: string): number[] => {
  const [r1, g1, b1] = hexToRgb(c1);
  const [r2, g2, b2] = hexToRgb(c2);
  const luminance1 = caclulateLuminance(r1, g1, b1);
  const luminance2 = caclulateLuminance(r2, g2, b2);
  const inDecimal: number =
    luminance1 > luminance2
      ? (luminance1 + 0.05) / (luminance2 + 0.05)
      : (luminance2 + 0.05) / (luminance1 + 0.05);
  return decimalToFraction(inDecimal.toFixed(2) as unknown as number);
};

export default calculateContrastRatio;
