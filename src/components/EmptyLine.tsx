import * as React from 'react';
import BaseText from '@components/BaseText';
import { useAvailableSpace } from '@utilities/availableSpace';
import { repeatStringFor } from '@utilities/strings';

const EmptyLine: React.FC = () => {
  const space = useAvailableSpace();

  return <BaseText>{repeatStringFor(space, ' ')}</BaseText>;
};

export default EmptyLine;
