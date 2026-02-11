'use client'

import React from 'react'
import { basePath } from '@/lib/basePath'

export default function Footer() {
  return (
    <footer
      id="page-footer"
      style={{
        backgroundColor: '#0B1215',
        padding: '100px 73px',
        color: '#F8F8F8',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
        <style jsx>{`
          .footer-header {
            font-size: 24px;
            margin-bottom: 80px;
          }
          .desktop-footer-links {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .mobile-footer-links {
            display: none;
          }
          @media (max-width: 639px) {
            .footer-header {
              font-size: 20px !important; /* Smaller on mobile? Or larger? Screenshot looks large relative to body. Let's try 32px based on pattern, or keep 24px if it fits. Actually "Tech to tech" looks big in screenshot. */
              font-size: 32px !important;
              margin-bottom: 40px !important;
            }
            .desktop-footer-links {
              display: none !important;
            }
            .mobile-footer-links {
              display: flex !important;
              flex-direction: column;
              gap: 40px;
            }
            .mobile-link-group {
              display: flex;
              flex-direction: column;
              gap: 24px;
              text-align: left; /* Ensure text is left aligned */
            }
            .mobile-footer-link {
              text-decoration: none;
            }
            /* Hover effects */
            a:hover {
                text-decoration: underline !important;
                text-underline-offset: 4px;
            }
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

        {/* Desktop Links Grid */}
        <div className="desktop-footer-links">
          {/* Row 1 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <a href="#section-1" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'none' }}>
              Why Extended Expertise
            </a>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <a href="#section-2" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'none' }}>
              What We Offer — Our Expertise
            </a>
            <span style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textAlign: 'right' }}>
              Grid & Dot &copy;
            </span>
          </div>

          {/* Row 3 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <a href="#section-3" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'none' }}>
              How It Works — Simple & Transparent
            </a>
            <a href="mailto:engagement@gridanddot.com" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'none', textAlign: 'right' }}>
              engagement@gridanddot.com
            </a>
          </div>

          {/* Row 4 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <a href="#section-success-stories" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'none' }}>
              Success Stories — Case Highlights
            </a>
            <span style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textAlign: 'right' }}>
              Mayfair, London
            </span>
          </div>

          {/* Row 5 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <a href="#section-commitment" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'none' }}>
              Our Commitment
            </a>
            <a href={`${basePath}/privacy`} style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'underline', textUnderlineOffset: '4px', textAlign: 'right' }}>
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Mobile Links Grid */}
        <div className="mobile-footer-links">
          <div className="mobile-link-group">
            <a href="#section-1" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'none' }}>Why Extended Expertise</a>
            <a href="#section-2" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'none' }}>What We Offer — Our Expertise</a>
            <a href="#section-3" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'none' }}>How It Works — Simple & Transparent</a>
            <a href="#section-success-stories" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'none' }}>Success Stories — Case Highlights</a>
            <a href="#section-commitment" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'none' }}>Our Commitment</a>
          </div>

          <div className="mobile-link-group" style={{ gap: '16px' }}>
            <a href="mailto:engagement@gridanddot.com" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              engagement@gridanddot.com
            </a>
            <span style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8' }}>
              Mayfair, London
            </span>
          </div>

          <div className="mobile-link-group">
            <a href={`${basePath}/privacy`} style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F8F8', textDecoration: 'none' }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
