import { createChatAction } from '@/features/chat';

export async function POST(req: Request) {
  return createChatAction(req);
}
