import { Education } from '@/components/Education';
import { ExperienceCard } from '@/components/ExperienceCard';
import { Section } from '@/components/Section';
import { Skills } from '@/components/Skills';
import { useMyInfo } from '@/entities';

export function MainContent() {
  const { myInfo } = useMyInfo();
  return (
    <>
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
