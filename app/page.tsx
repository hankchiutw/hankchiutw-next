import { Education } from '@/components/Education';
import { ExperienceCard } from '@/components/ExperienceCard';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Skills } from '@/components/Skills';

const EXPERIENCE = [
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

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <Hero />

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
      </div>
    </main>
  );
}
