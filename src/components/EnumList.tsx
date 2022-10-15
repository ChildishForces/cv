import * as React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import BaseText from '@components/BaseText';
import Span from '@components/Span';

interface IEnumListProps {
  items: string[];
}

const STYLES = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
});

const renderEnumListItem = (item: string, index: number) => (
  <View key={index}>
    <BaseText>
      <Span color="accentColor2">case </Span>
      <Span color="accentAlt">{item}</Span>
    </BaseText>
  </View>
);

const EnumList: React.FC<IEnumListProps> = ({ items }) => (
  <View style={STYLES.root}>{items.map(renderEnumListItem)}</View>
);

export default EnumList;
