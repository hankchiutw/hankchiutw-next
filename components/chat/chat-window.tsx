'use client';

import { useChat } from '@/hooks/use-chat';
import { useState } from 'react';

import { ChatHeader } from './chat-header';
import { ChatInput } from './chat-input';
import { MessageList } from './message-list';

export function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, input, setInput, sendMessage } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    await sendMessage(input);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <ChatHeader isOpen={false} onToggle={() => setIsOpen(true)} />
      ) : (
        <div className="w-[380px] h-[500px] flex flex-col bg-background border rounded-lg shadow-lg">
          <ChatHeader isOpen={true} onToggle={() => setIsOpen(false)} />
          <MessageList messages={messages} isLoading={isLoading} />
          <ChatInput
            input={input}
            isLoading={isLoading}
            onInputChange={setInput}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
