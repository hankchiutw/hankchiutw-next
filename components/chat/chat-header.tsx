'use client';

import { MessageCircle, Minimize2 } from 'lucide-react';

interface ChatHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function ChatHeader({ isOpen, onToggle }: ChatHeaderProps) {
  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="h-12 w-12 rounded-full shadow-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90">
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <h3 className="font-semibold">Chat with me!</h3>
      <button onClick={onToggle} className="p-2 hover:bg-muted rounded-md">
        <Minimize2 className="h-4 w-4" />
      </button>
    </div>
  );
}
