import { Font } from '@react-pdf/renderer';
import * as path from 'path';

const loadFont = (fileName: string): string => path.join(__dirname, '../fonts', fileName);

const FIRA_CODE_BOLD = loadFont('FiraCode-Bold.ttf');
const FIRA_CODE_LIGHT = loadFont('FiraCode-Light.ttf');
const FIRA_CODE_MEDIUM = loadFont('FiraCode-Medium.ttf');
const FIRA_CODE_REGULAR = loadFont('FiraCode-Regular.ttf');
const FIRA_CODE_SEMI_BOLD = loadFont('FiraCode-SemiBold.ttf');
const FIRA_MONO_BOLD = loadFont('FiraMono-Bold.ttf');
const FIRA_MONO_MEDIUM = loadFont('FiraMono-Medium.ttf');
const FIRA_MONO_REGULAR = loadFont('FiraMono-Regular.ttf');
const JETBRAINS_MONO_BOLD = loadFont('JetBrainsMonoNL-Bold.ttf');
const JETBRAINS_MONO_BOLD_ITALIC = loadFont('JetBrainsMonoNL-BoldItalic.ttf');
const JETBRAINS_MONO_EXTRA_BOLD = loadFont('JetBrainsMonoNL-ExtraBold.ttf');
const JETBRAINS_MONO_EXTRA_BOLD_ITALIC = loadFont('JetBrainsMonoNL-ExtraBoldItalic.ttf');
const JETBRAINS_MONO_EXTRA_LIGHT = loadFont('JetBrainsMonoNL-ExtraLight.ttf');
const JETBRAINS_MONO_EXTRA_LIGHT_ITALIC = loadFont('JetBrainsMonoNL-ExtraLightItalic.ttf');
const JETBRAINS_MONO_ITALIC = loadFont('JetBrainsMonoNL-Italic.ttf');
const JETBRAINS_MONO_LIGHT = loadFont('JetBrainsMonoNL-Light.ttf');
const JETBRAINS_MONO_LIGHT_ITALIC = loadFont('JetBrainsMonoNL-LightItalic.ttf');
const JETBRAINS_MONO_MEDIUM = loadFont('JetBrainsMonoNL-Medium.ttf');
const JETBRAINS_MONO_MEDIUM_ITALIC = loadFont('JetBrainsMonoNL-MediumItalic.ttf');
const JETBRAINS_MONO_REGULAR = loadFont('JetBrainsMonoNL-Regular.ttf');
const JETBRAINS_MONO_SEMI_BOLD = loadFont('JetBrainsMonoNL-SemiBold.ttf');
const JETBRAINS_MONO_SEMI_BOLD_ITALIC = loadFont('JetBrainsMonoNL-SemiBoldItalic.ttf');
const JETBRAINS_MONO_THIN = loadFont('JetBrainsMonoNL-Thin.ttf');
const JETBRAINS_MONO_THIN_ITALIC = loadFont('JetBrainsMonoNL-ThinItalic.ttf');

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

Font.register({
  family: 'FiraMono',
  fontStyle: 'normal',
  fonts: [
    { src: FIRA_MONO_REGULAR, fontWeight: 400 },
    { src: FIRA_MONO_MEDIUM, fontWeight: 500 },
    { src: FIRA_MONO_BOLD, fontWeight: 700 },
  ],
});

Font.register({
  family: 'JetBrainsMono',
  fonts: [
    { src: JETBRAINS_MONO_BOLD, fontWeight: 700, fontStyle: 'normal' },
    { src: JETBRAINS_MONO_BOLD_ITALIC, fontWeight: 700, fontStyle: 'italic' },
    { src: JETBRAINS_MONO_EXTRA_BOLD, fontWeight: 800, fontStyle: 'normal' },
    { src: JETBRAINS_MONO_EXTRA_BOLD_ITALIC, fontWeight: 800, fontStyle: 'italic' },
    { src: JETBRAINS_MONO_EXTRA_LIGHT, fontWeight: 200, fontStyle: 'normal' },
    { src: JETBRAINS_MONO_EXTRA_LIGHT_ITALIC, fontWeight: 200, fontStyle: 'italic' },
    { src: JETBRAINS_MONO_ITALIC, fontWeight: 400, fontStyle: 'italic' },
    { src: JETBRAINS_MONO_LIGHT, fontWeight: 300, fontStyle: 'normal' },
    { src: JETBRAINS_MONO_LIGHT_ITALIC, fontWeight: 300, fontStyle: 'italic' },
    { src: JETBRAINS_MONO_MEDIUM, fontWeight: 500, fontStyle: 'normal' },
    { src: JETBRAINS_MONO_MEDIUM_ITALIC, fontWeight: 500, fontStyle: 'italic' },
    { src: JETBRAINS_MONO_REGULAR, fontWeight: 400, fontStyle: 'normal' },
    { src: JETBRAINS_MONO_SEMI_BOLD, fontWeight: 600, fontStyle: 'normal' },
    { src: JETBRAINS_MONO_SEMI_BOLD_ITALIC, fontWeight: 600, fontStyle: 'italic' },
    { src: JETBRAINS_MONO_THIN, fontWeight: 100, fontStyle: 'normal' },
    { src: JETBRAINS_MONO_THIN_ITALIC, fontWeight: 100, fontStyle: 'italic' },
  ],
});

export const loadFonts = () =>
  Promise.all([
    Font.load({ fontFamily: 'FiraCode', fontWeight: 300 }),
    Font.load({ fontFamily: 'FiraCode', fontWeight: 400 }),
    Font.load({ fontFamily: 'FiraCode', fontWeight: 500 }),
    Font.load({ fontFamily: 'FiraCode', fontWeight: 600 }),
    Font.load({ fontFamily: 'FiraCode', fontWeight: 700 }),
    Font.load({ fontFamily: 'FiraMono', fontWeight: 400 }),
    Font.load({ fontFamily: 'FiraMono', fontWeight: 500 }),
    Font.load({ fontFamily: 'FiraMono', fontWeight: 700 }),
  ]);
