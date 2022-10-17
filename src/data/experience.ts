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
      'After joining Ascenti\'s mobile team I orchestrated a complete tech refresh on their existing mobile application, "Ascenti Reach". Broken down this consisted of two challenges; modernising the mobile application, and modernising the server side service.',
      'For the mobile application I was required to update a dated, OOP, Javascript, React Native application, transforming the codebase into a modern, functional, Typescript, React Native application, with a reduced number of dependencies and a proper CI/CD pipeline to automate the build and deployment.',
      'For the service I had to break the monolithic server application written in Javascript, NodeJS, and Express down into many efficient micro services, written in Typescript. This means that each function is executed on demand and is infinitely horizontally scalable, rather than constantly alive and listening for requests. As it was a client requirement to use Azure, and given the lack of support for Azure in the Serverless Framework ecosystem, this included creating and maintaining a miniature framework to better realise the concept of DRY.',
      'I additionally had the opportunity to define coding standards, branch management strategies and, as lead on a team, took time to mentor team members and present concepts and technologies to the team and wider department.',
    ],
    from: '1/6/2021',
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'JayStack Zrt.',
    type: 'Full-Time',
    description: [
      'After becoming a senior I took on a larger role in planning projects, remotely managing teams of developers spanning multiple countries, developing and maintaining company-wide boilerplates for use in projects, learning new technologies for future projects and implementing into our existing stacks and became specialised in a few specific areas, including native development for MacOS, iOS and Android. I also started learning a few new languages such as C# and Kotlin to improve the range of platforms I could develop for. My time at JayStack at this point has given me a huge range of experience, developing for multiple specialist industries and encountering myriad technical challenges, and has been the most valuable experience in my working career.',
    ],
    from: '1/8/2019',
    to: '1/6/2021',
  },
  {
    title: 'Full Stack Developer',
    company: 'JayStack Zrt.',
    type: 'Full-Time',
    description: [
      "I started at JayStack just a few months after my arrival in Hungary. I worked on a few different projects, in both back-end and front-end roles. During my time in the first few years with JayStack I had the opportunity to work with CI/CD, cloud infrastructure, serverless applications, load balancing, and many other technologies I didn't, then, have a wealth of experience with. During this time my attitude towards development changed substantially, where initially I preferred to create applications in monolithic frameworks like Laravel or Adonis, I came to appreciate microservices much more for their simplicity, speed of execution, scalability and overall cost effectiveness. This time represents the most significant improvement of my skillset of my whole career. The sheer range of different specialities within the company allowed me to explore many different areas that have always interested me. I picked up a few new languages during this time too, including Swift and Java, with Swift quickly becoming my second favourite language, after Typescript.",
      'After roughly a year and a half of working with JayStack I was recognised as a Senior and with it came a new set of responsibilities.',
    ],
    from: '1/4/2018',
    to: '1/8/2019',
  },
  {
    title: 'Development Tutor',
    type: 'Part-Time',
    description: [
      'At this point my wife and I decided to move to Hungary for a few years, so that she could be closer to family.',
      'When I first arrived in Hungary, whilst looking for a job I was referred to a family through a friend in their employ to teach their eldest to program. When I first arrived the student was familiar with many concepts in programming after having used scratch with Minecraft for some months. I then taught him how to apply that logic to modern Javascript. The student was very bright and we made some excellent progress in the short time we spent together but unfortunately due to a family emergency we had to stop and at the time they were ready to resume I was already employed by JayStack.',
    ],
    from: '1/1/2018',
    to: '1/2/2018',
  },
  {
    title: 'Various Personal Projects',
    type: 'Part-Time',
    description: [
      'After I had made the decision to move to Hungary and my employer was bought by another company in Canada with an extensive SEO department I left to focus more on development. I spent the period between my previous employment until I left on personal projects, small contracts and learning new technologies and practices.',
      'During this time I worked on a variety of projects, mostly with Laravel, Express, Socket.io, Vue & React.',
    ],
    from: '1/03/2017',
    to: '1/1/2018',
  },
  {
    title: 'Technical SEO Executive',
    company: 'Ambergeen Internet Marketing',
    type: 'Full-Time',
    description: [
      'At Ambergreen I primarily worked on existing sites, making adjustments to improve their organic marketing value. This involved doing research based on search volume, planning content silos, implementing features to the site to improve website ranking such as breadcrumbs, JSON-LD schema, correct usage of tags, etc., improving the performance of websites so that they would load as quickly as possible (as that has a major impact on page ranking), implementing analytics platforms, defining site journeys, implementing A/B testing to improve conversion rate and efficacy of paid advertising.',
      'Whilst at Ambergreen I also developed a suite of tools in Laravel to improve productivity in my department. It served a range of functions, using various Google services, reducing a particularly monotonous task from a full day to half an hour. Whilst developing this suite of tools I realised that I wanted to work exclusively on development, rather than marketing.',
    ],
    from: '1/1/2016',
    to: '1/03/2017',
  },
  {
    title: 'Senior Web Developer',
    company: 'PageNorth',
    type: 'Full-Time',
    description: [
      'As my first commercial role in development I started as a junior in a web development company in Glenrothes, Scotland. It was a small team and I had the opportunity to become the senior developer there within a year. This involved planning projects, developing wordpress websites using PHP, SCSS and Javascript and assessing and improving SEO. I worked on a wide range of projects including new sites, optimisation of existing sites, developing utilities, plugins, themes and managing UNIX based server environments.',
      'After about 2 years I was headhunted by a former manager to work in a role focused more on SEO than design/development.',
    ],
    from: '1/3/2014',
    to: '1/12/2015',
  },
];
