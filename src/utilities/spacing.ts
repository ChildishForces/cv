export const MAX_LINE_WIDTH_PIXELS = 880;
export const MAX_LINE_WIDTH = 110;
export const SPACING_INCREMENT = MAX_LINE_WIDTH_PIXELS / MAX_LINE_WIDTH;

/**
 * Spacing utility providing a standardised unit
 * @param value
 */
export function spacing(value: number): number;
export function spacing(vertical: number, horizontal: number): number[];
export function spacing(top: number, horizontal: number, bottom: number): number[];
export function spacing(top: number, left: number, bottom: number, right: number): number[];
export function spacing(...value: number[]): number | number[] {
  const [first, ...rest] = value;
  if (!rest.length) return first * SPACING_INCREMENT;
  return value.map((v) => v * SPACING_INCREMENT);
}
