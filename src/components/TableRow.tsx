import * as React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import TableCell from '@components/TableCell';
import { spacing } from '@utilities/spacing';
import { useTableContext, TableProvider } from '@utilities/tableContext';
import { COLORS } from '@utilities/theme';

const STYLES = StyleSheet.create({
  row: {
    padding: 0,
    flexDirection: 'row',
    borderBottomWidth: spacing(0.125),
    borderBottomStyle: 'solid',
    borderBottomColor: COLORS.border2,
  },
  lastRow: {
    borderBottomWidth: 0,
  },
});

const TableRow: React.FC<React.PropsWithChildren> = ({ children }) => {
  const table = useTableContext();
  const isLastRow = table.row === table.rowCount - 1;

  return (
    <View style={[STYLES.row, isLastRow && STYLES.lastRow].filter(Boolean)}>
      {React.Children.map(children, (child, index) => (
        <TableProvider key={index} value={{ ...table, column: index }}>
          <TableCell>{child}</TableCell>
        </TableProvider>
      ))}
    </View>
  );
};

export default TableRow;
