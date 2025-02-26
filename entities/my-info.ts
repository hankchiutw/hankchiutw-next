import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from 'lucide-react';
import SheetParser from 'public-google-sheets-parser';

const SHEET_ID = process.env.MY_INFO_GOOGLE_SHEET_ID;
const parser = new SheetParser(SHEET_ID);

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

async function getFromSheet(sheetName: string) {
  parser.setOption({ sheetName });
  const data = await parser.parse();
  return data;
}

export async function getMyInfo() {
  const [{ about }] = await getFromSheet('basic');
  const projects = await getFromSheet('projects');

  const myInfo = {
    about,
    contacts,
    experiences,
    projects,
  };
  return {
    myInfo,
  };
}
