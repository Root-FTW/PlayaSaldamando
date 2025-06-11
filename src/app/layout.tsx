import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Playa Saldamando - Beachfront Camping & Cabins in Ensenada, Baja California',
    template: '%s | Playa Saldamando'
  },
  description: 'Experience the ultimate beachfront getaway at Playa Saldamando. Located at Kilometer 94 between Tijuana and Ensenada, we offer camping, cabin rentals, and unforgettable Pacific Ocean views. Book your coastal adventure today!',
  keywords: [
    'Playa Saldamando',
    'Ensenada camping',
    'Baja California beach',
    'beachfront cabins',
    'Mexico camping',
    'Pacific Ocean',
    'Tijuana Ensenada',
    'beach vacation',
    'coastal camping',
    'surfing Mexico'
  ],
  authors: [{ name: 'Playa Saldamando' }],
  creator: 'Playa Saldamando',
  publisher: 'Playa Saldamando',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://playasaldamando.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'es-MX': '/es',
      'ko-KR': '/ko',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://playasaldamando.com',
    title: 'Playa Saldamando - Beachfront Camping & Cabins',
    description: 'Experience the ultimate beachfront getaway at Playa Saldamando. Located at Kilometer 94 between Tijuana and Ensenada.',
    siteName: 'Playa Saldamando',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Playa Saldamando - Beautiful Pacific Ocean beachfront',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playa Saldamando - Beachfront Camping & Cabins',
    description: 'Experience the ultimate beachfront getaway at Playa Saldamando.',
    images: ['/images/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900">
              <Header />
              {children}
              <Footer />
            </div>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                success: {
                  duration: 3000,
                  iconTheme: {
                    primary: '#10b981',
                    secondary: '#fff',
                  },
                },
                error: {
                  duration: 5000,
                  iconTheme: {
                    primary: '#ef4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
