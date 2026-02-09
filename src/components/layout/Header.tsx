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
        <a href="/" style={{ flexShrink: 0, textDecoration: 'none' }}>
          <img
            src={`${basePath}/images/Grid&Dot.svg`}
            alt="Grid&Dot"
            className="header-logo-img"
            style={{ height: '24px', width: 'auto' }}
          />
        </a>

        {/* Tagline */}
        <span
          className="header-tagline"
          style={{
            fontFamily: 'var(--font-overpass), monospace',
            fontSize: '24px',
            fontWeight: 600, // SemiBold
            letterSpacing: '0.02em', // 2%
            color: '#0033FF',
            textTransform: 'lowercase',
            marginLeft: '100px', /* Increased from 48px */
            whiteSpace: 'nowrap',
          }}
        >
          — extended expertise
        </span>
      </div>

      {/* Book a Call Button - Desktop */}
      <button
        onClick={() => scrollTo('#section-7', '25%')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 24px',
          marginRight: '48px',
          backgroundColor: 'transparent',
          border: '2px solid #0033FF',
          borderRadius: '0',
          color: '#0033FF',
          fontFamily: 'Scandia, sans-serif',
          fontSize: '20px',
          fontWeight: 700,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'all 150ms ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#0033FF';
          e.currentTarget.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#0033FF';
        }}
        className="book-call-btn hidden md:flex"
      >
        Book a Call
        <img
          src={`${basePath}/images/Arrow 6.svg`}
          alt=""
          style={{ width: '20px', height: '20px' }}
        />
      </button>

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
