import * as React from 'react';
import { View } from '@react-pdf/renderer';
import '@utilities/fonts';
import BaseText from '@components/BaseText';
import Span from '@components/Span';

// Create Document Component
const CliLine: React.FC<React.PropsWithChildren> = ({ children }) => (
  <View>
    <BaseText color="alphaHigh">
      <Span color="accentColor1">$</Span> {children}
    </BaseText>
  </View>
);

export default CliLine;
