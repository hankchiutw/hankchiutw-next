import { getMyInfo } from '@/entities';

import { ContactButton } from './ContactButton';

export async function Hero() {
  const { myInfo } = await getMyInfo();
  return (
    <div className="mb-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Hank Chiu</h1>
      <h2 className="text-2xl text-muted-foreground mb-6">
        Web Front-End Expert
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {myInfo.contacts.map(({ icon, text, href }) => (
          <ContactButton key={text} icon={icon} href={href}>
            {text}
          </ContactButton>
        ))}
      </div>
      <p className="max-w-2xl mx-auto text-muted-foreground">{myInfo.about}</p>
    </div>
  );
}
