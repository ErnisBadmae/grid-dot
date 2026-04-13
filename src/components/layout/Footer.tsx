'use client'

import React from 'react'
import { CONTACTS } from '@/lib/constants'
import { basePath } from '@/lib/basePath'

const linkStyle: React.CSSProperties = {
  fontFamily: "'Overpass Mono', monospace",
  fontSize: '16px',
  fontWeight: 600,
  letterSpacing: '0.02em',
  color: '#F8F8F8',
  textDecoration: 'none',
}

export default function Footer() {
  return (
    <footer
      id="page-footer"
      style={{
        backgroundColor: '#0B1215',
        padding: '100px 73px 60px',
        color: '#F8F8F8',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
        <style jsx>{`
          .footer-header {
            font-size: 24px;
            margin-bottom: 80px;
          }
          .footer-main {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 40px;
          }
          .footer-legal {
            padding-top: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          @media (max-width: 639px) {
            .footer-header {
              font-size: 32px !important;
              margin-bottom: 40px !important;
            }
            .footer-main {
              flex-direction: column !important;
              gap: 40px !important;
              margin-bottom: 48px !important;
            }
            .footer-nav {
              display: flex;
              flex-direction: column;
              gap: 24px;
            }
            .footer-meta {
              display: flex;
              flex-direction: column;
              gap: 16px;
            }
            .footer-legal {
              padding-top: 24px;
              gap: 6px;
            }
          }
          a:hover {
            text-decoration: underline !important;
            text-underline-offset: 4px;
          }
        `}</style>

        {/* Header */}
        <h2
          className="footer-header"
          style={{
            fontFamily: 'Scandia, sans-serif',
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#F8F8F8',
            lineHeight: 1.1,
            textAlign: 'left',
          }}
        >
          Tech to tech.<br />
          Expertise speaks directly.
        </h2>

        {/* Main content */}
        <div className="footer-main">
          {/* Nav links */}
          <div className="footer-nav" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <a href="#section-1" style={linkStyle}>Why Extended Expertise</a>
            <a href="#section-2" style={linkStyle}>What We Offer — Our Expertise</a>
            <a href="#section-3" style={linkStyle}>How It Works — Simple & Transparent</a>
            <a href="#section-success-stories" style={linkStyle}>Success Stories — Case Highlights</a>
            <a href="#section-commitment" style={linkStyle}>Our Commitment</a>
          </div>

          {/* Email */}
          <a href={`mailto:${CONTACTS.email}`} style={linkStyle}>
            {CONTACTS.email}
          </a>

          {/* Privacy Policy */}
          <a
            href={`${basePath}/privacy`}
            style={{ ...linkStyle, textDecoration: 'underline', textUnderlineOffset: '4px' }}
          >
            Privacy Policy
          </a>
        </div>

        {/* Legal */}
        <div className="footer-legal">
          <p style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, color: '#F8F8F8', margin: 0, letterSpacing: '0.02em' }}>
            © 2026 GRID&amp;DOT LTD. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '12px', fontWeight: 400, color: '#F8F8F8', margin: 0, letterSpacing: '0.02em' }}>
            Registered in England and Wales. Company No. 13980387. Registered Office: 6 South Molton Street, London, England, W1K 5QF
          </p>
        </div>
      </div>
    </footer>
  )
}
