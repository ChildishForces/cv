import * as React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import BaseText from '@components/BaseText';
import Block from '@components/Block';
import EmptyLine from '@components/EmptyLine';
import QrCode from '@components/QrCode';
import Span from '@components/Span';
import { spacing } from '@utilities/spacing';

const STYLES = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  qr: {
    flexShrink: 0,
    paddingRight: spacing(2),
  },
  qrSvg: {
    width: spacing(14.5),
    height: spacing(14.5),
  },
  notes: {
    flex: 1,
  },
});

const ReleaseNotes: React.FC = () => (
  <View style={STYLES.root}>
    <View style={STYLES.qr}>
      <QrCode style={STYLES.qrSvg} />
    </View>
    <View style={STYLES.notes}>
      <Block>
        <BaseText color="alphaHighMed">[Release Notes]</BaseText>
        <EmptyLine />
        <BaseText color="accentAlt">
          This is a condensed CV for print/email. To see more of my experience and skills please
          visit my website at <Span color="accentColor4">https://childishforces.com</Span>. I can be
          reached by email at <Span color="accentColor1">chris@childishforces.com</Span>. If you
          would like to see the repository that generates this document, it is publicly available on
          my GitHub account <Span color="accentColor5">@ChildishForces</Span>.
        </BaseText>
      </Block>
      <BaseText color="alphaHigh">Thanks for taking the time to read my CV! :)</BaseText>
    </View>
  </View>
);

export default ReleaseNotes;
