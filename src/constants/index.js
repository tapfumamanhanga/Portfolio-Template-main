import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'IT Technician',
    company_name: 'Zimbabwe School Examination Council',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'October 2017 - Jan 2018',
  },
  {
    title: 'Web Designer',
    company_name: 'Freelance',
    icon: microverse,
    iconBg: '#333333',
    date: 'Feb 2018 - Mar 2020',
  },
  {
    title: 'Web Developer',
    company_name: 'Appointment Corporate Zimbabwe',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Mar 2020 - Oct 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Freelance',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jun 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Appointment',
    description: 'A corporate wear and PPE company website',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: '#',
    demo: 'https://appointment.co.zw/',
  },
  {
    id: 'project-2',
    name: 'Cr8iveNest',
    description:
      'Website for Cr8iveNest Entertainment, a UK based music label',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: '#',
    demo: 'https://cr8ivenest.co.uk',
  },
  {
    id: 'project-3',
    name: 'Tiles And Styles',
    description: 'This is a website for floor and wall tiles supplier.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: '#',
    demo: 'https://tilesandstyles.co.zw',
  },
  {
    id: 'project-4',
    name: 'Aurora Graphics',
    description: 'Website for a Aurora Graphics, a leading marketing agency in Harare',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: '#',
    demo: 'https://aurora.co.zw',
  },
  {
    id: 'project-5',
    name: 'JA Consultancy',
    description:
      'This is a website for an accounting consultancy firm',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: '#',
    demo: 'https://jaconsultancy.co.zw',
  },
];

export { services, technologies, experiences, projects };
