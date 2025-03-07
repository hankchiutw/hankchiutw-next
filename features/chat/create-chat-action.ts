import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';

import { getSystemPrompt } from './prompts';

const model = groq(process.env.GROQ_MODEL as string);

export async function createChatAction(req: NextRequest) {
  const { messages } = await req.json();
  const systemPrompt = await getSystemPrompt();

  const userId = req.ip || req.headers.get('x-forwarded-for') || 'Unknown';

  const result = streamText({
    model,
    messages,
    system: systemPrompt,
    experimental_telemetry: {
      isEnabled: true,
      metadata: {
        userId,
      },
    },
  });

  return result.toDataStreamResponse();
}
