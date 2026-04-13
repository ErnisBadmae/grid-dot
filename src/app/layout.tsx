import localFont from 'next/font/local'
import { basePath } from '@/lib/basePath'
import { AppProvider } from '@/contexts/AppContext'
import CookieBanner from '@/components/layout/CookieBanner'
import './globals.css'
import { AI_RESOURCE_PATHS, buildRootMetadata } from '@/lib/seo'
import { getGlobalStructuredDataSchemas } from '@/lib/structuredData'

export const metadata = buildRootMetadata()

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
  const structuredDataSchemas = getGlobalStructuredDataSchemas()

  return (
    <html lang="en" className={`${scandia.variable} ${overpass.variable}`}>
      <head>
        <link rel="stylesheet" href={`${basePath}/old-site.css`} />
        <link rel="stylesheet" href={`${basePath}/header-override.css`} />
        <link rel="stylesheet" href={`${basePath}/mobile-figma-styles.css`} />
        <link rel="alternate" type="text/plain" href={`${basePath}${AI_RESOURCE_PATHS.llms}`} title="LLM Context" />
        <link rel="alternate" type="text/plain" href={`${basePath}${AI_RESOURCE_PATHS.llmsFull}`} title="LLM Full Context" />
        <link rel="alternate" type="application/json" href={`${basePath}${AI_RESOURCE_PATHS.metadata}`} title="AI Metadata" />
        {structuredDataSchemas.map((schema, index) => (
          <script
            key={`${String((schema as { '@type'?: string })['@type'] ?? 'schema')}-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
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
