interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`mb-16 ${className}`}>
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}