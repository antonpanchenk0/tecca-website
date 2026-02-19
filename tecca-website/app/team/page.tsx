import type { Metadata } from 'next';
import { HeroHeader } from '@/components/header';
import Team from '@/components/team';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the team behind Tecca. Learn about the people building the best feedback management platform for product teams.',
  openGraph: {
    title: 'Our Team | Tecca',
    description:
      'Meet the team behind Tecca. Learn about the people building the best feedback management platform for product teams.',
  },
  alternates: {
    canonical: '/team',
  },
};

export default function TeamPage() {
  return (
    <>
      <HeroHeader />
      <main className="pt-24">
        <Team />
      </main>
    </>
  );
}
