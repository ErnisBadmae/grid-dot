import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileMenu from '@/components/layout/MobileMenu'
import ContactsSidebar from '@/components/layout/ContactsSidebar'
import Section4 from '@/components/sections/Section4' // Hero
import Section1 from '@/components/sections/Section1'
import Section2 from '@/components/sections/Section2'
import Section3 from '@/components/sections/Section3'
import SectionSuccessStories from '@/components/sections/SectionSuccessStories'
import SectionWorkWith from '@/components/sections/SectionWorkWith'
import SectionCommitment from '@/components/sections/SectionCommitment'
import SectionContacts from '@/components/sections/SectionContacts'
import { getHomeStructuredDataSchemas } from '@/lib/seo'


import ScrollToTopButton from '@/components/ui/ScrollToTopButton'

export default function Home() {
  const structuredDataSchemas = getHomeStructuredDataSchemas()

  return (
    <>
      {structuredDataSchemas.map((schema, index) => (
        <script
          key={`${String((schema as { '@type'?: string })['@type'] ?? 'schema')}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <MobileMenu />
      <ContactsSidebar />

      <main className="sections-wrapper" style={{ paddingTop: '120px' }}>
        <Section4 />
        <Section1 />
        <Section2 />
        <Section3 />
        <SectionSuccessStories />
        <SectionWorkWith />
        <SectionCommitment />
        <SectionContacts />
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  )
}
