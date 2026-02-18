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

                {/* Atelier Tagline */}
                <a href={`${basePath}/`} className="header-tagline atelier-tagline">
                    — atelier
                </a>
            </div>

            <style jsx>{`
        .header-tagline {
          font-family: var(--font-overpass), monospace;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #FF6B00;
          text-transform: lowercase;
          margin-left: 100px;
          white-space: nowrap;
          transition: text-decoration 0.2s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .header-tagline:hover {
          text-decoration: underline;
          text-decoration-color: #FF6B00;
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
        }
      `}</style>
        </header>
    )
}
