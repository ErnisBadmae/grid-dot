'use client'

import { useState } from 'react'
import { SECTION_2 } from '@/lib/constants'

// Data structure for reuse
const EXPERTISE_DATA = [
  {
    title: 'Product &\nStrategy',
    roles: ['Product Managers', 'Product Analysts', 'Business Analysts (BA)']
  },
  {
    title: 'Experience,\nContent & CMS',
    roles: ['UX / UI Designers', 'CMS Editors', 'Content Specialists']
  },
  {
    title: 'Data &\nArchitecture',
    roles: ['Data Scientists', 'Data Analysts', 'AI Solution Architects']
  },
  {
    title: 'Delivery, Quality\n& Rollout',
    roles: [
      'Producers',
      'QA Specialists',
      'Rollout Managers',
      <>AI QA / Model Validation<br />Specialists</>
    ]
  }
]

export default function Section2() {
  // State for mobile accordion
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="section-2"
      style={{
        position: 'relative',
        padding: '100px 73px 10px',
      }}
    >
      {/* Header row with description */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '40px',
          marginBottom: '80px',
        }}
      >
        <h2
          style={{
            fontFamily: 'Scandia, sans-serif',
            fontWeight: 700,
            color: '#0B1215',
            lineHeight: 1.1,
            margin: 0,
          }}
          className="section-2-title"
        >
          What We Offer —<br />
          Our Expertise
        </h2>

        <div
          style={{
            backgroundColor: '#F8F8F8',
            padding: '50px',
            minHeight: '220px',
            maxWidth: '500px',
            flex: '1 1 300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              fontFamily: "'Overpass Mono', monospace",
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '0em',
              color: '#0B1215',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Our aim is to deliver specialists who are T shaped – this makes projects move faster and delivers better outcomes
          </p>
        </div>
      </div>


      <style jsx>{`
        .section-2-title {
          font-family: 'Scandia', sans-serif;
          font-weight: 700;
          font-size: 48px;
        }
        @media (max-width: 639px) {
          #section-2 {
            padding: 60px 20px !important;
          }
          .section-2-title {
            font-size: 32px !important;
            margin-bottom: 40px !important;
          }
        }
      `}</style>

      {/* Desktop Grid */}
      <div
        className="desktop-only"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          columnGap: '40px',
          rowGap: '40px',
        }}
      >
        {/* Row 1: Categories */}
        {EXPERTISE_DATA.map((item, index) => (
          <div key={`cat-${index}`} style={{ borderBottom: '1px solid #0B1215', paddingBottom: '20px' }}>
            <h3 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215', margin: 0, lineHeight: 1.2 }}>
              {item.title.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h3>
          </div>
        ))}

        {/* Rows 2-5: Roles */}
        {EXPERTISE_DATA.map((item, index) => (
          <div key={`roles-${index}`} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {item.roles.map((role, rIndex) => (
              <div key={rIndex} style={{ fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1215' }}>
                {role}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="mobile-only">
        <div style={{ borderTop: '1px solid #0B1215' }}>
          {EXPERTISE_DATA.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} style={{ borderBottom: '1px solid #0B1215' }}>
                <button
                  onClick={() => toggleAccordion(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Scandia, sans-serif',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#0B1215',
                    }}
                  >
                    {typeof item.title === 'string' ? item.title.replace('\n', ' ') : item.title}
                  </span>
                  <div style={{ position: 'relative', width: '20px', height: '20px' }}>
                    {/* Horizontal line (always visible) */}
                    <span
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '0',
                        width: '100%',
                        height: '2px',
                        backgroundColor: '#0B1215',
                        transform: 'translateY(-50%)',
                      }}
                    />
                    {/* Vertical line (hidden when open) */}
                    <span
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        width: '2px',
                        height: '100%',
                        backgroundColor: '#0B1215',
                        transform: 'translateX(-50%)',
                        opacity: isOpen ? 0 : 1,
                        transition: 'opacity 0.2s',
                      }}
                    />
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-out',
                  }}
                >
                  <div style={{ paddingBottom: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {item.roles.map((role, rIndex) => (
                      <div
                        key={rIndex}
                        style={{
                          fontFamily: 'Scandia, sans-serif',
                          fontSize: '16px', // Requested 16px
                          fontWeight: 700,
                          color: '#0B1215',
                        }}
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
