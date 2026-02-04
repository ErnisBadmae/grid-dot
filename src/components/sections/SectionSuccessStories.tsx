'use client'

import { useApp } from '@/contexts/AppContext'

const TAGS = [
    'data', 'product', 'ux', 'delivery', 'cms', 'cx', 'data-visualisation', 'ga4', 'amazon', 'user-tools', 'modernisation',
    'brands', 'global', 'emea', 'apac'
]

export default function SectionSuccessStories() {
    const { scrollTo } = useApp()

    return (
        <section
            id="section-success-stories"
            style={{
                position: 'relative',
                padding: '100px 73px',
                backgroundColor: '#F2F0EF',
            }}
        >
            {/* Background Animated SVG */}
            <img
                src="/images/text-on-path-4-desktop.svg"
                alt=""
                style={{
                    position: 'absolute',
                    top: '-450px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100vw',
                    minWidth: '1440px',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 0,
                    objectFit: 'cover',
                    maxWidth: 'none',
                }}
            />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
                {/* Part 1: Header */}
                <h2
                    style={{
                        fontFamily: 'Scandia, sans-serif',
                        fontSize: '48px',
                        fontWeight: 700,
                        color: '#0B1215',
                        lineHeight: 1.1,
                        marginBottom: '60px',
                    }}
                >
                    Success Stories —<br />
                    Case Highlights
                </h2>

                {/* Part 2: Card */}
                <div
                    style={{
                        backgroundColor: '#F8F8F8',
                        padding: '60px',
                        borderRadius: '0',
                    }}
                >
                    {/* Card Header */}
                    <h3
                        style={{
                            fontFamily: 'Scandia, sans-serif',
                            fontSize: '24px',
                            fontWeight: 500,
                            color: '#0B1215',
                            marginBottom: '8px',
                        }}
                    >
                        The Estée Lauder Companies
                    </h3>
                    <p
                        style={{
                            fontFamily: 'Scandia, sans-serif',
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#0B1215',
                            marginBottom: '32px',
                        }}
                    >
                        global platform modernisation, omni-channel expansion, brand experience innovation
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '48px' }}>
                        {TAGS.map((tag, i) => (
                            <span
                                key={i}
                                style={{
                                    backgroundColor: '#0033FF',
                                    color: '#FFFFFF',
                                    padding: '6px 16px',
                                    borderRadius: '999px',
                                    fontFamily: 'Scandia, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Client Context */}
                    <div style={{ marginBottom: '48px' }}>
                        <h4
                            style={{
                                fontFamily: 'Scandia, sans-serif',
                                fontSize: '24px',
                                fontWeight: 500,
                                color: '#0B1215',
                                marginBottom: '16px',
                            }}
                        >
                            Client Context:
                        </h4>
                        <p
                            style={{
                                fontFamily: 'Scandia, sans-serif',
                                fontSize: '16px',
                                fontWeight: 400,
                                color: '#0B1215',
                                lineHeight: 1.5,
                                marginBottom: '16px',
                            }}
                        >
                            ELC is a global leader in luxury beauty, with 20 iconic brands including Clinique, MAC, La Mer, Bobbi Brown, and Tom Ford. Operating across owned platforms, retail partners, and<br />
                            marketplaces, ELC must modernise at pace —<br />
                            while protecting brand consistency, measurement integrity, and governance across regions.
                        </p>
                        <p
                            style={{
                                fontFamily: 'Scandia, sans-serif',
                                fontSize: '16px',
                                fontWeight: 400,
                                color: '#0B1215',
                                lineHeight: 1.5,
                            }}
                        >
                            For many years our Embedded Expertise has empowered ELC’s teams to deliver key global and regional initiatives<br />
                            across multiple markets and regions, aligning to global standards and customer experience excellence.
                        </p>
                    </div>

                    {/* Grid of Details */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, auto) 1fr', rowGap: '32px', columnGap: '32px', marginBottom: '48px' }}>

                        {/* Row 1 */}
                        <div>
                            <h5 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 500, color: '#0B1215', margin: 0 }}>
                                Global Data
                            </h5>
                        </div>
                        <div>
                            <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', margin: 0, lineHeight: 1.5 }}>
                                data stream and GA4 architecture creation, data<br />
                                visualisation for non-technical stakeholder enablement<br />
                                and accessibility.
                            </p>
                        </div>

                        {/* Row 2 */}
                        <div>
                            <h5 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 500, color: '#0B1215', margin: 0 }}>
                                Global Product
                            </h5>
                        </div>
                        <div>
                            <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', margin: 0, lineHeight: 1.5 }}>
                                Amazon/brand integration across<br />
                                marketplace and brands, establishing<br />
                                channel expansion.
                            </p>
                        </div>

                        {/* Row 3 */}
                        <div>
                            <h5 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 500, color: '#0B1215', margin: 0 }}>
                                Regional Delivery<br />
                                EMEA, APAC
                            </h5>
                        </div>
                        <div>
                            <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', margin: 0, lineHeight: 1.5 }}>
                                platform modernisation and CMS delivery to<br />
                                support regional speed and consistency.
                            </p>
                        </div>

                        {/* Row 4 */}
                        <div>
                            <h5 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 500, color: '#0B1215', margin: 0 }}>
                                Brand Experience
                            </h5>
                        </div>
                        <div>
                            <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', margin: 0, lineHeight: 1.5 }}>
                                user tool innovation, creating a richer, more<br />
                                personalised customer experiences.
                            </p>
                        </div>
                    </div>

                    {/* Footer Text */}
                    <p
                        style={{
                            fontFamily: 'Scandia, sans-serif',
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#0B1215',
                            lineHeight: 1.5,
                            margin: 0,
                        }}
                    >
                        Our long tenure has allowed us to bring institutional knowledge, established ways of working, and deliver high impact collaboration. Enforced by expertise, agility and scalability, ELC continues to benefit from a reliable,<br />
                        continuously embedded delivery capability - supporting initiative after initiative with consistent governance,<br />
                        stronger measurement foundations, and the confidence that critical programmes can progress at pace without<br />
                        sacrificing quality or continuity on a global scale.
                    </p>
                </div>

                {/* Part 3: Footer Link */}
                <div style={{ marginTop: '60px' }}>
                    <button
                        onClick={() => scrollTo('#section-contact', 'start')}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer',
                            fontFamily: 'Scandia, sans-serif',
                            fontSize: '24px',
                            fontWeight: 700,
                            color: '#0033FF',
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px',
                        }}
                    >
                        Request a Case Study
                        {/* Arrow Icon */}
                        <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '12px' }}>
                            <path d="M1 13L13 1M13 1H4M13 1V10" stroke="#0033FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
