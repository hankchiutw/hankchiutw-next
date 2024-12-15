"use client";

import { ChatState, Message } from "@/types/chat";
import { useCallback, useState } from "react";

export function useChat() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
  });
  const [input, setInput] = useState("");

  const sendMessage = useCallback(async (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
      isLoading: true,
    }));

    // Simulate AI response - Replace with your actual LLM integration
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "This is a simulated response. Replace this with your actual LLM integration.",
        role: "assistant",
        timestamp: new Date(),
      };

      setState((prev) => ({
        messages: [...prev.messages, aiMessage],
        isLoading: false,
      }));
    }, 1000);
  }, []);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    input,
    setInput,
    sendMessage,
  };
}
