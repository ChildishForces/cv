import * as React from 'react';

interface ITableContext {
  columnWidths: number[];
  row?: number;
  rowCount?: number;
  column?: number;
}

const TableContext = React.createContext<ITableContext>({ columnWidths: [] });

export const { Provider: TableProvider } = TableContext;

export const useTableContext = (): ITableContext => React.useContext(TableContext);
