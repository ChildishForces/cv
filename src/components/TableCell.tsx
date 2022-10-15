import * as React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { AvailableSpaceProvider } from '@utilities/availableSpace';
import { spacing, SPACING_INCREMENT } from '@utilities/spacing';
import { useTableContext } from '@utilities/tableContext';
import { COLORS } from '@utilities/theme';

const STYLES = StyleSheet.create({
  cell: {
    width: '100%',
    padding: SPACING_INCREMENT,
    borderRightWidth: spacing(0.125),
    borderRightStyle: 'solid',
    borderRightColor: COLORS.border2,
    flexDirection: 'column',
  },
  lastCell: {
    borderRightWidth: 0,
  },
});

const TableCell: React.FC<React.PropsWithChildren> = ({ children }) => {
  const table = useTableContext();
  const space = table.columnWidths[table.column];
  const isLastIndex = table.column === table.columnWidths.length - 1;
  const width = spacing(space) + (isLastIndex ? 0 : 1);
  return (
    <AvailableSpaceProvider value={space - 2}>
      <View style={[STYLES.cell, { width }, isLastIndex && STYLES.lastCell].filter(Boolean)}>
        {children}
      </View>
    </AvailableSpaceProvider>
  );
};

export default TableCell;
