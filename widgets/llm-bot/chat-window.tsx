'use client';

import { useChat } from '@/features/chat/client';
import { useEffect, useState } from 'react';

import { ChatHeader } from './chat-header';
import { ChatInput } from './chat-input';
import { MessageList } from './message-list';

export function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    append,
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChat();

  useEffect(() => {
    append({
      role: 'data',
      content: 'hi',
    });
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <ChatHeader isOpen={false} onToggle={() => setIsOpen(true)} />
      )}
      <div
        className={`transition-all duration-400 ease-in-out origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        {isOpen && (
          <div className="w-[380px] h-[500px] flex flex-col bg-background border rounded-lg shadow-lg">
            <ChatHeader isOpen={true} onToggle={() => setIsOpen(false)} />
            <MessageList messages={messages} isLoading={isLoading} />
            <ChatInput
              input={input}
              isLoading={isLoading}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
}
