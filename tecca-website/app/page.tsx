import type { Metadata } from 'next';
import HeroSection from '@/components/hero-section-two';
import PostsFeature from '@/components/posts-feature';
import RoadmapFeaturesSection from '@/components/roadmap-features';
import ChangelogFeaturesSection from '@/components/changelog-features';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tecca',
  applicationCategory: 'BusinessApplication',
  description:
    'A centralized hub for collecting, managing, and prioritizing user feedback. Includes roadmap, changelog, and team collaboration features.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  operatingSystem: 'Web',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <section id="features" className="w-full" aria-labelledby="features-heading">
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div>
            <h2
              id="features-heading"
              className="mx-auto mt-8 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Product features
            </h2>
            <p className="text-muted-foreground mx-auto my-6 max-w-2xl text-balance text-xl">
              Discover an extensive suite of robust tools and functionalities thoughtfully designed
              to enhance your interactions on our platform
            </p>
          </div>
        </div>

        <PostsFeature />

        <RoadmapFeaturesSection />

        <ChangelogFeaturesSection />
      </section>
    </>
  );
}
