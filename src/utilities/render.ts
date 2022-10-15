import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { loadFonts } from '@utilities/fonts';

/**
 * Render the document at the location provided
 * @param content
 * @param output
 */
export const renderDocument = async (content: ReturnType<React.FC>, output: string) => {
  await loadFonts();
  await ReactPDF.render(content, output);
};
