import * as React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import BaseText from '@components/BaseText';
import EmptyLine from '@components/EmptyLine';

const STYLES = StyleSheet.create({
  root: {
    margin: 0,
    padding: 0,
  },
});

interface IParagraphProps extends React.PropsWithChildren {
  lastParagraph?: boolean;
}

const Paragraph: React.FC<IParagraphProps> = ({ lastParagraph, children }) => (
  <>
    <View style={STYLES.root}>
      <BaseText color="accentAlt">{children}</BaseText>
    </View>
    {!lastParagraph && <EmptyLine />}
  </>
);

export default Paragraph;
