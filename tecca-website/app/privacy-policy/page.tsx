import type { Metadata } from 'next';
import { HeroHeader } from '@/components/header';
import PrivacyPolicy from '@/components/privacy-policy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Privacy Policy for Tecca. Learn how we collect, use, store, and protect your personal data in compliance with GDPR and US privacy laws.',
  openGraph: {
    title: 'Privacy Policy | Tecca',
    description:
      'Read the Privacy Policy for Tecca. Learn how we collect, use, store, and protect your personal data in compliance with GDPR and US privacy laws.',
  },
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroHeader />
      <main className="pt-24">
        <PrivacyPolicy />
      </main>
    </>
  );
}
