import * as React from 'react';
import { View } from '@react-pdf/renderer';
import BaseText from '@components/BaseText';
import Block from '@components/Block';
import EmptyLine from '@components/EmptyLine';
import paragraph from '@components/Paragraph';
import Paragraph from '@components/Paragraph';
import Span from '@components/Span';
import { EXAMPLES, IExample } from '@data/examples';
import { useAvailableSpace } from '@utilities/availableSpace';
import { BULLET, repeatStringFor } from '@utilities/strings';

const INTRO_TEXT =
  'Due to the nature of agency work, the number of examples I can give here are limited, though I can go into detail upon request, and have private repositories I can walk through.';

const splitByAvailableSpace = (value: string, space: number) =>
  value.split(' ').reduce<string[]>((acc, cv) => {
    const latestIndex = acc.length - 1;
    if (latestIndex < 0 || acc[latestIndex].length + cv.length >= space) return [...acc, cv];
    acc[latestIndex] += ` ${cv}`;
    return acc;
  }, []);

const renderIntroLine = (line: string, index: number) => (
  <BaseText color="foregroundDim1" key={index}>{` * ${line}`}</BaseText>
);

const renderParagraph = (paragraph: string, index: number, array: string[]) => (
  <Paragraph lastParagraph={index === array.length - 1} key={index}>
    {paragraph}
  </Paragraph>
);

const Examples: React.FC = () => {
  const availableSpace = useAvailableSpace();

  const renderExample = React.useCallback(
    ({ name, technologies, platforms, paragraphs }: IExample, index: number, array: IExample[]) => {
      const platformsString = platforms.join(', ');
      const technologiesString = technologies.join(', ');
      const spacerLength = availableSpace - name.length - platformsString.length - 1;
      const spacer = ` ${repeatStringFor(spacerLength, BULLET)} `;

      return (
        <View key={name}>
          <Block isLastIndex={index === array.length - 1}>
            <BaseText>
              <Span color="alphaHigh">{name}</Span>
              {spacer}
              <Span color="accentAlt">{platformsString}</Span>
            </BaseText>
            <EmptyLine />
            <BaseText color="alphaMed">Notable Tech: {technologiesString}</BaseText>
            <EmptyLine />
            {paragraphs.map(renderParagraph)}
          </Block>
        </View>
      );
    },
    [availableSpace]
  );

  return (
    <View>
      <BaseText color="foregroundDim1">/**</BaseText>
      {splitByAvailableSpace(INTRO_TEXT, availableSpace - 2).map(renderIntroLine)}
      <BaseText color="foregroundDim1">*/</BaseText>
      <EmptyLine />
      {EXAMPLES.map(renderExample)}
    </View>
  );
};

export default Examples;
