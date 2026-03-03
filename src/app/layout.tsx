import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/contexts/AppContext'
import CookieBanner from '@/components/layout/CookieBanner'
import { faqPageSchema, localBusinessSchema, organizationSchemaEnhancements } from '@/lib/structuredData'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gridanddot.com'),
  title: {
    default: 'Grid & Dot - Extended Expertise Talent Curation | London',
    template: '%s | Grid & Dot'
  },
  description: 'London-based extended expertise recruitment agency. We curate digital specialists in product strategy, data architecture, and delivery for digital-first teams. No CVs—real expertise.',
  keywords: ['extended expertise', 'talent curation', 'recruitment agency', 'digital specialists', 'product strategy', 'data architecture', 'London recruitment', 'UK recruitment'],
  authors: [{ name: 'Grid & Dot' }],
  creator: 'Grid & Dot',
  publisher: 'Grid & Dot',
  alternates: {
    canonical: 'https://gridanddot.com'
  },
  openGraph: {
    title: 'Grid & Dot - Extended Expertise Talent Curation',
    description: 'Curated digital specialists solving skill gaps fast. Extended expertise for digital-first teams.',
    url: 'https://gridanddot.com',
    siteName: 'Grid & Dot',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grid & Dot - Extended Expertise'
      }
    ],
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grid & Dot - Extended Expertise Talent Curation',
    description: 'Curated digital specialists solving skill gaps fast',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: '/apple-touch-icon.png'
  }
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

        {/* JSON-LD Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Grid & Dot",
              "alternateName": "Grid and Dot",
              "url": "https://gridanddot.com",
              "logo": "https://gridanddot.com/images/grid-dot-logo.svg",
              "description": "Extended expertise recruitment agency specializing in curated digital talent for product strategy, data architecture, content, and delivery teams",
              "email": "engagement@gridanddot.com",
              "telephone": "+447782795174",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "GB"
              },
              "sameAs": [],
              "foundingDate": organizationSchemaEnhancements.foundingDate,
              "slogan": organizationSchemaEnhancements.slogan,
              "knowsAbout": organizationSchemaEnhancements.knowsAbout,
              "areaServed": organizationSchemaEnhancements.areaServed
            })
          }}
        />

        {/* JSON-LD Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Grid & Dot",
              "url": "https://gridanddot.com",
              "description": "Extended expertise talent curation for digital-first teams",
              "publisher": {
                "@type": "Organization",
                "name": "Grid & Dot"
              }
            })
          }}
        />

        {/* JSON-LD Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Extended Expertise Recruitment",
              "provider": {
                "@type": "Organization",
                "name": "Grid & Dot"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United Kingdom"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Expertise Areas",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Product Strategy Expertise"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Data Architecture Expertise"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Delivery & Agile Expertise"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* JSON-LD Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageSchema)
          }}
        />

        {/* JSON-LD Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
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
