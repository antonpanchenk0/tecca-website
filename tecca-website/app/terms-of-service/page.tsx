import type { Metadata } from 'next';
import { HeroHeader } from '@/components/header';
import TermsOfService from '@/components/terms-of-service';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the Terms of Service for Tecca — the centralized feedback management platform. Understand your rights, obligations, and how the platform operates.',
  openGraph: {
    title: 'Terms of Service | Tecca',
    description:
      'Read the Terms of Service for Tecca — the centralized feedback management platform. Understand your rights, obligations, and how the platform operates.',
  },
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <HeroHeader />
      <main className="pt-24">
        <TermsOfService />
      </main>
    </>
  );
}
