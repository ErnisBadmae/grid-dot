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

import localFont from 'next/font/local'
import { basePath } from '@/lib/basePath'

const scandia = localFont({
  src: [
    {
      path: '../../public/fonts/scandia/Scandia-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/scandia/Scandia-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/scandia/Scandia-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-scandia',
})

const overpass = localFont({
  src: [
    {
      path: '../../public/fonts/overpass/OverpassMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/overpass/OverpassMono-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-overpass',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${scandia.variable} ${overpass.variable}`}>
      <head>
        <link rel="stylesheet" href={`${basePath}/old-site.css`} />
        <link rel="stylesheet" href={`${basePath}/header-override.css`} />
        <link rel="stylesheet" href={`${basePath}/mobile-figma-styles.css`} />
      </head>
      <body style={{ fontFamily: 'var(--font-scandia), sans-serif' }}>
        <AppProvider>
          {children}
          <CookieBanner />
        </AppProvider>
      </body>
    </html>
  )
}
