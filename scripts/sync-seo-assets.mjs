import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

const loadSeoContent = async () => {
  const filePath = path.join(repoRoot, 'src', 'lib', 'seo-content.json')
  const content = await readFile(filePath, 'utf8')

  return JSON.parse(content)
}

const absoluteUrl = (origin, pathname = '/') => new URL(pathname, origin).toString()
const isIndexableDeployment = () => (process.env.VERCEL_ENV ? process.env.VERCEL_ENV === 'production' : true)

const buildRobotsText = (seoContent) => {
  const lines = []

  if (isIndexableDeployment()) {
    lines.push('# General search engine crawlers')
    lines.push('User-agent: *')
    lines.push('Allow: /')
    lines.push('')
    lines.push('# AI crawlers explicitly allowed for retrieval and future agent search')

    for (const bot of ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'anthropic-ai', 'ClaudeBot', 'CCBot', 'PerplexityBot']) {
      lines.push(`User-agent: ${bot}`)
      lines.push('Allow: /')
      lines.push('')
    }

    lines.push('# Sitemap')
    lines.push(`Sitemap: ${absoluteUrl(seoContent.site.productionUrl, '/sitemap.xml')}`)
    lines.push('')
    lines.push('# AI agent context files')
    lines.push(`# LLM-readable site description (llmstxt.org style): ${absoluteUrl(seoContent.site.productionUrl, '/llms.txt')}`)
    lines.push(`# Extended LLM context with FAQ: ${absoluteUrl(seoContent.site.productionUrl, '/llms-full.txt')}`)
    lines.push(`# Structured AI metadata (JSON): ${absoluteUrl(seoContent.site.productionUrl, '/ai-metadata.json')}`)
  } else {
    lines.push('# Non-production deployment')
    lines.push('User-agent: *')
    lines.push('Disallow: /')
  }

  return `${lines.join('\n')}\n`
}

const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')

const buildSitemapXml = (seoContent) => {
  const urls = seoContent.pages
    .map((page) => `  <url>
    <loc>${escapeXml(absoluteUrl(seoContent.site.productionUrl, page.path))}</loc>
    <lastmod>${seoContent.metadata.lastUpdated}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

const formatTelegramHandle = (handle) => (handle.startsWith('@') ? handle : `@${handle}`)
const formatInternationalPhone = (phone) => phone.replace(/^\+44(\d{4})(\d{3})(\d{3})$/, '+44 $1 $2 $3')

const buildLlmsText = (seoContent) => {
  const lines = [
    `# ${seoContent.site.name}`,
    '',
    `> Extended expertise recruitment agency based in ${seoContent.company.city}, UK. We curate digital specialists - not CVs - for product strategy, data architecture, delivery, and digital transformation teams.`,
    '',
    '## About',
    '',
    `${seoContent.site.name} is a London-based talent curation agency. We match curated digital specialists to companies' culture, workflows, and goals. Our focus is quality over volume, long-term fit, and ongoing support.`,
    '',
    '## Search Patterns',
    '',
    ...seoContent.site.searchAliases.map((alias) => `- ${alias}`),
    '',
    '## Services',
    '',
    ...seoContent.services.map((service) => `- **${service.name}** - ${service.description}`),
    '',
    '## Expertise Areas',
    '',
    ...seoContent.expertise.map((item) => `- ${item}`),
    '',
    '## Regions Served',
    '',
    ...seoContent.company.areasServed.map((region) =>
      region === 'United Kingdom' ? `- ${region} (HQ: ${seoContent.company.city})` : `- ${region}`
    ),
    '',
    '## Contact',
    '',
    `- Email: ${seoContent.company.email}`,
    `- Phone: ${formatInternationalPhone(seoContent.company.phone)}`,
    `- Telegram: ${formatTelegramHandle(seoContent.company.telegram)}`,
    `- Website: ${seoContent.site.productionUrl}`,
    '',
    '## Links',
    '',
    '- [Full AI context](/llms-full.txt)',
    '- [Structured metadata (JSON)](/ai-metadata.json)',
  ]

  return `${lines.join('\n')}\n`
}

const buildLlmsFullText = (seoContent) => {
  const lines = [
    `# ${seoContent.site.name} - Full Context`,
    '',
    `> Extended expertise recruitment agency based in ${seoContent.company.city}, UK. We curate digital specialists - not CVs - for product strategy, data architecture, delivery, and digital transformation teams.`,
    '',
    '## About',
    '',
    `${seoContent.site.name} is a London-based talent curation agency founded in ${seoContent.company.founded}. We match curated digital specialists to companies' culture, workflows, and goals. Our focus is quality over volume, long-term fit, and ongoing support.`,
    '',
    `Our slogan: "${seoContent.site.tagline}"`,
    '',
    '## Search Patterns',
    '',
    ...seoContent.site.searchAliases.map((alias) => `- ${alias}`),
    '',
    '## Services',
    '',
    ...seoContent.services.map((service) => `- **${service.name}** - ${service.description}`),
    '',
    '## Expertise Areas',
    '',
    ...seoContent.expertise.map((item) => `- ${item}`),
    '',
    '## Regions Served',
    '',
    ...seoContent.company.areasServed.map((region) =>
      region === 'United Kingdom' ? `- ${region} (HQ: ${seoContent.company.city})` : `- ${region}`
    ),
    '',
    '## Notable Clients',
    '',
    ...seoContent.company.notableClients.map((client) => `- ${client}`),
    '',
    '## Contact',
    '',
    `- Email: ${seoContent.company.email}`,
    `- Phone: ${formatInternationalPhone(seoContent.company.phone)}`,
    `- Telegram: ${formatTelegramHandle(seoContent.company.telegram)}`,
    `- Website: ${seoContent.site.productionUrl}`,
    '',
    '## FAQ',
    '',
    ...seoContent.faq.flatMap((item) => [
      `### ${item.question}`,
      item.answer,
      '',
    ]),
    '## Links',
    '',
    '- [Short AI context](/llms.txt)',
    '- [Structured metadata (JSON)](/ai-metadata.json)',
  ]

  return `${lines.join('\n')}\n`
}

const buildAiMetadata = (seoContent) => ({
  version: seoContent.metadata.version,
  lastUpdated: seoContent.metadata.lastUpdated,
  company: {
    name: seoContent.site.name,
    alternateName: seoContent.site.alternateName,
    legalName: seoContent.site.legalName,
    type: seoContent.company.type,
    founded: seoContent.company.founded,
    slogan: seoContent.site.tagline,
    description: seoContent.site.description,
    url: seoContent.site.productionUrl,
    logo: absoluteUrl(seoContent.site.productionUrl, seoContent.site.logoPath),
  },
  searchPatterns: seoContent.site.searchAliases,
  contact: {
    email: seoContent.company.email,
    phone: seoContent.company.phone,
    telegram: seoContent.company.telegram,
    whatsapp: seoContent.company.whatsapp,
  },
  location: {
    city: seoContent.company.city,
    region: seoContent.company.region,
    country: seoContent.company.country,
    countryCode: seoContent.company.countryCode,
  },
  areasServed: seoContent.company.areasServed,
  services: seoContent.services,
  expertise: seoContent.expertise,
  knowsAbout: seoContent.company.knowsAbout,
  notableClients: seoContent.company.notableClients,
  pages: seoContent.pages.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
  })),
  aiFiles: {
    llms: '/llms.txt',
    llmsFull: '/llms-full.txt',
    metadata: '/ai-metadata.json',
    legacyMetadata: '/api/metadata.json',
    sitemap: '/sitemap.xml',
  },
})

const buildLegacyApiMetadata = (seoContent) => ({
  company: {
    name: seoContent.site.name,
    legalName: seoContent.site.legalName,
    type: 'Recruitment Agency',
    specialty: 'Extended Expertise Talent Curation',
    tagline: seoContent.site.tagline,
    description: seoContent.site.description,
    founded: seoContent.company.founded,
    location: {
      city: seoContent.company.city,
      region: seoContent.company.region,
      country: seoContent.company.country,
      countryCode: seoContent.company.countryCode,
    },
    contact: {
      email: seoContent.company.email,
      phone: seoContent.company.phone,
      whatsapp: seoContent.company.phone,
      telegram: formatTelegramHandle(seoContent.company.telegram),
    },
    website: seoContent.site.productionUrl,
  },
  searchPatterns: seoContent.site.searchAliases,
  services: {
    primary: 'Extended Expertise Recruitment',
    approach: 'Quality-driven curation of digital specialists with long-term fit focus and ongoing support.',
    differentiators: [
      'No CVs - curated specialists only',
      'Quality over volume approach',
      'Long-term cultural fit focus',
      'Ongoing partnership and support',
      'Deep understanding of team workflows and culture',
    ],
    expertise_areas: seoContent.expertise.map((area) => ({
      area,
      description: `${area} expertise for digital-first teams.`,
    })),
  },
  target_market: {
    client_types: 'Digital-first teams, global brands, and companies undergoing digital transformation.',
    geographic_focus: seoContent.company.areasServed.join(', '),
  },
  case_studies: {
    featured: [
      {
        client: seoContent.company.notableClients[0],
        challenge: 'Global platform modernisation and omni-channel expansion.',
        expertise_provided: ['Data Architecture', 'Product Strategy', 'Delivery Management', 'Brand Experience'],
        outcome: 'Scaled digital capabilities across multiple brands and regions.',
      },
    ],
  },
  values: {
    quality_over_quantity: 'We focus on the right fit, not the fastest placement.',
    no_cv_approach: 'Real expertise and cultural fit matter more than resume keywords.',
    long_term_partnership: 'We support ongoing success, not just initial placement.',
    cultural_alignment: 'We work to understand team workflows, culture, and goals before making a match.',
  },
  faq: seoContent.faq,
  metadata: {
    version: seoContent.metadata.version,
    last_updated: seoContent.metadata.lastUpdated,
    format: 'JSON',
    purpose: 'Machine-readable company information for AI agents and automated systems.',
    schema: absoluteUrl(seoContent.site.productionUrl, '/api/metadata.json'),
  },
})

const writeAsset = async (relativePath, contents) => {
  const targetPath = path.join(repoRoot, relativePath)
  await mkdir(path.dirname(targetPath), { recursive: true })
  await writeFile(targetPath, contents, 'utf8')
}

const main = async () => {
  const seoContent = await loadSeoContent()

  await writeAsset(path.join('public', 'robots.txt'), buildRobotsText(seoContent))
  await writeAsset(path.join('public', 'sitemap.xml'), buildSitemapXml(seoContent))
  await writeAsset(path.join('public', 'llms.txt'), buildLlmsText(seoContent))
  await writeAsset(path.join('public', 'llms-full.txt'), buildLlmsFullText(seoContent))
  await writeAsset(path.join('public', 'ai-metadata.json'), `${JSON.stringify(buildAiMetadata(seoContent), null, 2)}\n`)
  await writeAsset(path.join('public', 'api', 'metadata.json'), `${JSON.stringify(buildLegacyApiMetadata(seoContent), null, 2)}\n`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
