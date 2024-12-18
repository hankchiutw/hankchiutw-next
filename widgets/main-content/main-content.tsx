import { Education } from '@/components/Education';
import { ExperienceCard } from '@/components/ExperienceCard';
import { Section } from '@/components/Section';
import { Skills } from '@/components/Skills';

import { EXPERIENCE } from './consts';

export function MainContent() {
  return (
    <>
      <Section title="Professional Experience">
        <div className="space-y-6">
          {EXPERIENCE.map((job) => (
            <ExperienceCard key={job.company} {...job} />
          ))}
        </div>
      </Section>

      <Section title="Skills & Expertise">
        <Skills />
      </Section>

      <Section title="Education">
        <Education />
      </Section>
    </>
  );
}
