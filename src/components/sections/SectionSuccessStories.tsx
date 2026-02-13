'use client'

import { useState } from 'react'
import { useApp } from '@/contexts/AppContext'
import { basePath } from '@/lib/basePath'

const TAGS = [
    'data', 'product', 'ux', 'delivery', 'cms', 'cx', 'data-visualisation', 'ga4', 'amazon', 'user-tools', 'modernisation',
    'brands', 'global', 'emea', 'apac'
]

const ACCORDION_ITEMS = [
    {
        title: 'Client Context',
        content: (
            <>
                <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', lineHeight: 1.5, marginBottom: '16px' }}>
                    ELC is a global leader in luxury beauty, with 20 iconic brands including Clinique, MAC, La Mer, Bobbi Brown, and Tom Ford. Operating across owned platforms, retail partners, and marketplaces, ELC must modernise at pace — while protecting brand consistency, measurement integrity, and governance across regions.
                </p>
                <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', lineHeight: 1.5 }}>
                    For many years our Embedded Expertise has empowered ELC’s teams to deliver key global and regional initiatives across multiple markets and regions, aligning to global standards and customer experience excellence.
                </p>
            </>
        )
    },
    {
        title: 'Global Data',
        content: 'data stream and GA4 architecture creation, data visualisation for non-technical stakeholder enablement and accessibility.'
    },
    {
        title: 'Global Product',
        content: 'Amazon/brand integration across marketplace and brands, establishing channel expansion.'
    },
    {
        title: 'Regional Delivery EMEA, APAC',
        content: 'platform modernisation and CMS delivery to support regional speed and consistency.'
    },
    {
        title: 'Brand Experience',
        content: 'user tool innovation, creating a richer, more personalised customer experiences.'
    }
]

export default function SectionSuccessStories() {
    const { scrollTo } = useApp()
    // State for mobile accordion
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [isFooterExpanded, setIsFooterExpanded] = useState(false)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section
            id="section-success-stories"
            style={{
                position: 'relative',
                padding: '100px 73px',
                backgroundColor: '#F2F0EF',
            }}
        >
            <style jsx>{`
                @media (max-width: 639px) {
                    #section-success-stories {
                        padding: 60px 20px !important;
                    }
                }
            `}</style>

            {/* Background Animated SVG */}
            <img
                src={`${basePath}/images/text-on-path-4-desktop.svg`}
                alt=""
                className="desktop-only"
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

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0' }}>
                {/* Mobile Header */}
                <h2
                    className="mobile-only"
                    style={{
                        fontFamily: 'Scandia, sans-serif',
                        fontSize: '32px',
                        fontWeight: 700,
                        color: '#0B1215',
                        lineHeight: 1.1,
                        marginBottom: '32px',
                    }}
                >
                    Success Stories —<br />
                    Case Highlights
                </h2>

                {/* Desktop Header */}
                <h2
                    className="desktop-only"
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

                {/* Desktop Content */}
                <div
                    className="desktop-only"
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
                                fontSize: '16px',
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
                            <h5 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 500, color: '#0B1215', margin: 0 }}>
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
                            <h5 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 500, color: '#0B1215', margin: 0 }}>
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
                            <h5 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 500, color: '#0B1215', margin: 0 }}>
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
                            <h5 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 500, color: '#0B1215', margin: 0 }}>
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
                        stronger measurement foundations, and the confidence that critical programmes can progress at pace without
                        sacrificing quality or continuity on a global scale.
                    </p>
                </div>

                {/* Mobile Content */}
                <div
                    className="mobile-only"
                    style={{
                        backgroundColor: '#F8F8F8',
                        padding: '24px',
                        borderRadius: '0',
                    }}
                >
                    {/* Card Header */}
                    <h3
                        style={{
                            fontFamily: 'Scandia, sans-serif',
                            fontSize: '20px',
                            fontWeight: 700,
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
                            marginBottom: '24px',
                            lineHeight: 1.3,
                        }}
                    >
                        global platform modernisation, omni-channel expansion, brand experience innovation
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                        {TAGS.slice(0, 10).map((tag, i) => ( // Showing subset or all? Screenshot shows many. using all is safer.
                            <span
                                key={i}
                                style={{
                                    backgroundColor: '#0033FF',
                                    color: '#FFFFFF',
                                    padding: '4px 12px',
                                    borderRadius: '999px',
                                    fontFamily: 'Scandia, sans-serif',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                        {TAGS.length > 10 && TAGS.slice(10).map((tag, i) => ( // Rendering the rest
                            <span
                                key={i + 10}
                                style={{
                                    backgroundColor: '#0033FF',
                                    color: '#FFFFFF',
                                    padding: '4px 12px',
                                    borderRadius: '999px',
                                    fontFamily: 'Scandia, sans-serif',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Divider */}
                    <div style={{ height: '1px', backgroundColor: '#0B1215', margin: '0 0 0 0' }} />

                    {/* Mobile Accordion */}
                    <div>
                        {ACCORDION_ITEMS.map((item, index) => {
                            const isOpen = openIndex === index
                            return (
                                <div key={index} style={{ borderBottom: '1px solid #0B1215' }}>
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: '24px 0',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Scandia, sans-serif',
                                                fontSize: '18px',
                                                fontWeight: 700,
                                                color: '#0B1215',
                                            }}
                                        >
                                            {item.title}
                                        </span>
                                        <div style={{ position: 'relative', width: '20px', height: '20px' }}>
                                            <span
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '0',
                                                    width: '100%',
                                                    height: '2px',
                                                    backgroundColor: '#0B1215',
                                                    transform: 'translateY(-50%)',
                                                }}
                                            />
                                            <span
                                                style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '50%',
                                                    width: '2px',
                                                    height: '100%',
                                                    backgroundColor: '#0B1215',
                                                    transform: 'translateX(-50%)',
                                                    opacity: isOpen ? 0 : 1,
                                                    transition: 'opacity 0.2s',
                                                }}
                                            />
                                        </div>
                                    </button>

                                    <div
                                        style={{
                                            maxHeight: isOpen ? '1000px' : '0', // Larger max-height for text content
                                            overflow: 'hidden',
                                            transition: 'max-height 0.3s ease-out',
                                        }}
                                    >
                                        <div style={{ paddingBottom: '24px' }}>
                                            {typeof item.content === 'string' ? (
                                                <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', margin: 0, lineHeight: 1.4 }}>
                                                    {item.content}
                                                </p>
                                            ) : item.content}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Expandable Footer Text */}
                    <div style={{ marginTop: '32px' }}>
                        <div
                            style={{
                                maxHeight: isFooterExpanded ? 'none' : '72px',
                                overflow: 'hidden',
                                position: 'relative',
                                fontFamily: 'Scandia, sans-serif',
                                fontSize: '16px',
                                fontWeight: 400,
                                color: '#0B1215',
                                lineHeight: 1.5,
                                marginBottom: '8px',
                            }}
                        >
                            Our long tenure has allowed us to bring institutional knowledge, established ways of working, and deliver high impact collaboration. Enforced by expertise, agility and scalability, ELC continues to benefit from a reliable, continuously embedded delivery capability - supporting initiative after initiative with consistent governance, stronger measurement foundations, and the confidence that critical programmes can progress at pace without sacrificing quality or continuity on a global scale.
                            {!isFooterExpanded && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '40px',
                                    background: 'linear-gradient(to bottom, transparent, #F8F8F8)',
                                }} />
                            )}
                        </div>
                        <button
                            onClick={() => setIsFooterExpanded(!isFooterExpanded)}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: '8px 0',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: isFooterExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                                <path d="M7 10L12 15L17 10" stroke="#0B1215" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                </div>

                {/* Part 3: Footer Link */}
                <div style={{ marginTop: '60px' }}>
                    <button
                        onClick={() => scrollTo('#section-contacts', 'start')}
                        className="request-case-study-btn"
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
                        <svg
                            className="case-study-arrow"
                            width="20"
                            height="20"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginLeft: '12px', transition: 'transform 0.2s ease' }}
                        >
                            <path d="M1 13L13 1M13 1H4M13 1V10" stroke="#0033FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <style jsx>{`
                .request-case-study-btn:hover .case-study-arrow {
                    transform: translate(4px, -4px);
                }
            `}</style>
        </section>
    )
}
