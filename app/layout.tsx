import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
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

        <Script
          id="monetag-ad"
          strategy="afterInteractive"
        >{`
          (function(s){
            s.dataset.zone='11907044';
            s.src='https://al5sm.com/tag.min.js';
          })(
            [document.documentElement, document.body]
              .filter(Boolean)
              .pop()
              .appendChild(document.createElement('script'))
          );
        `}</Script>
      </body>
    </html>
  );
}
