import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ryan J. Parker',
  description: 'Creative Software Developer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ryanparker.io',
    title: 'Ryan J. Parker',
    description: 'Creative Software Developer',
    images: [
      {
        url: 'https://ryanparker.io/headshot-gradient.png',
        width: 300,
        height: 300,
        alt: 'Ryan J. Parker',
      },
    ],
  },
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
