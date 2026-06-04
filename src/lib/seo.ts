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

// Verifiable public profiles that disambiguate the Grid&Dot entity for search and AI agents.
const socialProfiles = seoContent.company.socialProfiles ?? []

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
    other: {
      'company:legal_name': seoContent.site.legalName,
      'search-aliases': seoContent.site.searchAliases.join(', '),
    },
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

const structuredDataIds = {
  organization: `${siteOrigin}#organization`,
  website: `${siteOrigin}#website`,
  homepage: `${siteOrigin}#webpage`,
  privacyPage: `${siteOrigin}/privacy/#webpage`,
  privacyBreadcrumb: `${siteOrigin}/privacy/#breadcrumb`,
  employmentAgency: `${siteOrigin}#employment-agency`,
  service: `${siteOrigin}#service`,
  faq: `${siteOrigin}#faq`,
  heroImage: `${siteOrigin}#primary-image`,
} as const

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': structuredDataIds.organization,
  name: seoContent.site.name,
  alternateName: seoContent.site.alternateName,
  legalName: seoContent.site.legalName,
  url: siteOrigin,
  logo: absoluteUrl(seoContent.site.logoPath),
  image: absoluteUrl(seoContent.site.logoPath),
  description: seoContent.site.description,
  email: seoContent.company.email,
  telephone: seoContent.company.phone,
  foundingDate: seoContent.company.founded,
  slogan: seoContent.site.tagline,
  knowsAbout: seoContent.company.knowsAbout,
  ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
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
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': structuredDataIds.website,
  url: siteOrigin,
  name: seoContent.site.name,
  description: seoContent.site.shortDescription,
  publisher: { '@id': structuredDataIds.organization },
  inLanguage: seoContent.site.language,
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': structuredDataIds.service,
  name: 'Extended Expertise Talent Curation',
  serviceType: 'Extended Expertise Recruitment',
  description: seoContent.site.shortDescription,
  provider: { '@id': structuredDataIds.organization },
  areaServed: areaServedSchema,
  audience: {
    '@type': 'Audience',
    audienceType: 'Digital-first teams',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Grid&Dot Extended Expertise Services',
    itemListElement: seoContent.services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
      },
    })),
  },
}

const employmentAgencySchema = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  '@id': structuredDataIds.employmentAgency,
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
  ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: seoContent.company.phone,
    contactType: 'customer service',
    email: seoContent.company.email,
    availableLanguage: ['English'],
  },
  parentOrganization: { '@id': structuredDataIds.organization },
}

const heroImageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  '@id': structuredDataIds.heroImage,
  contentUrl: absoluteUrl(seoContent.site.ogImagePath),
  url: absoluteUrl(seoContent.site.ogImagePath),
  name: seoContent.site.ogImageAlt,
  caption: `${seoContent.site.name} - ${seoContent.site.tagline}`,
  inLanguage: seoContent.site.language,
  representativeOfPage: true,
  about: { '@id': structuredDataIds.organization },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': structuredDataIds.faq,
  inLanguage: seoContent.site.language,
  isPartOf: { '@id': structuredDataIds.website },
  mainEntity: seoContent.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

function buildWebPageSchema({
  id,
  path,
  name,
  description,
  about,
  primaryImageOfPage,
}: {
  id: string
  path: string
  name: string
  description: string
  about?: { '@id': string }
  primaryImageOfPage?: { '@id': string }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': id,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': structuredDataIds.website },
    dateModified: seoContent.metadata.lastUpdated,
    ...(about ? { about } : {}),
    ...(primaryImageOfPage ? { primaryImageOfPage } : {}),
    inLanguage: seoContent.site.language,
  }
}

function buildBreadcrumbSchema(id: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': id,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function getGlobalStructuredDataSchemas() {
  return [organizationSchema, websiteSchema, serviceSchema, employmentAgencySchema]
}

export function getHomeStructuredDataSchemas() {
  return [
    buildWebPageSchema({
      id: structuredDataIds.homepage,
      path: '/',
      name: seoContent.pages[0]?.title ?? seoContent.site.openGraphTitle,
      description: seoContent.site.description,
      about: { '@id': structuredDataIds.employmentAgency },
      primaryImageOfPage: { '@id': structuredDataIds.heroImage },
    }),
    heroImageSchema,
    faqSchema,
  ]
}

export function getPrivacyStructuredDataSchemas() {
  const privacyPage = getSeoPage('/privacy/')

  return [
    buildWebPageSchema({
      id: structuredDataIds.privacyPage,
      path: '/privacy/',
      name: privacyPage?.title ?? 'Privacy Policy',
      description: privacyPage?.description ?? 'Privacy policy for Grid&Dot.',
      about: { '@id': structuredDataIds.organization },
    }),
    buildBreadcrumbSchema(structuredDataIds.privacyBreadcrumb, [
      { name: 'Home', path: '/' },
      { name: privacyPage?.title ?? 'Privacy Policy', path: '/privacy/' },
    ]),
  ]
}

export function getSitemapPages(): PageDefinition[] {
  return seoContent.pages
}
