'use client'

import React from 'react'
import { basePath } from '@/lib/basePath'

const LOGOS = [
    'Logos/Logos/LMlogo.png',
    'Logos/Logos/CLlogo.png',
    'Logos/Logos/JMlogo.png',
    'Logos/Logos/KLlogo.png',
    'Logos/Logos/AVlogo.png',
    'Logos/Logos/ELlogo.png',
    'Logos/Logos/MAClogo.png'
]

export default function SectionWorkWith() {
    return (
        <section
            id="section-work-with"
            style={{
                padding: '100px 73px',
                backgroundColor: '#F2F0EF',
                overflow: 'hidden',
            }}
        >
            <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>
                {/* HEADER */}
                <h2
                    className="desktop-only"
                    style={{
                        fontFamily: 'Scandia, sans-serif',
                        fontSize: '48px',
                        fontWeight: 700,
                        color: '#0B1215',
                        lineHeight: 1.1,
                        marginBottom: '80px',
                        textAlign: 'left',
                    }}
                >
                    We are pleased to work with
                </h2>

                <h2
                    className="mobile-only"
                    style={{
                        fontFamily: 'Scandia, sans-serif',
                        fontSize: '32px',
                        fontWeight: 700,
                        color: '#0B1215',
                        lineHeight: 1.1,
                        marginBottom: '40px',
                        textAlign: 'left',
                    }}
                >
                    We are pleased<br />to work with
                </h2>

                <style jsx>{`
                    @media (max-width: 639px) {
                        :global(#section-work-with) {
                            padding: 60px 20px 10px !important;
                        }
                    }

                    /* Marquee container */
                    .marquee-wrapper {
                        overflow: hidden;
                        width: 100%;
                        margin-bottom: 60px;
                    }

                    .marquee-track {
                        display: flex;
                        width: max-content;
                        animation: marquee-scroll 20s linear infinite;
                    }

                    .marquee-track:hover {
                        animation-play-state: paused;
                    }

                    @keyframes marquee-scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    .logo-item {
                        flex: 0 0 auto;
                        width: 200px;
                        height: 100px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 60px;
                        user-select: none;
                    }

                    .logo-item img {
                        max-width: 100%;
                        max-height: 100%;
                        object-fit: contain;
                        pointer-events: none;
                    }

                    @media (max-width: 639px) {
                        .logo-item {
                            width: 140px;
                            height: 80px;
                            margin-right: 40px;
                        }
                    }
                `}</style>

                {/* Infinite Marquee */}
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {/* First set */}
                        {LOGOS.map((logo, index) => (
                            <div key={`a-${index}`} className="logo-item">
                                <img
                                    src={`${basePath}/images/${logo}`}
                                    alt={logo.split('/').pop()?.replace('.png', '') || 'Partner Logo'}
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {LOGOS.map((logo, index) => (
                            <div key={`b-${index}`} className="logo-item">
                                <img
                                    src={`${basePath}/images/${logo}`}
                                    alt={logo.split('/').pop()?.replace('.png', '') || 'Partner Logo'}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Arrow */}
                <div className="desktop-only" style={{ width: '100%', padding: '0 20px' }}>
                    <img
                        src={`${basePath}/images/Arrow Work with.svg`}
                        alt="Arrow"
                        style={{
                            display: 'block',
                            width: '100%',
                            maxWidth: '100%'
                        }}
                    />
                </div>
            </div>
        </section >
    )
}
