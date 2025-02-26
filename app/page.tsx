import { ChatWindow } from '@/widgets/llm-bot';
import { MainContent } from '@/widgets/main-content';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <MainContent />
      </div>
      <ChatWindow></ChatWindow>
    </main>
  );
}
