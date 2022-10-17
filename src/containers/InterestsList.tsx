import * as React from 'react';
import { View } from '@react-pdf/renderer';
import BaseText from '@components/BaseText';
import EmptyLine from '@components/EmptyLine';
import List, { stringEnumKeyGetter, stringEnumRenderer } from '@components/List';
import Span from '@components/Span';
import { HOBBIES, LANGUAGES, MUSIC, PETS, TECHNOLOGY } from '@data/interests';

const renderTranslation = (translated?: string) => {
  if (!translated) return null;
  return <Span color="foregroundDim1"> // {translated}</Span>;
};

const languageRenderer = ([lang, translated]: [string, string | undefined]) => (
  <>
    <Span color="accentAlt">{lang}</Span>
    {renderTranslation(translated)}
  </>
);

const languageKeyGetter = ([lang]: [string, string | undefined]) => lang;

const InterestsList: React.FC = () => (
  <View>
    <BaseText color="foregroundDim1">/* HOBBIES */</BaseText>
    <List items={HOBBIES} renderItem={stringEnumRenderer} keyGetter={stringEnumKeyGetter} />
    <EmptyLine />
    <BaseText color="foregroundDim1">/* LANGUAGES */</BaseText>
    <List items={LANGUAGES} renderItem={languageRenderer} keyGetter={languageKeyGetter} />
    <EmptyLine />
    <BaseText color="foregroundDim1">/* TECHNOLOGIES */</BaseText>
    <List items={TECHNOLOGY} renderItem={stringEnumRenderer} keyGetter={stringEnumKeyGetter} />
    <EmptyLine />
    <BaseText color="foregroundDim1">/* MUSIC */</BaseText>
    <List items={MUSIC} renderItem={stringEnumRenderer} keyGetter={stringEnumKeyGetter} />
    <EmptyLine />
    <BaseText color="foregroundDim1">/* PETS */</BaseText>
    <List items={PETS} renderItem={stringEnumRenderer} keyGetter={stringEnumKeyGetter} />
  </View>
);

export default InterestsList;
