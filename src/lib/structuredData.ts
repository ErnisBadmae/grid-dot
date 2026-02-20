/**
 * Structured Data (JSON-LD) schemas for SEO optimization
 * These schemas help search engines understand the content and improve rich snippets in SERPs
 */

/**
 * FAQPage Schema - Enables FAQ rich snippets in Google search results
 * Based on actual content and services offered by Grid & Dot
 */
export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Extended Expertise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Extended expertise is a talent model focused on curated specialists rather than CV volume. We match digital specialists for product strategy, data architecture, and delivery to your team's culture and workflows. It's about quality over quantity, ensuring the right fit for long-term success."
      }
    },
    {
      "@type": "Question",
      "name": "How is Grid & Dot different from traditional recruiters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike traditional agencies that send CVs, we curate specialists that fit your culture, workflows, and goals. We focus on quality over volume, long-term fit, and ongoing support. No CVs—just real expertise that matches your needs."
      }
    },
    {
      "@type": "Question",
      "name": "What industries and expertise areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in digital-first teams requiring product strategy, data architecture, delivery, UX/design, and content expertise. Our clients include global brands like The Estée Lauder Companies and organizations undergoing digital transformation."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Grid & Dot based?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are based in London, United Kingdom, with capabilities across EMEA and APAC regions. Our London location allows us to serve both local and international clients with time zone flexibility."
      }
    },
    {
      "@type": "Question",
      "name": "How does the extended expertise curation process work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We focus on quality over speed. Our curated approach involves understanding your team's culture, workflows, and goals, then matching specialists who fit those requirements. We provide ongoing support to ensure long-term success rather than just filling a role quickly."
      }
    }
  ]
}

/**
 * LocalBusiness Schema - Improves local SEO for London-based searches
 * Uses EmploymentAgency type which is more specific than generic LocalBusiness
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "name": "Grid & Dot",
  "alternateName": "Grid and Dot",
  "description": "Extended expertise recruitment agency specializing in curated digital talent for product strategy, data architecture, and delivery teams.",
  "image": "https://gridanddot.com/images/Grid&Dot.svg",
  "logo": "https://gridanddot.com/images/Grid&Dot.svg",
  "url": "https://gridanddot.com",
  "telephone": "+447782795174",
  "email": "engagement@gridanddot.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.5074",
    "longitude": "-0.1278"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United Kingdom"
    },
    {
      "@type": "Place",
      "name": "EMEA"
    },
    {
      "@type": "Place",
      "name": "APAC"
    }
  ],
  "priceRange": "$$$$",
  "slogan": "Extended Expertise. No CVs—Real Expertise.",
  "knowsAbout": [
    "Product Strategy",
    "Data Architecture",
    "Delivery & Agile",
    "UX & Design",
    "Content Strategy",
    "Digital Transformation",
    "Talent Curation"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+447782795174",
    "contactType": "customer service",
    "email": "engagement@gridanddot.com",
    "availableLanguage": "English"
  }
}

/**
 * Enhanced Organization Schema additions
 * These fields can be merged with the existing Organization schema in layout.tsx
 */
export const organizationSchemaEnhancements = {
  "foundingDate": "2024",
  "slogan": "Extended Expertise. No CVs—Real Expertise.",
  "knowsAbout": [
    "Extended Expertise",
    "Talent Curation",
    "Product Strategy",
    "Data Architecture",
    "Delivery Management",
    "Digital Transformation",
    "Recruitment"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  }
  // Add "sameAs" array here if Grid & Dot has social media profiles
  // "sameAs": [
  //   "https://www.linkedin.com/company/gridanddot",
  //   "https://twitter.com/gridanddot"
  // ]
}
