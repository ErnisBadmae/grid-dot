'use client'

import React, { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down roughly 1.5 screen heights
            if (window.scrollY > window.innerHeight * 1.5) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                zIndex: 99,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none',
                transition: 'opacity 0.3s ease-in-out',
                padding: 0,
            }}
            aria-label="Scroll to top"
        >
            <img
                src="/images/Button up.svg"
                alt="Scroll to top"
                style={{
                    width: '60px', // Assuming standard visible size, adjusting if too big/small
                    height: '60px',
                    display: 'block',
                }}
            />
        </button>
    )
}
