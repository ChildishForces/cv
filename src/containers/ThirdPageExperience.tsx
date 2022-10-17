import * as React from 'react';
import { View } from '@react-pdf/renderer';
import { renderJobBlock } from '@components/RecentJob';
import { EXPERIENCE } from '@data/experience';

const ThirdPageExperience: React.FC = () => <View>{EXPERIENCE.slice(5).map(renderJobBlock)}</View>;

export default ThirdPageExperience;
