import * as React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import EmptyLine from '@components/EmptyLine';
import { useAvailableSpace } from '@utilities/availableSpace';
import { spacing } from '@utilities/spacing';
import { TableProvider } from '@utilities/tableContext';
import { COLORS } from '@utilities/theme';

const STYLES = StyleSheet.create({
  table: {
    padding: 0,
    borderWidth: spacing(0.125),
    borderStyle: 'solid',
    borderColor: COLORS.border2,
    flexDirection: 'column',
  },
});

interface ITableProps {
  columns: number[];
}

const Table: React.FC<React.PropsWithChildren<ITableProps>> = ({ columns, children }) => {
  const availableSpace = useAvailableSpace();

  // Computed Values
  const totalEffectiveColumns = React.useMemo(
    () => columns.reduce((acc, cv) => acc + cv),
    [columns]
  );
  const columnWidths = React.useMemo(() => {
    // Not pretty, but fast.
    const minusSeparators = availableSpace - columns.length - 1;
    const widths: number[] = [];
    let totalExceptLastColumn = 0;

    columns.forEach((column, index) => {
      const percentage = Math.round(minusSeparators * (column / totalEffectiveColumns));
      if (index !== columns.length - 1) {
        totalExceptLastColumn += percentage;
        return widths.push(percentage);
      }
      if (totalExceptLastColumn + percentage > minusSeparators) return widths.push(percentage - 1);
      if (totalExceptLastColumn + percentage < minusSeparators) return widths.push(percentage + 1);
      return widths.push(percentage);
    });

    return widths;
  }, [columns, availableSpace, totalEffectiveColumns]);

  return (
    <>
      <View style={STYLES.table}>
        {React.Children.map(children, (child, index) => (
          <TableProvider
            value={{ columnWidths, row: index, rowCount: React.Children.count(children) }}
            key={index}
          >
            {child}
          </TableProvider>
        ))}
      </View>
      <EmptyLine />
    </>
  );
};

export default Table;
