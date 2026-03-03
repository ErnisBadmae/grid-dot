'use client'

import { basePath } from '@/lib/basePath'

export default function AtelierHeader() {
    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                height: '88px',
                padding: '0 73px',
                backgroundColor: '#F2F0EF',
                borderBottom: '1px solid #656565',
            }}
        >
            {/* Using header-brand-group so globals.css mobile styles apply automatically */}
            <div className="header-brand-group" style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
                {/* Logo */}
                <a href={`${basePath}/`} style={{ flexShrink: 0, textDecoration: 'none' }}>
                    <img
                        src={`${basePath}/images/Grid&Dot.svg`}
                        alt="Grid&Dot"
                        className="header-logo-img"
                        style={{ height: '24px', width: 'auto' }}
                    />
                </a>

                {/* Tagline Navigation */}
                <div className="header-tagline">
                    <a href={`${basePath}/`} className="tagline-link tagline-ee">
                        extended expertise
                    </a>
                    <span className="tagline-separator">|</span>
                    <span className="tagline-active">[ atelier ]</span>
                </div>
            </div>

            <style jsx>{`
        .header-tagline {
            display: flex;
            align-items: center;
            gap: 16px;
            font-family: var(--font-overpass), monospace;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 0.02em;
            text-transform: lowercase;
            margin-left: 100px;
            white-space: nowrap;
        }
        .tagline-active {
            color: #FF6B00;
        }
        .tagline-separator {
            color: #0033FF;
        }
        .tagline-link {
            text-decoration: none;
            cursor: pointer;
            transition: text-decoration 0.2s ease;
        }
        .tagline-link.tagline-ee {
            color: #0033FF;
        }
        .tagline-link.tagline-ee:hover {
            text-decoration: underline;
            text-decoration-color: #0033FF;
            text-decoration-thickness: 2px;
            text-underline-offset: 4px;
        }
      `}</style>
        </header>
    )
}
