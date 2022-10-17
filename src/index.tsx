import * as React from 'react';
import { Document } from '@react-pdf/renderer';
import FrontPage from '@pages/FrontPage';
import SecondPage from '@pages/SecondPage';
import ThirdPage from '@pages/ThirdPage';
import { renderDocument } from '@utilities/render';

const MyDocument: React.FC = () => (
  <Document>
    <FrontPage />
    <SecondPage />
    <ThirdPage />
  </Document>
);

renderDocument(<MyDocument />, `${process.cwd()}/chris-schofield-cv.pdf`);
