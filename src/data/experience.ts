export interface IJob {
  title: string;
  company?: string;
  type: string;
  description: string[];
  from: string;
  to?: string;
}

export const EXPERIENCE: IJob[] = [
  {
    title: 'Lead Mobile Developer',
    company: 'Ascenti Health Ltd.',
    type: 'Full-Time',
    description: [
      'After joining Ascenti\'s mobile team I orchestrated a complete tech refresh on their existing mobile application, "Ascenti Reach". Broken down this consisted of two challenges; Modernising the mobile application, and modernising the server side service.',
      'For the mobile application I was required to update a dated, OOP, Javascript, React Native application, transforming the codebase into a modern, functional, Typescript, React Native application, with a reduced number of dependencies and a proper CI/CD pipeline to automate the build and deployment.',
      'For the service I had to break the monolithic server application written in Javascript, NodeJS, and Express down into many efficient micro services, written in Typescript. This means that each function is executed on demand and is infinitely horizontally scalable, rather than constantly alive and listening for requests. As it was a client requirement to use Azure, and given the lack of support for Azure in the Serverless Framework ecosystem, this included creating and maintaining a miniature framework to better realise the concept of DRY.',
      'I additionally had the opportunity to define coding standards, branch management strategies and, as lead on an, albeit small, team, took time to mentor team members and present concepts and technologies to the team and wider department.',
    ],
    from: '1/7/2021',
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'JayStack Zrt.',
    type: 'Full-Time',
    description: [
      'After becoming a senior I took on a larger role in planning projects, remotely managing teams of developers spanning multiple countries, developing and maintaining company-wide boilerplates for use in projects, learning new technologies for future projects and implementing into our existing stacks and became specialised in a few specific areas, including native development for MacOS, iOS and Android. I also started learning a few new languages such as C# and Kotlin to improve the range of platforms I could develop for. My time at JayStack at this point has given me a huge range of experience, developing for multiple specialist industries and encountering a myriad technical challenges, and has been the most valuable experience in my working career.',
    ],
    from: '1/8/2019',
    to: '1/7/2021',
  },
  {
    title: 'Full Stack Developer',
    company: 'JayStack Zrt.',
    type: 'Full-Time',
    description: [
      "I started at JayStack just a few months after my arrival in Hungary. I worked on a few different projects, in both back-end and front-end roles. During my time in the first few years with JayStack I had the opportunity to work with CI/CD, cloud infrastructure, serverless applications, load balancing, and many other technologies I didn't, then, have a wealth of experience with. During this time my attitude towards development changed substantially, where initially I prefered to create applications in monolithic frameworks like Laravel or Adonis, I had come to appreciate microservices much more, for their simplicity, speed of execution, scalability and overall cost effectiveness. This time represents the most significant improvement of my skillset of my whole career. The sheer range of different specialities within the company allowed me to explore many different areas that have always interested me. I picked up a few new languages during this time too, including Swift and Java, with Swift quickly becoming my second favourite language, after Typescript.",
      'After roughly a year and a half of working with JayStack I was recognised as a Senior and with it came a new set of responsibilities.',
    ],
    from: '1/4/2018',
    to: '1/8/2019',
  },
];
