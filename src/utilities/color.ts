// Modified version of MUI's color utilities

interface IDecomposedColor {
  type: string;
  values: number[];
  colorSpace?: string;
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
export function hexToRgb(color: string): string {
  color = color.substring(1);

  const regex = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(regex);
  if (!colors) return '';
  if (colors && colors[0].length === 1) colors = colors.map((n) => n + n);

  const colorMapper = (n: string, i: number) =>
    i < 3 ? parseInt(n, 16) : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;

  return `rgb${colors.length === 4 ? 'a' : ''}(${colors.map(colorMapper).join(', ')})`;
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[], colorSpace?: string}
 */
export function decomposeColor(color: string): IDecomposedColor {
  if (color.charAt(0) === '#') return decomposeColor(hexToRgb(color));
  const marker = color.indexOf('(');
  const type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1)
    throw new Error(`Unsupported color type: ${color}`);

  const values = color.substring(marker + 1, color.length - 1);
  let valuesArray: string[];
  let colorSpace: string | undefined;

  if (type === 'color') {
    valuesArray = values.split(' ');
    colorSpace = valuesArray.shift() || '';
    if (valuesArray.length === 4 && values[3].charAt(0) === '/') {
      valuesArray[3] = valuesArray[3].substring(1);
    }
    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1)
      throw new Error(`Unsupported ${colorSpace} color space.`);
  } else {
    valuesArray = values.split(',');
  }

  return {
    type,
    values: valuesArray.map((value) => parseFloat(value)),
    colorSpace,
  };
}

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
export function recomposeColor(color: {
  type: string;
  values: (number | string)[];
  colorSpace?: string;
}): string {
  const { type, colorSpace } = color;
  let { values } = color;
  let valueString: string;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => (i < 3 ? parseInt(String(n), 10) : n));
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.indexOf('color') !== -1) {
    valueString = `${colorSpace} ${values.join(' ')}`;
  } else {
    valueString = `${values.join(', ')}`;
  }

  return `${type}(${valueString})`;
}

/**
 * Blend two colours together, accepting a third argument for factor,
 * where 0 is completely the 'from' color, and 1 is completely the 'to' color
 * @param from
 * @param to
 * @param factor
 */
export function blend(from: string, to: string, factor = 0.5): string {
  factor = Math.abs(factor);
  const f = decomposeColor(from);
  const t = decomposeColor(to);
  if (t.type !== 'rgb' && t.type !== 'rgba') throw Error('Incompatible color type');
  if (t.colorSpace !== f.colorSpace) throw Error('Incompatible color type');
  const r = Math.round((t.values[0] - f.values[0]) * factor + f.values[0]);
  const g = Math.round((t.values[1] - f.values[1]) * factor + f.values[1]);
  const b = Math.round((t.values[2] - f.values[2]) * factor + f.values[2]);
  const color = { type: 'rgb', values: [r, g, b], colorSpace: t.colorSpace };
  return recomposeColor(color);
}

/**
 * Given an array of colors representing an evenly spaced gradient, returns the
 * color on that gradient interpolated with a float between 0 and 1
 * @param colors
 * @param value
 */
export const interpolateGradient = (colors: string[], value: number) => {
  const interpolatedValue = (colors.length - 1) * value;
  const endIndex = Math.ceil(interpolatedValue);
  const diff = interpolatedValue % 1;
  const endColor = colors[endIndex];
  if (!diff) return endColor;
  const startIndex = Math.max(endIndex - 1, 0);
  const startColor = colors[startIndex];
  return blend(startColor, endColor, diff);
};
