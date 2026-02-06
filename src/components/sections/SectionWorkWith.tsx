'use client'

import React from 'react'
import { basePath } from '@/lib/basePath'

const LOGOS = [
    'estee lauder.png',
    'macc.png',
    'lamer.png',
    'clinique.png',
    'jo malone.png',
    'kilian paris.png',
    'aveda.png'
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
                {/* Header */}
                <h2
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

                {/* Slider Container */}
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        overflow: 'hidden',
                        marginBottom: '100px',
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', // Fade edges
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    }}
                >
                    <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .slider-track {
              display: flex;
              width: fit-content;
              animation: scroll 40s linear infinite;
            }
            .slider-track {
              display: flex;
              width: fit-content;
              animation: scroll 40s linear infinite;
            }
          `}</style>

                    <div className="slider-track">
                        {/* Quadruple the logos for seamless infinite effect on large screens */}
                        {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                            <div
                                key={index}
                                style={{
                                    flex: '0 0 auto',
                                    padding: '0 40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '250px', // Fixed width for consistent spacing
                                    height: '100px',
                                }}
                            >
                                <img
                                    src={`${basePath}/images/${logo}`}
                                    alt={logo.replace('.png', '')}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        filter: 'grayscale(100%) brightness(0.2)'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Arrow */}
                <div style={{ width: '100%' }}>
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
        </section>
    )
}
