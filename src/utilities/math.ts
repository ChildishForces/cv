export interface IRange {
  lowest: number;
  highest: number;
}

export const interpolateNumbers = (range: IRange, value: number): number => {
  const normalisedRange = range.highest - range.lowest;
  const normalisedValue = value - range.lowest;
  return normalisedValue / normalisedRange;
};
