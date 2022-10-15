import * as React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import moment from 'moment';
import BaseText from '@components/BaseText';
import EmptyLine from '@components/EmptyLine';
import Paragraph from '@components/Paragraph';
import Span from '@components/Span';
import { IJob } from '@data/experience';
import { useAvailableSpace } from '@utilities/availableSpace';
import { repeatStringFor } from '@utilities/strings';

interface IRecentJobProps {
  job: IJob;
}

const RecentJob: React.FC<IRecentJobProps> = ({ job }) => {
  const availableSpace = useAvailableSpace();

  // Computed Values
  const timeStringLength = 2 + (job.to ? 8 : 7) + 8;
  const spaceBetween = availableSpace - timeStringLength - job.company.length;

  // Renderers
  const renderDescriptionParagraph = React.useCallback(
    (paragraph: string, index: number) => (
      <Paragraph key={index} lastParagraph={index === job.description.length - 1}>
        {paragraph}
      </Paragraph>
    ),
    []
  );

  return (
    <View>
      <View>
        <BaseText>
          <Span color="alphaHigh">{job.title}</Span>
        </BaseText>
      </View>
      <View>
        <BaseText>
          <Span color="alphaHighMed">{job.company} </Span>
          {repeatStringFor(spaceBetween - 2, '•')}
          <Span color="border2">
            {' '}
            <Span color="alphaHighMed">{moment(job.from, 'DD/MM/YYYY').format('MMM YYYY')}</Span>
            <Span color="border2"> - </Span>
            <Span color="alphaHighMed">
              {job.to ? moment(job.to, 'DD/MM/YYYY').format('MMM YYYY') : 'Current'}
            </Span>
          </Span>
        </BaseText>
      </View>
      <View>
        <EmptyLine />
        {job.description.map(renderDescriptionParagraph)}
      </View>
    </View>
  );
};

export default RecentJob;
