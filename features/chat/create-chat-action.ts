import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

import { getSystemPrompt } from './prompts';

const model = groq(process.env.GROQ_MODEL as string);

export async function createChatAction(req: Request) {
  const { messages } = await req.json();
  const systemPrompt = await getSystemPrompt();

  const result = streamText({
    model,
    messages,
    system: systemPrompt,
  });

  return result.toDataStreamResponse();
}
