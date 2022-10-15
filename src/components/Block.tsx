import * as React from 'react';
import { View } from '@react-pdf/renderer';
import HorizontalRule from '@components/HorizontalRule';

interface IBlockProps extends React.PropsWithChildren {
  isLastIndex?: boolean;
}

const Block: React.FC<IBlockProps> = ({ isLastIndex, children }) => (
  <>
    <View>{children}</View>
    {!isLastIndex && <HorizontalRule />}
  </>
);

export default Block;
