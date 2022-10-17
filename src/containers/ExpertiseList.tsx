import * as React from 'react';
import { View } from '@react-pdf/renderer';
import BaseText from '@components/BaseText';
import List from '@components/List';
import Span from '@components/Span';
import { EXPERTISE_WITH_YEARS, IExpertiseWithYears, interpolateYearColors } from '@data/expertise';
import { groupBy, SortGroup } from '@utilities/array';
import { BULLET, repeatStringFor } from '@utilities/strings';

const renderExpertise = (exp: IExpertiseWithYears, availableSpace: number) => {
  const timeString = `${exp.years}Y`;
  return (
    <>
      <Span color="accentAlt">{exp.name} </Span>
      <Span color="border3">
        {repeatStringFor(availableSpace - exp.name.length - timeString.length + 1, BULLET)}
      </Span>
      <Span color="alphaMed" style={{ color: interpolateYearColors(exp.years) }}>
        {' '}
        {timeString}
      </Span>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const renderArrayIndex = (exp: IExpertiseWithYears, _: number) => (
  <Span color="accentColor5">[]</Span>
);

const fixCiCdKey = (value: 'cicd' | string) => {
  if (value === 'cicd') return 'ci/cd';
  return value;
};

const renderExpertiseGroup = (group: SortGroup<IExpertiseWithYears>) => (
  <View key={group.key}>
    <BaseText color="foregroundDim1">/* {fixCiCdKey(String(group.key)).toUpperCase()} */</BaseText>
    <List<IExpertiseWithYears>
      prefix={renderArrayIndex}
      items={group.items}
      keyGetter={(exp) => exp.name}
      renderItem={renderExpertise}
    />
  </View>
);

const ExpertiseList: React.FC = () => (
  <View>{groupBy((exp) => exp.type, EXPERTISE_WITH_YEARS).map(renderExpertiseGroup)}</View>
);

export default ExpertiseList;
