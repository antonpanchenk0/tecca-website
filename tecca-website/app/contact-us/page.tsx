import type { Metadata } from 'next';
import { HeroHeader } from '@/components/header';
import ContactUs from '@/components/contact-us';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Tecca team. We are here to help with questions about our feedback management platform, product demos, and support.',
  openGraph: {
    title: 'Contact Us | Tecca',
    description:
      'Get in touch with the Tecca team. We are here to help with questions about our feedback management platform, product demos, and support.',
  },
  alternates: {
    canonical: '/contact-us',
  },
};

export default function ContactUsPage() {
  return (
    <>
      <HeroHeader />
      <main className="pt-24">
        <ContactUs />
      </main>
    </>
  );
}
