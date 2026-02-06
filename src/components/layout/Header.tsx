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
            fontFamily: "'Overpass Mono', monospace",
            fontSize: '24px',
            fontWeight: 700,
            color: '#0033FF',
            textTransform: 'lowercase',
            marginLeft: '48px',
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
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 10H16M16 10L11 5M16 10L11 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Burger Menu */}
      <button
        onClick={toggleMobileMenu}
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
        aria-label="Toggle menu"
      >
        <span style={{ width: '40px', height: '3px', backgroundColor: '#0033FF', borderRadius: '2px' }}></span>
        <span style={{ width: '40px', height: '3px', backgroundColor: '#0033FF', borderRadius: '2px' }}></span>
      </button>
    </header>
  )
}
