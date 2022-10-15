import * as React from 'react';
import { View } from '@react-pdf/renderer';
import ContinuedOverleaf from '@components/ContinuedOverleaf';
import EmptyLine from '@components/EmptyLine';
import Header from '@components/Header';
import PageHeader from '@components/PageHeader';
import PdfPage from '@components/PdfPage';
import Table from '@components/Table';
import TableRow from '@components/TableRow';
import ExpertiseList from '@containers/ExpertiseList';
import FrontPageExperience from '@containers/FrontPageExperience';
import KeySkillsEnumList from '@containers/KeySkillsEnumList';
import Profile from '@containers/Profile';

export const FrontPage: React.FC = () => (
  <PdfPage size="A4">
    <View>
      <PageHeader page={1} totalPages={2} />
      <EmptyLine />
      <Table columns={[1, 2]}>
        <TableRow>
          <Header type="enum" title="KeySkills" />
          <Header type="String" title="Profile" isArray />
        </TableRow>
        <TableRow>
          <KeySkillsEnumList />
          <Profile />
        </TableRow>
      </Table>
      <Table columns={[1, 2]}>
        <TableRow>
          <Header type={['String', 'Int']} title="Expertise" />
          <Header type="IExperience" isArray title="Experience" />
        </TableRow>
        <TableRow>
          <ExpertiseList />
          <FrontPageExperience />
        </TableRow>
      </Table>
      <ContinuedOverleaf />
    </View>
  </PdfPage>
);

export default FrontPage;
