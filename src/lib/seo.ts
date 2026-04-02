import type { Metadata } from 'next'
import seoContent from '@/lib/seo-content.json'

type SeoContent = typeof seoContent
type PageDefinition = SeoContent['pages'][number]

export const AI_RESOURCE_PATHS = {
  llms: '/llms.txt',
  llmsFull: '/llms-full.txt',
  metadata: '/ai-metadata.json',
  legacyMetadata: '/api/metadata.json',
  sitemap: '/sitemap.xml',
} as const

export const seoData = seoContent
export const siteOrigin = seoContent.site.productionUrl

const defaultOpenGraphImage = {
  url: seoContent.site.ogImagePath,
  width: 1200,
  height: 630,
  alt: seoContent.site.ogImageAlt,
}

const socialTitle = (title?: string) =>
  title ? `${title} | ${seoContent.site.name}` : seoContent.site.openGraphTitle

const areaServedSchema = seoContent.company.areasServed.map((area) => ({
  '@type': area === 'United Kingdom' ? 'Country' : 'Place',
  name: area,
}))

export function absoluteUrl(path = '/') {
  return new URL(path, siteOrigin).toString()
}

export function getSeoPage(path: string) {
  return seoContent.pages.find((page) => page.path === path)
}

export function isIndexableDeployment() {
  return process.env.VERCEL_ENV ? process.env.VERCEL_ENV === 'production' : true
}

export function buildRobotsMetadata(): NonNullable<Metadata['robots']> {
  const shouldIndex = isIndexableDeployment()

  return {
    index: shouldIndex,
    follow: shouldIndex,
    googleBot: {
      index: shouldIndex,
      follow: shouldIndex,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteOrigin),
    title: {
      default: seoContent.site.defaultTitle,
      template: seoContent.site.titleTemplate,
    },
    description: seoContent.site.description,
    keywords: seoContent.site.keywords,
    authors: [{ name: seoContent.site.name }],
    creator: seoContent.site.name,
    publisher: seoContent.site.name,
    alternates: {
      canonical: absoluteUrl('/'),
    },
    openGraph: {
      title: seoContent.site.openGraphTitle,
      description: seoContent.site.shortDescription,
      url: absoluteUrl('/'),
      siteName: seoContent.site.name,
      locale: seoContent.site.locale,
      type: 'website',
      images: [defaultOpenGraphImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoContent.site.openGraphTitle,
      description: seoContent.site.shortDescription,
      images: [seoContent.site.ogImagePath],
    },
    robots: buildRobotsMetadata(),
    icons: {
      icon: [{ url: seoContent.site.faviconPath, type: 'image/svg+xml' }],
      shortcut: [seoContent.site.faviconPath],
    },
  }
}

export function buildPageMetadata({
  path,
  title,
  description,
}: {
  path: string
  title: string
  description: string
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: socialTitle(title),
      description,
      url: absoluteUrl(path),
      siteName: seoContent.site.name,
      locale: seoContent.site.locale,
      type: 'website',
      images: [defaultOpenGraphImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle(title),
      description,
      images: [seoContent.site.ogImagePath],
    },
    robots: buildRobotsMetadata(),
  }
}

export function getGlobalStructuredDataSchemas() {
  const organizationId = `${siteOrigin}#organization`
  const websiteId = `${siteOrigin}#website`
  const homepageId = `${siteOrigin}#webpage`
  const employmentAgencyId = `${siteOrigin}#employment-agency`
  const serviceId = `${siteOrigin}#service`

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': organizationId,
      name: seoContent.site.name,
      alternateName: seoContent.site.alternateName,
      url: siteOrigin,
      logo: absoluteUrl(seoContent.site.logoPath),
      image: absoluteUrl(seoContent.site.logoPath),
      description: seoContent.site.description,
      email: seoContent.company.email,
      telephone: seoContent.company.phone,
      foundingDate: seoContent.company.founded,
      slogan: seoContent.site.tagline,
      knowsAbout: seoContent.company.knowsAbout,
      address: {
        '@type': 'PostalAddress',
        addressLocality: seoContent.company.city,
        addressRegion: seoContent.company.region,
        addressCountry: seoContent.company.countryCode,
      },
      areaServed: areaServedSchema,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: seoContent.company.phone,
        contactType: 'customer service',
        email: seoContent.company.email,
        availableLanguage: ['English'],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': websiteId,
      url: siteOrigin,
      name: seoContent.site.name,
      description: seoContent.site.shortDescription,
      publisher: { '@id': organizationId },
      inLanguage: seoContent.site.language,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': homepageId,
      url: absoluteUrl('/'),
      name: seoContent.pages[0]?.title ?? seoContent.site.openGraphTitle,
      description: seoContent.site.description,
      isPartOf: { '@id': websiteId },
      about: { '@id': employmentAgencyId },
      primaryImageOfPage: absoluteUrl(seoContent.site.ogImagePath),
      inLanguage: seoContent.site.language,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': serviceId,
      name: 'Extended Expertise Talent Curation',
      serviceType: 'Extended Expertise Recruitment',
      description: seoContent.site.shortDescription,
      provider: { '@id': organizationId },
      areaServed: areaServedSchema,
      audience: {
        '@type': 'Audience',
        audienceType: 'Digital-first teams',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Grid & Dot Services',
        itemListElement: seoContent.services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
          },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'EmploymentAgency',
      '@id': employmentAgencyId,
      name: seoContent.site.name,
      alternateName: seoContent.site.alternateName,
      description: seoContent.site.description,
      url: siteOrigin,
      image: absoluteUrl(seoContent.site.logoPath),
      logo: absoluteUrl(seoContent.site.logoPath),
      telephone: seoContent.company.phone,
      email: seoContent.company.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: seoContent.company.city,
        addressRegion: seoContent.company.region,
        addressCountry: seoContent.company.countryCode,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: seoContent.company.latitude,
        longitude: seoContent.company.longitude,
      },
      areaServed: areaServedSchema,
      slogan: seoContent.site.tagline,
      knowsAbout: seoContent.company.knowsAbout,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: seoContent.company.phone,
        contactType: 'customer service',
        email: seoContent.company.email,
        availableLanguage: ['English'],
      },
      parentOrganization: { '@id': organizationId },
    },
  ]
}

export function getSitemapPages(): PageDefinition[] {
  return seoContent.pages
}
