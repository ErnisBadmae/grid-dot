'use client'

import { useApp } from '@/contexts/AppContext'
import { basePath } from '@/lib/basePath'

export default function Header() {
  const { mobileMenuOn, toggleMobileMenu, scrollTo } = useApp()

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
      className={mobileMenuOn ? 'mobile-menu-on' : ''}
    >
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
          <span className="tagline-active">[ extended expertise ]</span>
          <span className="tagline-separator">|</span>
          <a href={`${basePath}/not-found`} className="tagline-link tagline-atelier">
            atelier
          </a>
        </div>
      </div>

      {/* Book a Call Button - Desktop */}
      <button
        onClick={() => window.open('https://calendly.com/et-gridanddot/30min', '_blank')}
        className="book-call-btn hidden md:flex"
      >
        Book a Call
        <img
          src={`${basePath}/images/Arrow 6.svg`}
          alt=""
          className="book-call-arrow"
        />
      </button>

      <style jsx>{`
        /* Tagline Styles */
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
            color: #0033FF;
        }
        .tagline-separator {
            color: #0033FF;
        }
        .tagline-link {
            text-decoration: none;
            cursor: pointer;
            transition: text-decoration 0.2s ease;
        }
        .tagline-link.tagline-atelier {
            color: #FF6B00;
        }
        .tagline-link.tagline-atelier:hover {
            text-decoration: underline;
            text-decoration-color: #FF6B00;
            text-decoration-thickness: 2px;
            text-underline-offset: 4px;
        }

        /* Button Styles */
        .book-call-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 24px;
          margin-right: 48px;
          background-color: transparent;
          border: 2px solid #0033FF;
          border-radius: 0;
          color: #0033FF;
          font-family: Scandia, sans-serif;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: all 150ms ease;
        }
        .book-call-btn:hover {
          background-color: #0033FF;
          color: #FFFFFF;
        }
        
        /* Arrow Styles */
        .book-call-arrow {
            width: 20px; 
            height: 20px; 
            transition: filter 150ms ease;
        }
        .book-call-btn:hover .book-call-arrow {
          filter: brightness(0) invert(1);
        }
      `}</style>

      {/* Burger Menu */}
      <button
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: '8px',
          width: '40px',
          height: '36px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span style={{ width: '40px', height: '3px', backgroundColor: '#0033FF', borderRadius: '2px' }}></span>
        <span style={{ width: '40px', height: '3px', backgroundColor: '#0033FF', borderRadius: '2px' }}></span>
      </button>
    </header>
  )
}
