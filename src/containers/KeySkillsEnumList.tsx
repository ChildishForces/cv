import * as React from 'react';
import { View } from '@react-pdf/renderer';
import List, { stringEnumKeyGetter, stringEnumRenderer } from '@components/List';
import { KEY_SKILLS } from '@data/keySkills';

const KeySkillsEnumList: React.FC = () => (
  <View>
    <List items={KEY_SKILLS} renderItem={stringEnumRenderer} keyGetter={stringEnumKeyGetter} />
  </View>
);

export default KeySkillsEnumList;
