import * as React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
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
  return (
    <View
      style={[
        STYLES.cell,
        { width: spacing(table.columnWidths[table.column]) },
        table.column === table.columnWidths.length - 1 && STYLES.lastCell,
      ].filter(Boolean)}
    >
      {children}
    </View>
  );
};

export default TableCell;
