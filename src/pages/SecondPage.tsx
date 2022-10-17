import * as React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import BaseText from '@components/BaseText';
import ContinuedOverleaf from '@components/ContinuedOverleaf';
import EmptyLine from '@components/EmptyLine';
import Header from '@components/Header';
import PageHeader from '@components/PageHeader';
import PdfPage from '@components/PdfPage';
import Span from '@components/Span';
import Table from '@components/Table';
import TableRow from '@components/TableRow';
import Examples from '@containers/Examples';
import SecondPageExperience from '@containers/SecondPageExperience';

const STYLES = StyleSheet.create({
  specialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const SecondPage: React.FC = () => (
  <PdfPage size="A4">
    <View>
      <PageHeader page={2} totalPages={3} />
      <EmptyLine />
      <Table columns={[1, 2]}>
        <TableRow>
          <Header type="IProject" title="Projects" isArray />
          <View style={STYLES.specialHeader}>
            <Header type="IExperience" isArray title="Experience" />
            <BaseText style={{ lineHeight: 1.125 }}>
              <Span color="accentAlt">[Continued]</Span>
            </BaseText>
          </View>
        </TableRow>
        <TableRow>
          <Examples />
          <SecondPageExperience />
        </TableRow>
      </Table>
      <ContinuedOverleaf />
    </View>
  </PdfPage>
);

export default SecondPage;
