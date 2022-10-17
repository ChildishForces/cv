import * as React from 'react';
import ReactPDF, { StyleSheet, Text } from '@react-pdf/renderer';
import { SPACING_INCREMENT } from '@utilities/spacing';
import { COLORS } from '@utilities/theme';

interface IBaseTextProps extends ReactPDF.TextProps {
  color?: keyof typeof COLORS;
}

const STYLES = StyleSheet.create({
  text: {
    fontFamily: 'JetBrainsMono',
    fontWeight: 400,
    fontSize: SPACING_INCREMENT,
    lineHeight: 1.5,
  },
});

const BaseText: React.FC<IBaseTextProps> = ({ children, color, style, ...props }) => {
  // Computed Values
  const styles = React.useMemo(() => {
    const baseStyles = [STYLES.text, { color: COLORS[color ?? 'border2'] }];
    if (!style) return baseStyles;
    const safeArray = Array.isArray(style) ? style : [style];
    return [...baseStyles, ...safeArray];
  }, [color, style]);

  return (
    <Text {...props} style={styles}>
      {children}
    </Text>
  );
};

export default BaseText;
