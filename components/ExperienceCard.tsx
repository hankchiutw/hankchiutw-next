import { Card } from './Card';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export function ExperienceCard({ title, company, period, achievements }: ExperienceCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{company} · {period}</p>
      <ul className="list-disc list-inside mt-4 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </Card>
  );
}