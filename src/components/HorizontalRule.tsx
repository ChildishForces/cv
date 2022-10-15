import * as React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import EmptyLine from '@components/EmptyLine';
import { spacing } from '@utilities/spacing';
import { COLORS } from '@utilities/theme';

const STYLES = StyleSheet.create({
  root: {
    height: spacing(1.5),
    width: '100%',
    justifyContent: 'center',
  },
  hr: {
    height: 1,
    width: '100%',
    marginBottom: 2,
    backgroundColor: COLORS.border2,
  },
});

const HorizontalRule: React.FC = () => (
  <>
    <EmptyLine />
    <View style={STYLES.root}>
      <View style={STYLES.hr} />
    </View>
    <EmptyLine />
  </>
);

export default HorizontalRule;
