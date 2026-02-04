import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/contexts/AppContext'
import CookieBanner from '@/components/layout/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gridanddot.com'),
  title: 'Grid & Dot - Extended Expertise',
  description: 'Professional web development and design services',
  keywords: ['web development', 'design', 'consulting', 'recruitment'],
  openGraph: {
    title: 'Grid & Dot - Extended Expertise',
    description: 'Professional web development and design services',
    url: 'https://gridanddot.com',
    siteName: 'Grid & Dot',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grid & Dot',
    description: 'Professional web development and design services',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/old-site.css" />
        <link rel="stylesheet" href="/header-override.css" />
        <link rel="stylesheet" href="/mobile-figma-styles.css" />
        <link rel="stylesheet" href="/cookie-banner.css" />
      </head>
      <body>
        <AppProvider>
          {children}
          <CookieBanner />
        </AppProvider>
      </body>
    </html>
  )
}
