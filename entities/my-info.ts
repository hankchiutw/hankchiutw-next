import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from 'lucide-react';

const contacts = [
  {
    icon: MailIcon,
    text: 'hankchiu.tw@gmail.com',
    href: 'mailto:hankchiu.tw@gmail.com',
  },
  {
    icon: LinkedinIcon,
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hankchiutw/',
  },
  {
    icon: GithubIcon,
    text: 'GitHub',
    href: 'https://github.com/hankchiutw',
  },
  {
    icon: MapPinIcon,
    text: 'Taoyuan, Taiwan',
    href: undefined,
  },
];
const about =
  'A dedicated software engineer specializing in web front-end development, with valuable experience in back-end technologies. Committed to delivering high-quality solutions that align with business goals and enhance user experiences.';
const experiences = [
  {
    title: 'Senior Front-end Engineer',
    company: 'GoFreight',
    period: 'October 2021 - Present',
    achievements: [
      'First dedicated web front-end engineer to reshape the legacy codebase',
      'Enabled transition from multi-page to SPA architecture',
      'Designed internal library to bootstrap AngularJS and Angular',
      'Scaffolded new project using Feature-Sliced Design methodology',
    ],
  },
  {
    title: 'Senior Front-end Engineer',
    company: 'aetherAI',
    period: 'July 2019 - October 2021',
    achievements: [
      'Improved Angular project performance, reducing load time from 4s to 2s',
      'Developed reusable Angular modules for cross-product usage',
      'Initiated supporting product in Electron for desktop platforms',
    ],
  },
];
export const useMyInfo = () => {
  const myInfo = {
    about,
    contacts,
    experiences,
  };
  return {
    myInfo,
  };
};
