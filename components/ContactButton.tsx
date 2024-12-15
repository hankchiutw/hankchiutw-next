import { LucideIcon } from 'lucide-react';

interface ContactButtonProps {
  icon: LucideIcon;
  children: React.ReactNode;
  href?: string;
}

export function ContactButton({ icon: Icon, children, href }: ContactButtonProps) {
  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Component
      className="inline-flex items-center px-4 py-2 text-sm border rounded-md hover:bg-muted transition-colors"
      {...props}
    >
      <Icon className="mr-2 h-4 w-4" />
      {children}
    </Component>
  );
}