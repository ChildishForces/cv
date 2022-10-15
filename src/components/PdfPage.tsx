import React from 'react';
import ReactPDF, { Page, StyleSheet } from '@react-pdf/renderer';
import { spacing } from '@utilities/spacing';
import { COLORS } from '@utilities/theme';
import PageProps = ReactPDF.PageProps;

const STYLES = StyleSheet.create({
  root: {
    flexDirection: 'column',
    backgroundColor: COLORS.background1,
    padding: spacing(3),
  },
});

const PdfPage: React.FC<PageProps> = ({ children, ...rest }) => (
  <Page style={STYLES.root} {...rest}>
    {children}
  </Page>
);

export default PdfPage;
