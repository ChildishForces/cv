import * as React from 'react';
import { Document } from '@react-pdf/renderer';
import FrontPage from '@pages/FrontPage';
import { renderDocument } from '@utilities/render';

const MyDocument: React.FC = () => (
  <Document>
    <FrontPage />
  </Document>
);

renderDocument(<MyDocument />, `${process.cwd()}/chris-schofield-cv.pdf`);
