export interface IProject {
  name: string;
  position: string;
  platforms: string[];
  technologies: string[];
  paragraphs: string[];
}

export const EXAMPLES: IProject[] = [
  {
    name: 'Ascenti Reach',
    position: 'Lead Mobile Developer',
    platforms: ['Android', 'iOS'],
    technologies: ['React Native', 'Reanimated', 'Redux'],
    paragraphs: [
      // 'Although already an existing app when I first started on it, this app was completely reimplemented from the ground up due to poor coding practices, dated libraries and OOP architecture.',
      'This application is a medium through which patients can receive in home physiotherapy care. Users can perform guided exercises and talk live with their assigned physiotherapist.',
      'The application is served by a microservice architecture backend, based on AWS Lambda and Azure Functions.',
      'Ascenti Reach is currently available on the UK App and Play stores.',
    ],
  },
  {
    name: 'Mintago',
    position: 'Agency Senior (JayStack)',
    platforms: ['Android', 'iOS'],
    technologies: ['React Native', 'Reanimated', 'Redux'],
    paragraphs: [
      // 'Although already an existing app when I first started on it, this app was completely reimplemented from the ground up due to poor coding practices, dated libraries and OOP architecture.',
      'This application teams up with employers to provide a financial well-being solution for their employees.',
      'The application is served by a microservice architecture backend, based on AWS Lambda.',
      'Mintago is currently available on the UK App and Play stores.',
    ],
  },
];
