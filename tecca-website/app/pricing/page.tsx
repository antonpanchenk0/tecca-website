import type { Metadata } from 'next';
import { HeroHeader } from '@/components/header';
import Pricing from '@/components/pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for teams of all sizes. Start free and scale as you grow with Tecca feedback management plans.',
  openGraph: {
    title: 'Pricing | Tecca',
    description:
      'Simple, transparent pricing for teams of all sizes. Start free and scale as you grow with Tecca feedback management plans.',
  },
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingPage() {
  return (
    <>
      <HeroHeader />
      <main className="pt-24">
        <Pricing />
      </main>
    </>
  );
}
