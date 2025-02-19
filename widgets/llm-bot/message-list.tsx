'use client';

import { MessageBubble } from './message-bubble';
import { Message } from './types';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  return (
    <div
      className="flex-1 overflow-y-auto p-4 space-y-4"
      ref={(el) => {
        if (el) {
          el.scrollTop = el.scrollHeight;
        }
      }}>
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-muted rounded-lg px-4 py-2">Typing...</div>
        </div>
      )}
    </div>
  );
}
