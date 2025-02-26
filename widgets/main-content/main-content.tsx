import { getMyInfo } from '@/entities';

import { Education } from './Education';
import { ExperienceCard } from './ExperienceCard';
import { Hero } from './Hero';
import { Section } from './Section';
import { Skills } from './Skills';

export async function MainContent() {
  const { myInfo } = await getMyInfo();
  return (
    <>
      <Hero />
      <Section title="Professional Experience">
        <div className="space-y-6">
          {myInfo.experiences.map((job) => (
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
