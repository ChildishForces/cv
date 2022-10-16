import * as React from 'react';
import { View } from '@react-pdf/renderer';
import List from '@components/List';
import Span from '@components/Span';
import { EXPERTISE_WITH_YEARS, IExpertiseWithYears, interpolateYearColors } from '@data/expertise';
import { repeatStringFor } from '@utilities/strings';

const renderExpertise = (exp: IExpertiseWithYears, availableSpace: number) => {
  const timeString = `${exp.years}Y`;
  return (
    <>
      <Span color="accentAlt">{exp.name} </Span>
      <Span color="border3">
        {repeatStringFor(availableSpace - exp.name.length - timeString.length - 2, '•')}
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

const ExpertiseList: React.FC = () => (
  <View>
    <List<IExpertiseWithYears>
      prefix={renderArrayIndex}
      items={EXPERTISE_WITH_YEARS}
      keyGetter={(exp) => exp.name}
      renderItem={renderExpertise}
    />
  </View>
);

export default ExpertiseList;
