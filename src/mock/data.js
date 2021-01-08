import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alain Ritchie | Problem Solver', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello. My name is',
  name: 'Alain Ritchie',
  subtitle: "I'm an experienced problem solver",
  cta: 'Tell me more',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpg',
  paragraphOne:
    'I am an entrepreneurially motivated individual with more than 15 years of technology, software, business and data development experience, specialising in the generation of commercial value, through the design and implementation of bespoke solutions, and optimising business efficiency.',
  paragraphTwo:
    'I am tenacious and dedicated in character, with history of delivering innovative and successful solutions to problems in corporate, SME and lean start-up environments.',
  paragraphThree: 'The ability to communicate complex subjects with a relevent level of simplicity means I am at home working with people at all levels of experience and knowledge.',
  resume: 'https://www.linkedin.com/in/alainritchie/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to see if we can work together? I do.',
  btn: 'Get in Touch',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alainritchie/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MatrixAlain',
    },
  ],
};
