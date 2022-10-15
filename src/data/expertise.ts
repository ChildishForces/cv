import moment from 'moment';
import { interpolateGradient } from '@utilities/color';
import { interpolateNumbers, IRange } from '@utilities/math';
import { COLORS } from '@utilities/theme';

export interface IExpertise {
  logo: string;
  name: string;
  type: 'language' | 'framework' | 'database' | 'library' | 'platform' | 'testing' | 'cicd';
  since: string;
}

export interface IExpertiseWithYears extends IExpertise {
  years: number;
}

const EXPERTISE: IExpertise[] = [
  { logo: 'typescript.svg', name: 'Typescript', type: 'language', since: '12/10/2016' },
  { logo: 'javascript.svg', name: 'Javascript', type: 'language', since: '12/10/2010' },
  { logo: 'php.svg', name: 'PHP', type: 'language', since: '12/10/2011' },
  { logo: 'swift.svg', name: 'Swift', type: 'language', since: '12/10/2017' },
  { logo: 'java.svg', name: 'Java', type: 'language', since: '12/10/2018' },
  { logo: 'glsl.svg', name: 'GLSL', type: 'language', since: '12/10/2021' },
  // { logo: 'kotlin.svg', name: 'Kotlin', type: 'language', since: '12/10/2021' },
  // { logo: 'c-sharp.svg', name: 'C#', type: 'language', since: '12/10/2020' },
  // { logo: 'python.svg', name: 'Python', type: 'language', since: '12/10/2020' },
  { logo: 'swiftui.svg', name: 'Swift UI', type: 'framework', since: '12/10/2020' },
  { logo: 'laravel.svg', name: 'Laravel', type: 'framework', since: '12/10/2014' },
  { logo: 'express.svg', name: 'Express', type: 'framework', since: '12/10/2014' },
  { logo: 'adonis.svg', name: 'Adonis', type: 'framework', since: '12/10/2018' },
  { logo: 'react.svg', name: 'React', type: 'framework', since: '12/10/2016' },
  { logo: 'nextjs.svg', name: 'NextJS', type: 'framework', since: '12/10/2017' },
  { logo: 'vue.svg', name: 'VueJS', type: 'framework', since: '12/10/2015' },
  { logo: 'nuxt.svg', name: 'NuxtJS', type: 'framework', since: '12/10/2016' },
  { logo: 'serverless.svg', name: 'Serverless', type: 'framework', since: '12/10/2018' },
  { logo: 'react.svg', name: 'React Native', type: 'framework', since: '12/10/2016' },
  { logo: 'mysql.svg', name: 'MySQL', type: 'database', since: '12/10/2017' },
  { logo: 'postgres.svg', name: 'Postgres', type: 'database', since: '12/10/2015' },
  { logo: 'mongodb.svg', name: 'MongoDB', type: 'database', since: '12/10/2016' },
  { logo: 'redis.svg', name: 'Redis', type: 'database', since: '12/10/2018' },
  { logo: 'dynamodb.svg', name: 'DynamoDB', type: 'database', since: '12/10/2018' },
  { logo: 'reanimated.svg', name: 'Reanimated', type: 'library', since: '12/10/2019' },
  { logo: 'redux.svg', name: 'Redux', type: 'library', since: '12/10/2016' },
  { logo: 'webpack.svg', name: 'Webpack', type: 'library', since: '12/10/2018' },
  { logo: 'd3.svg', name: 'D3.js', type: 'library', since: '12/10/2013' },
  { logo: 'socket.svg', name: 'Socket.io', type: 'library', since: '12/10/2014' },
  { logo: 'knexjs.svg', name: 'Knex.js', type: 'library', since: '12/10/2017' },
  { logo: 'framermotion.svg', name: 'Framer Motion', type: 'library', since: '12/10/2018' },
  { logo: 'jss.svg', name: 'JSS', type: 'library', since: '12/10/2018' },
  { logo: 'jest.svg', name: 'Jest', type: 'testing', since: '12/10/2018' },
  { logo: 'enzyme.svg', name: 'Enzyme', type: 'testing', since: '12/10/2018' },
  { logo: 'phpunit.svg', name: 'PHPUnit', type: 'testing', since: '12/10/2015' },
  { logo: 'aws.svg', name: 'AWS', type: 'platform', since: '12/10/2017' },
  { logo: 'gcp.svg', name: 'Google Cloud', type: 'platform', since: '12/10/2019' },
  { logo: 'azure.svg', name: 'Azure', type: 'platform', since: '12/10/2019' },
  { logo: 'ios.svg', name: 'iOS', type: 'platform', since: '12/10/2017' },
  { logo: 'android.svg', name: 'Android', type: 'platform', since: '12/10/2018' },
  { logo: 'macos.svg', name: 'macOS', type: 'platform', since: '12/10/2017' },
  { logo: 'windows.svg', name: 'Windows', type: 'platform', since: '12/10/2018' },
  { logo: 'electron.svg', name: 'Electron', type: 'platform', since: '12/10/2016' },
  { logo: 'powerbi.svg', name: 'PowerBI', type: 'platform', since: '12/10/2018' },
  { logo: 'teamcity.svg', name: 'TeamCity', type: 'cicd', since: '12/10/2016' },
  { logo: 'codepipeline.svg', name: 'CodePipeline', type: 'cicd', since: '12/10/2017' },
  { logo: 'actions.svg', name: 'Github Actions', type: 'cicd', since: '12/10/2018' },
];

const addYearsTransformer = (exp: IExpertise) => ({
  ...exp,
  years: moment().diff(moment(exp.since, 'DD/MM/YYYY'), 'years'),
});

export const [EXPERTISE_WITH_YEARS, EXPERTISE_RANGE] = EXPERTISE.reduce<
  [IExpertiseWithYears[], IRange]
>((acc, exp) => {
  const withYears = addYearsTransformer(exp);
  if (!acc) return [[withYears], { lowest: withYears.years, highest: withYears.years }];
  const [expertise, range] = acc;
  expertise.push(withYears);
  if (withYears.years < range.lowest) return [expertise, { ...range, lowest: withYears.years }];
  if (withYears.years > range.highest) return [expertise, { ...range, highest: withYears.years }];
  return [expertise, range];
}, null);

export const YEAR_GRADIENT = [
  COLORS.accentColor3,
  COLORS.accentColor6,
  COLORS.accentColor5,
  COLORS.accentColor2,
];

export const interpolateYearColors = (years: number) => {
  const value = interpolateNumbers(EXPERTISE_RANGE, years);
  return interpolateGradient(YEAR_GRADIENT, value);
};
