import { Card } from '@/components/Card';

const TECHNICAL_SKILLS = [
  'TypeScript',
  'Angular',
  'RxJS',
  'Webpack',
  'React',
  'Node.js',
];
const CORE_STRENGTHS = [
  'Strong architectural thinking',
  'Clean code principles advocate',
  'Code refactoring expert',
  'Team mentoring',
];

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <h3 className="font-semibold mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-2">
          {TECHNICAL_SKILLS.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
              {skill}
            </span>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="font-semibold mb-4">Core Strengths</h3>
        <ul className="list-disc list-inside space-y-2">
          {CORE_STRENGTHS.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
