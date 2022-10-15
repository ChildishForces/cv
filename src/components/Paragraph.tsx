import * as React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import BaseText from '@components/BaseText';
import { spacing } from '@utilities/spacing';

const STYLES = StyleSheet.create({
  root: {
    margin: 0,
    padding: 0,
    marginBottom: spacing(2),
  },
  lastParagraph: {
    marginBottom: 0,
  },
});

interface IParagraphProps extends React.PropsWithChildren {
  lastParagraph?: boolean;
}

const Paragraph: React.FC<IParagraphProps> = ({ lastParagraph, children }) => (
  <View style={[STYLES.root, lastParagraph && STYLES.lastParagraph].filter(Boolean)}>
    <BaseText color="accentAlt">{children}</BaseText>
  </View>
);

export default Paragraph;
