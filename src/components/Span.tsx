import * as React from 'react';
import ReactPDF, { StyleSheet, Text } from '@react-pdf/renderer';
import { COLORS } from '@utilities/theme';

interface ISpanProps extends ReactPDF.TextProps {
  color: keyof typeof COLORS;
}

type ColorMap = {
  [K in keyof typeof COLORS]: { color: typeof COLORS[K] };
};

const STYLES = StyleSheet.create(
  Object.entries(COLORS).reduce<ColorMap>(
    (acc, [key, color]) => ({
      ...acc,
      [key]: { color },
    }),
    {} as ColorMap
  )
);

const Span: React.FC<ISpanProps> = ({ children, color, ...rest }) => (
  <Text {...rest} style={STYLES[color]}>
    {children}
  </Text>
);

export default Span;
