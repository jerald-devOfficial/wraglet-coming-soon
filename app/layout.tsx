import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: true
});

const title = 'Wraglet - Coming Soon!';

export const metadata: Metadata = {
  title: title,
  description:
    "Wraglet is more than a social platform; it's a movement towards profound connections. Embrace a future where impactful brevity takes center stage, and every voice resonates. Join Wraglet today and be part of the evolution of meaningful online interaction.",
  twitter: {
    images: {
      url: 'https://wraglet.com/logo/logo.png',
      alt: 'Wraglet - Redefining Social Connection',
      type: 'image/png',
      width: 300,
      height: 300
    }
  },
  openGraph: {
    title: title,
    images: {
      url: 'https://wraglet.com/logo/logo.png',
      alt: 'Wraglet - Redefining Social Connection',
      type: 'image/png',
      width: 300,
      height: 300
    },
    siteName: title,
    description:
      'Discover Wraglet, where concise expression meets impactful connection. Redefining social media, Wraglet fosters meaningful interactions with a focus on brevity and resonance. Join us for a future where every voice matters.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
