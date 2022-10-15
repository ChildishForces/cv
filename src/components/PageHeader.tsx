import * as React from 'react';
import { View } from '@react-pdf/renderer';
import '@utilities/fonts';
import BaseText from '@components/BaseText';
import Span from '@components/Span';
import { useAvailableSpace } from '@utilities/availableSpace';
import { repeatStringFor } from '@utilities/strings';

interface IPageHeaderProps {
  page: number;
  totalPages: number;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ page, totalPages }) => {
  const availableSpace = useAvailableSpace();
  const pageString = `Page ${page} of ${totalPages}`;
  const space = availableSpace - 39 - pageString.length;

  return (
    <View>
      <BaseText color="alphaHigh">
        <Span color="accentColor1">$</Span> Chris Schofield
        <Span color="alphaMed"> - Full Stack Developer</Span>
        {repeatStringFor(space, ' ')}
        <Span color="accentAlt">{pageString}</Span>
      </BaseText>
    </View>
  );
};

export default PageHeader;
