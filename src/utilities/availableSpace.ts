import * as React from 'react';
import { MAX_LINE_WIDTH } from '@utilities/spacing';

const AvailableSpaceContext = React.createContext<number>(MAX_LINE_WIDTH);

export const { Provider: AvailableSpaceProvider } = AvailableSpaceContext;

export const useAvailableSpace = (): number => React.useContext(AvailableSpaceContext);
