import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HealGain - Scalable Outbound Engines That Win You Clients',
  description: 'We build precision outbound systems for tech startups, agencies, and B2B companies. Warm leads, high-intent signals, full-stack automation. Trusted by founders across USA, UAE, and Europe.',
  keywords: 'outbound marketing, B2B lead generation, sales automation, cold email, warm outbound, precision outbound, tech startups, SaaS founders',
  authors: [{ name: 'HealGain' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'HealGain - Scalable Outbound Engines That Win You Clients',
    description: 'We build precision outbound systems for tech startups, agencies, and B2B companies. Warm leads, high-intent signals, full-stack automation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealGain - Scalable Outbound Engines That Win You Clients',
    description: 'We build precision outbound systems for tech startups, agencies, and B2B companies.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
