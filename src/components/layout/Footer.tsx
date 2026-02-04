'use client'

import React from 'react'

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
        {/* Header */}
        <h2
          style={{
            fontFamily: 'Scandia, sans-serif',
            fontSize: '24px',
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#F8F8F8',
            lineHeight: 1.1,
            marginBottom: '80px',
            textAlign: 'left',
          }}
        >
          Tech to tech.<br />
          Expertise speaks directly.
        </h2>

        {/* Links Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Row 1 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <a href="#section-1" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 700, color: '#F8F8F8', textDecoration: 'none' }}>
              Why Extended Expertise
            </a>
            <span style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 700, color: '#F8F8F8', textAlign: 'right' }}>
              Grid & Dot ©️
            </span>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <a href="#section-2" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 700, color: '#F8F8F8', textDecoration: 'none' }}>
              What We Offer — Our Expertise
            </a>
            <a href="mailto:engagement@gridanddot.com" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 700, color: '#F8F8F8', textDecoration: 'none', textAlign: 'right' }}>
              engagement@gridanddot.com
            </a>
          </div>

          {/* Row 3 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <a href="#section-3" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 700, color: '#F8F8F8', textDecoration: 'none' }}>
              How It Works — Simple & Transparent
            </a>
            <span style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 700, color: '#F8F8F8', textAlign: 'right' }}>
              Mayfair, London
            </span>
          </div>

          {/* Row 4 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <a href="#section-success-stories" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 700, color: '#F8F8F8', textDecoration: 'none' }}>
              Success Stories — Case Highlights
            </a>
            <a href="/privacy" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 700, color: '#F8F8F8', textDecoration: 'underline', textUnderlineOffset: '4px', textAlign: 'right' }}>
              Privacy Policy
            </a>
          </div>

          {/* Row 5 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <a href="#section-commitment" style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 700, color: '#F8F8F8', textDecoration: 'none' }}>
              Our Commitment
            </a>
            {/* Empty right side */}
          </div>

        </div>
      </div>
    </footer>
  )
}
