
import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Tinyplex — Compress & Resize Images Online',
  description:
    'Free online image compressor and resizer. Process JPG, PNG and WebP images locally in your browser.',
  other: {
    monetag: 'c4622e6e380be6124876e206f4c694bc',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
