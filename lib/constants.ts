import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from 'lucide-react';

export const CONTACT_INFO = [
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
] as const;
