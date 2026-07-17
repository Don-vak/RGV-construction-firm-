import type {Metadata, Viewport} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'RGV Workers | Construction & Remodeling in the Rio Grande Valley',
  description:
    'Delivering top-quality construction and remodeling services across the Rio Grande Valley. Free estimates for new builds, renovations, and exterior finishes.',
  keywords: [
    'construction',
    'remodeling',
    'Rio Grande Valley',
    'McAllen',
    'new build',
    'renovation',
    'kitchen remodel',
    'bath remodel',
    'roofing',
    'flooring',
  ],
  openGraph: {
    title: 'RGV Workers — We Build Dreams',
    description:
      'From full new builds to kitchen and bath remodels, RGV Remodeling & Construction brings the experience, skill and craftsmanship to turn your space into the place you have always pictured.',
    url: 'https://rgvworkers.com',
    siteName: 'RGV Workers',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F5921E',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-black text-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
