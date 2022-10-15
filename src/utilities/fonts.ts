import { Font } from '@react-pdf/renderer';
import * as path from 'path';

const loadFont = (fileName: string): string => path.join(__dirname, '../fonts', fileName);

const FIRA_CODE_BOLD = loadFont('FiraCode-Bold.ttf');
const FIRA_CODE_LIGHT = loadFont('FiraCode-Light.ttf');
const FIRA_CODE_MEDIUM = loadFont('FiraCode-Medium.ttf');
const FIRA_CODE_REGULAR = loadFont('FiraCode-Regular.ttf');
const FIRA_CODE_SEMI_BOLD = loadFont('FiraCode-SemiBold.ttf');

Font.register({
  family: 'FiraCode',
  fontStyle: 'normal',
  fonts: [
    { src: FIRA_CODE_LIGHT, fontWeight: 300 },
    { src: FIRA_CODE_REGULAR, fontWeight: 400 },
    { src: FIRA_CODE_MEDIUM, fontWeight: 500 },
    { src: FIRA_CODE_SEMI_BOLD, fontWeight: 600 },
    { src: FIRA_CODE_BOLD, fontWeight: 700 },
  ],
});

export const loadFonts = () =>
  Promise.all([
    Font.load({ fontFamily: 'FiraCode', fontWeight: 300 }),
    Font.load({ fontFamily: 'FiraCode', fontWeight: 400 }),
    Font.load({ fontFamily: 'FiraCode', fontWeight: 500 }),
    Font.load({ fontFamily: 'FiraCode', fontWeight: 600 }),
    Font.load({ fontFamily: 'FiraCode', fontWeight: 700 }),
  ]);
