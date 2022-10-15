import * as React from 'react';
import BaseText from '@components/BaseText';
import EmptyLine from '@components/EmptyLine';
import Span from '@components/Span';
import { useAvailableSpace } from '@utilities/availableSpace';
import { repeatStringFor } from '@utilities/strings';

const ContinuedOverleaf: React.FC = () => {
  const availableSpace = useAvailableSpace();
  const overleafString = 'Continued overleaf';
  const spacerWidth = (availableSpace - overleafString.length - 2) / 2;
  const spacer = repeatStringFor(spacerWidth, '~');

  return (
    <>
      <EmptyLine />
      <BaseText>
        {spacer}
        <Span color="accentAlt"> {overleafString} </Span>
        {spacer}
      </BaseText>
    </>
  );
};

export default ContinuedOverleaf;
