import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alain Ritchie | Problem Solver', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my online resume.',
};

// HERO DATA
export const heroData = {
  title: 'Hello. My name is',
  name: 'Alain Ritchie.',
  subtitle: "I'm an experienced problem solver; specialising in realistic digital transformation.",
  cta: 'Tell me more',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpg',
  paragraphOne:
    'I am an entrepreneurially motivated individual with more than 15 years of information technology, software, business and data development experience, specialising in the generation of commercial value, through the design and implementation of bespoke solutions, and optimising business efficiency.',
  paragraphTwo:
    'With great exeprience providing a service akin to that of a CIO in an SME environment, there is no doubt that I am a hands-on individual.',
  paragraphThree:
    'I am tenacious and dedicated in character, with history of delivering innovative and successful solutions to problems across corporate, SME and lean start-up environments.',
  paragraphFour:
    'My ability and confidence in communicating complex subjects with a relevent level of simplicity means I am at home working with people at all levels of experience and knowledge.',
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

// EXPERIENCES DATA
export const experiencesData = [
  {
    id: nanoid(),
    img: 'data-vis.jpg',
    company: 'Matrix APA',
    title: 'Head of Development, Head of Business Intelligence & Technology',
    duration: 'Feb 2018 - Present',
    role:
      'Managing a superb team of internal and external people, to create an amazing Technology ecosystem, and first class Business Intelligence, to support and accelerate a well-informed and purpose-led business.',
    roleExpansion:
      'Building and implementing a digital transformation strategy that drives business process efficiency, productivity and profitability through the identification of opportunity, solutions and effective methods of delivery',
    about:
      'Matrix create and deliver amazing brands and products in beauty and lifestyle and are a certified B-Corp.',
    url: 'https://www.thisismatrix.com',
  },
  {
    id: nanoid(),
    img: 'code.jpg',
    company: 'Intuita Consulting',
    title: 'Senior Consultant',
    duration: 'Jan 2014 - Feb 2018',
    role:
      'Primarily focused on the development of cross-platform solutions to make data sets of varying sizes (Big Data through to small holdings) available for business improvement and understanding.',
    about:
      'A boutique, full service data consultancy, providing quality driven data leadership, implementation and support.',
    url: 'http://www.intuitaconsulting.com'
  },
  {
    id: nanoid(),
    img: 'motivo-1.png',
    company: 'Motivo',
    title: 'Co-Founder',
    duration: 'Sept 2012 - Oct 2019',
    role: 'Directorship of a self-funded business start-up.',
    about:
      'Motivo developed and launched a uniquely motivational solution to the confusing and mundane task of indoor cycle training with an automated digital coaching app.',

  },
  {
    id: nanoid(),
    img: 'phone.jpg',
    company: 'Vodafone UK',
    title: 'Outbound Capability Specialist, CRM Capability Manager',
    duration: 'Oct 2007 - Jan 2014',
    role:
      'Leading a team of technical specialists to support, develop and deliver customer-facing business solutions. Residing within a CRM business function, this role acts as the technical-business interface, ensuring current and future technical CRM requirements are delivered.',
    about:
      'Vodafone is a leader in technology communications through mobile, fixed, broadband and TV.',
    url: 'https://www.vodafone.com'
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
