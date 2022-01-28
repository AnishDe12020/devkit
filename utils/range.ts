/**
 * Generate array of sequence.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range
 * @param {number} start
 * @param {number} stop
 * @param {number} step default = 1
 * @return {number[]} generated numbers
 */
const range = (start: number, stop: number, step: number = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export default range;
