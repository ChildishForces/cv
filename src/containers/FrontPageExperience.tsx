import * as React from 'react';
import { View } from '@react-pdf/renderer';
import Block from '@components/Block';
import RecentJob from '@components/RecentJob';
import { EXPERIENCE, IJob } from '@data/experience';

const renderBlock = (job: IJob, index: number) => (
  <Block key={index} isLastIndex={index === 1}>
    <RecentJob job={job} />
  </Block>
);

const FrontPageExperience: React.FC = () => <View>{EXPERIENCE.slice(0, 2).map(renderBlock)}</View>;

export default FrontPageExperience;
