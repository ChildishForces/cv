import * as React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import BaseText from '@components/BaseText';
import Span from '@components/Span';
import { useAvailableSpace } from '@utilities/availableSpace';

interface IListProps<T> {
  items: T[];
  prefix?: (value: T, index: number) => ReturnType<React.FC>;
  keyGetter: (value: T, index: number) => number | string;
  renderItem: (value: T, availableSpace: number) => ReturnType<React.FC>;
}

const STYLES = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
});

const defaultPrefix = () => <Span color="accentColor2">case</Span>;
export const stringEnumRenderer = (value: string) => <Span color="accentAlt">{value}</Span>;
export const stringEnumKeyGetter = (value: string, index: number) => index;

function List<T = string>({
  items,
  keyGetter,
  renderItem,
  prefix,
}: IListProps<T>): ReturnType<React.FC> {
  const availableSpace = useAvailableSpace();

  const renderEnumListItem = React.useCallback(
    (item: T, index: number) => (
      <View key={keyGetter(item, index)}>
        <BaseText>
          {prefix?.(item, index) ?? defaultPrefix()} {renderItem(item, availableSpace - 5)}
        </BaseText>
      </View>
    ),
    [renderItem, availableSpace]
  );

  return <View style={STYLES.root}>{items.map(renderEnumListItem)}</View>;
}

export default List;
