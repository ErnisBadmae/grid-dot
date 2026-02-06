'use client'

import React from 'react'
import { basePath } from '@/lib/basePath'

export default function SectionCommitment() {
    return (
        <section
            id="section-commitment"
            style={{
                padding: '100px 73px',
                backgroundColor: '#F2F0EF',
            }}
        >
            <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                {/* Header */}
                <h2
                    style={{
                        fontFamily: 'Scandia, sans-serif',
                        fontSize: '48px',
                        fontWeight: 700,
                        color: '#0B1215',
                        lineHeight: 1.1,
                        marginBottom: '60px',
                        textAlign: 'left',
                    }}
                >
                    Our Commitment
                </h2>

                {/* Description Text */}
                <div style={{ marginBottom: '80px', maxWidth: '800px' }}>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Row 1 */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
                        <span
                            style={{
                                fontFamily: "'Overpass Mono', monospace",
                                fontSize: '24px',
                                fontWeight: 700,
                                color: '#FF8000',
                            }}
                        >
                            digital atelier
                        </span>

                        <img src={`${basePath}/images/Arrow Our Commitment.svg`} alt="arrow" style={{ width: '150px' }} />

                        <span
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
                        <span
                            style={{
                                fontFamily: "'Overpass Mono', monospace",
                                fontSize: '24px',
                                fontWeight: 700,
                                color: '#0033FF',
                            }}
                        >
                            extended expertise
                        </span>

                        <img src={`${basePath}/images/Arrow Our Commitment.svg`} alt="arrow" style={{ width: '150px' }} />

                        <span
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
