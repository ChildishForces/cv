import * as React from 'react';
import { View } from '@react-pdf/renderer';
import CliLine from '@components/CliLine';
import EmptyLine from '@components/EmptyLine';
import EnumList from '@components/EnumList';
import Header from '@components/Header';
import Paragraph from '@components/Paragraph';
import PdfPage from '@components/PdfPage';
import Span from '@components/Span';
import Table from '@components/Table';
import TableRow from '@components/TableRow';

export const FrontPage: React.FC = () => (
  <PdfPage size="A4">
    <View>
      <CliLine>
        Chris Schofield<Span color="alphaMed"> - Full Stack Developer</Span>
      </CliLine>
      <EmptyLine />
      <Table columns={[1, 2]}>
        <TableRow>
          <Header type="enum" title="KeySkills" />
          <Header type="string[]" title="Profile" />
        </TableRow>
        <TableRow>
          <View>
            <EnumList
              items={[
                'App Development',
                'Cloud Architecture',
                'Team Leadership',
                'Project Management',
                'Effective Presentation',
              ]}
            />
          </View>
          <View>
            <Paragraph>
              I'm a 27-year-old full stack developer from Edinburgh, Scotland and, whilst currently
              living in Hungary, will be moving back home and so am looking for work opportunities
              within the UK. I work primarily in web but love to delve into native projects. I've
              built software since I was 12 years old and still haven't found anything I enjoy
              nearly as much.
            </Paragraph>
            <Paragraph lastParagraph>
              I write software in <Span color="langTypescript">Typescript</Span>,{' '}
              <Span color="langJavascript">JavaScript</Span>, <Span color="langSwift">Swift</Span>{' '}
              and <Span color="langPHP">PHP</Span> primarily and dabble with a good number more. I
              build native applications for iOS, Android and MacOS, and web.
            </Paragraph>
          </View>
        </TableRow>
      </Table>
    </View>
  </PdfPage>
);

export default FrontPage;
