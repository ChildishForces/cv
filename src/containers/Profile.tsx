import * as React from 'react';
import { View } from '@react-pdf/renderer';
import moment from 'moment/moment';
import Paragraph from '@components/Paragraph';
import Span from '@components/Span';

const Profile: React.FC = () => (
  <View>
    <Paragraph>
      I'm a {moment().diff(moment('12/11/1993', 'DD/MM/YYYY'), 'years')}-year-old full stack
      developer from Edinburgh, Scotland. For the last ~5 years I have focused on native development
      and cloud microservice architecture. I've built software since I was 12 years old and still
      haven't found anything I enjoy more, vocationally or otherwise.
    </Paragraph>
    <Paragraph lastParagraph>
      I write software in <Span color="langTypescript">Typescript</Span>,{' '}
      <Span color="langJavascript">JavaScript</Span>, <Span color="langSwift">Swift</Span> and{' '}
      <Span color="langPHP">PHP</Span> primarily and dabble with a good number more. I build native
      applications for iOS, Android and MacOS, and web.
    </Paragraph>
  </View>
);

export default Profile;
