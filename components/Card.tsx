interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-card text-card-foreground p-6 rounded-lg shadow ${className}`}>
      {children}
    </div>
  );
}