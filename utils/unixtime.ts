export type PrecisionType =
  | "seconds"
  | "milliseconds"
  | "microseconds"
  | "nanoseconds";

export const getPresision = (i: number | undefined) => {
  if (!i) {
    return "seconds";
  }
  const len = i.toString().length;
  if (len < 12) {
    return "seconds";
  } else if (len < 15) {
    return "milliseconds";
  } else if (len < 18) {
    return "microseconds";
  } else {
    return "nanoseconds";
  }
};

export const getDate = (
  input: number | undefined,
  precision: PrecisionType
) => {
  if (!input) {
    return undefined;
  }
  switch (precision) {
    case "seconds":
      return new Date(input * 1000.0);
    case "milliseconds":
      return new Date(input);
    case "microseconds":
      return new Date(Math.floor(input / 1000.0));
    case "nanoseconds":
      return new Date(Math.floor(input / 1000000.0));
    default:
      return new Date(input * 1000.0);
  }
};
