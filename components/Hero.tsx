import { CONTACT_INFO } from '@/lib/constants';

import { ContactButton } from './ContactButton';

export function Hero() {
  return (
    <div className="mb-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Hank Chiu</h1>
      <h2 className="text-2xl text-muted-foreground mb-6">
        Web Front-End Expert
      </h2>
      <div className="flex justify-center gap-4 mb-6">
        {CONTACT_INFO.map(({ icon, text, href }) => (
          <ContactButton key={text} icon={icon} href={href}>
            {text}
          </ContactButton>
        ))}
      </div>
      <p className="max-w-2xl mx-auto text-muted-foreground">
        A dedicated software engineer specializing in web front-end development,
        with valuable experience in back-end technologies. Committed to
        delivering high-quality solutions that align with business goals and
        enhance user experiences.
      </p>
    </div>
  );
}
