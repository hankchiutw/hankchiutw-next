import { createChatAction } from '@/features/chat';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return createChatAction(req);
}
