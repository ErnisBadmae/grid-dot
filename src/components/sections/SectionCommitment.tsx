'use client'

import React from 'react'
import { basePath } from '@/lib/basePath'
import { useApp } from '@/contexts/AppContext'

export default function SectionCommitment() {
    const { scrollTo } = useApp()
    return (
        <section
            id="section-commitment"
            style={{
                padding: '100px 73px',
                backgroundColor: '#F2F0EF',
            }}
        >
            <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                <style jsx>{`
                    .commitment-header {
                        font-family: 'Scandia', sans-serif;
                        font-weight: 700;
                        font-size: 48px;
                        line-height: 1.1;
                        margin-bottom: 60px;
                    }
                    .commitment-description {
                        margin-bottom: 80px;
                        max-width: 800px;
                    }
                    .commitment-row {
                        display: flex;
                        align-items: center;
                        justify-content: center; /* Centered on desktop, left on mobile? Screenshot shows Left aligned text? Actually screenshot shows "Our Commitment" huge. Let's default center desktop as per design */
                        gap: 32px;
                    }
                    .commitment-arrow {
                        width: 150px;
                    }
                    @media (max-width: 639px) {
                        .commitment-header {
                            font-size: 32px !important;
                            margin-bottom: 40px !important;
                        }
                        .commitment-description {
                            margin-bottom: 40px !important;
                        }
                        .commitment-row {
                            flex-direction: column-reverse !important; /* Swap order: Black text on top, Orange/Blue on bottom */
                            align-items: flex-start !important;
                            justify-content: flex-start !important;
                            gap: 16px !important;
                        }
                        .commitment-arrow {
                            width: 100% !important;
                            max-width: 280px; /* Limit width if needed, or full width */
                        }
                        /* Ensure text spans are block/flex for alignment */
                        .commitment-text {
                            text-align: left !important;
                            min-width: 0 !important;
                        }
                    }
                    .commitment-link-atelier,
                    .commitment-link-ee {
                        text-decoration: none;
                        text-underline-offset: 4px;
                    }
                    .commitment-link-atelier:hover,
                    .commitment-link-ee:hover {
                        text-decoration: underline;
                    }
                `}</style>

                {/* Header */}
                <h2
                    className="commitment-header"
                    style={{
                        fontFamily: 'Scandia, sans-serif',
                        fontWeight: 700,
                        color: '#0B1215',
                        textAlign: 'left',
                    }}
                >
                    Our Commitment
                </h2>

                {/* Description Text */}
                <div className="commitment-description">
                    <p
                        style={{
                            fontFamily: 'Scandia, sans-serif',
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#0B1215',
                            lineHeight: 1.5,
                            marginBottom: '32px',
                        }}
                    >
                        We commit to a human approach in tech. AI used to augment people, not replace them.<br />
                        Listening first, matching thoughtfully, and supporting both clients and specialists.
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
                        Extended Expertise, a practice within the shared system of:
                    </p>
                </div>

                {/* Comparison Grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Row 1 */}
                    <div className="commitment-row">
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            style={{ display: 'contents' }}
                        >
                            <span
                                className="commitment-text commitment-link-atelier"
                                style={{
                                    fontFamily: "'Overpass Mono', monospace",
                                    fontSize: '24px',
                                    fontWeight: 600,
                                    letterSpacing: '0.02em',
                                    color: '#FF8000',
                                    width: '300px',
                                    textAlign: 'right',
                                    cursor: 'pointer',
                                }}
                            >
                                digital atelier
                            </span>
                        </a>

                        <img className="commitment-arrow" src={`${basePath}/images/Arrow Our Commitment.svg`} alt="arrow" />

                        <span
                            className="commitment-text"
                            style={{
                                fontFamily: 'Scandia, sans-serif',
                                fontSize: '24px',
                                fontWeight: 700,
                                color: '#0B1215',
                                minWidth: '250px', // Ensure alignment if text lengths vary
                            }}
                        >
                            craft & realisation
                        </span>
                    </div>

                    {/* Row 2 */}
                    <div className="commitment-row">
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); scrollTo('#section-1', 'start'); }}
                            style={{ display: 'contents' }}
                        >
                            <span
                                className="commitment-text commitment-link-ee"
                                style={{
                                    fontFamily: "'Overpass Mono', monospace",
                                    fontSize: '24px',
                                    color: '#0033FF',
                                    width: '300px',
                                    textAlign: 'right',
                                    fontWeight: 600,
                                    letterSpacing: '0.02em',
                                    cursor: 'pointer',
                                }}
                            >
                                extended expertise
                            </span>
                        </a>

                        <img className="commitment-arrow" src={`${basePath}/images/Arrow Our Commitment.svg`} alt="arrow" />

                        <span
                            className="commitment-text"
                            style={{
                                fontFamily: 'Scandia, sans-serif',
                                fontSize: '24px',
                                fontWeight: 700,
                                color: '#0B1215',
                                minWidth: '250px',
                            }}
                        >
                            curated specialists
                        </span>
                    </div>

                </div>
            </div>
        </section>
    )
}
