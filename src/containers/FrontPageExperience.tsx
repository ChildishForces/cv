import * as React from 'react';
import { View } from '@react-pdf/renderer';
import { renderJobBlock } from '@components/RecentJob';
import { EXPERIENCE } from '@data/experience';

const FrontPageExperience: React.FC = () => (
  <View>{EXPERIENCE.slice(0, 2).map(renderJobBlock)}</View>
);

export default FrontPageExperience;
