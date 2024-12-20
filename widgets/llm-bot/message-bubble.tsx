'use client';

import { cn } from '@/lib/utils';

import { Message } from './types';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div
      className={cn(
        'flex',
        message.role === 'user' ? 'justify-end' : 'justify-start',
      )}>
      <div
        className={cn(
          'rounded-lg px-4 py-2 max-w-[80%]',
          message.role === 'user'
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted',
        )}>
        {message.content}
      </div>
    </div>
  );
}
