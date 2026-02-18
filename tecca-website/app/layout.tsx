import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import FooterSection from '@/components/footer';
import BottomContentSection from '@/components/bottom-content';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tecca.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tecca - A centralized hub for all your feedback',
    template: '%s | Tecca',
  },
  description:
    'Forget about losing important feedback. Collect, manage, and prioritize feature requests in one place with Tecca.',
  keywords: [
    'feedback management',
    'feature requests',
    'product feedback',
    'roadmap',
    'changelog',
    'user feedback',
    'product management',
    'feedback tool',
  ],
  authors: [{ name: 'Tecca', url: siteUrl }],
  creator: 'Tecca',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Tecca',
    title: 'Tecca - A centralized hub for all your feedback',
    description:
      'Forget about losing important feedback. Collect, manage, and prioritize feature requests in one place with Tecca.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tecca - Feedback management platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tecca - A centralized hub for all your feedback',
    description:
      'Forget about losing important feedback. Collect, manage, and prioritize feature requests in one place with Tecca.',
    images: ['/og-image.png'],
    creator: '@teccahq',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        <BottomContentSection />
        <FooterSection />
      </body>
    </html>
  );
}
