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
    const sliderRef = React.useRef<HTMLDivElement>(null);
    const isDown = React.useRef(false);
    const startX = React.useRef(0);
    const scrollLeft = React.useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!sliderRef.current) return;
        isDown.current = true;
        sliderRef.current.classList.add('active');
        startX.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeft.current = sliderRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown.current = false;
        if (sliderRef.current) sliderRef.current.classList.remove('active');
    };

    const handleMouseUp = () => {
        isDown.current = false;
        if (sliderRef.current) sliderRef.current.classList.remove('active');
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown.current || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Scroll-fast
        sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };

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
                         #section-work-with {
                            padding: 60px 40px !important;
                        }
                    }
                    /* Manual Scroll Container */
                    .logo-carousel {
                        display: flex;
                        overflow-x: auto;
                        gap: 40px;
                        padding-bottom: 20px; /* Space for scrollbar or gap */
                        width: 100%;
                        scroll-behavior: smooth;
                        /* Ensure it's scrollable on desktop */
                        cursor: grab;
                        /* Hide scrollbar always for clean look, as we have drag-to-scroll now */
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
                    .logo-carousel::-webkit-scrollbar {
                        display: none;
                    }
                    .logo-carousel.active {
                        cursor: grabbing;
                        scroll-behavior: auto; /* Remove smooth scroll while dragging for responsiveness */
                    }
                    .logo-item {
                        flex: 0 0 auto;
                        width: 200px; /* Adjust size based on design */
                        height: 100px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        user-select: none; /* Prevent image selection while dragging */
                    }
                    .logo-item img {
                        pointer-events: none; /* Prevent image drag behavior */
                    }
                    @media (max-width: 639px) {
                        .logo-item {
                            width: 140px;
                            height: 80px;
                        }
                    }
                `}</style>

                {/* Unified Carousel (Desktop & Mobile) */}
                <div style={{ marginBottom: '60px', width: '100%' }}>
                    <div
                        className="logo-carousel"
                        ref={sliderRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {LOGOS.map((logo, index) => (
                            <div
                                key={index}
                                className="logo-item"
                            >
                                <img
                                    src={`${basePath}/images/${logo}`}
                                    alt={logo.split('/').pop()?.replace('.png', '') || 'Partner Logo'}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        // filter: 'grayscale(100%) brightness(0.2)' // Removed filter as user said logos are pre-prepared ("с фреймами", "идентичного размера") and didn't ask for grayscale. If they are black/transparent already, this might make them invisible or too dark. I'll stick to transparency handling. If they are colored they might need grayscale. The screenshot shows black logos. I'll keep it safe and remove filter if not needed, or re-add if user complains. Actually, screenshot shows black logos. Assuming new PNGs are black or colored. Better to render "as is".
                                        // Re-adding filter just in case they are colored, but user said "PNG с прозрачными фреймами". I'll assume they are ready for display.
                                    }}
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
