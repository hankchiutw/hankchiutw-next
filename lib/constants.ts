import { MailIcon, MapPinIcon, LinkedinIcon } from 'lucide-react';

export const CONTACT_INFO = [
  {
    icon: MailIcon,
    text: 'hankchiu.tw@gmail.com',
    href: 'mailto:hankchiu.tw@gmail.com'
  },
  {
    icon: MapPinIcon,
    text: 'Taoyuan, Taiwan',
    href: undefined
  },
  {
    icon: LinkedinIcon,
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hankchiu'
  }
] as const;