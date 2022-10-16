import * as React from 'react';
import { View } from '@react-pdf/renderer';
import BaseText from '@components/BaseText';
import EmptyLine from '@components/EmptyLine';
import List, { stringEnumKeyGetter, stringEnumRenderer } from '@components/List';
import { HOBBIES, LANGUAGES, MUSIC, PETS, TECHNOLOGY } from '@data/interests';

const InterestsList: React.FC = () => (
  <View>
    <BaseText color="foregroundDim1">/* HOBBIES */</BaseText>
    <List items={HOBBIES} renderItem={stringEnumRenderer} keyGetter={stringEnumKeyGetter} />
    <EmptyLine />
    <BaseText color="foregroundDim1">/* LANGUAGES */</BaseText>
    <List items={LANGUAGES} renderItem={stringEnumRenderer} keyGetter={stringEnumKeyGetter} />
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
