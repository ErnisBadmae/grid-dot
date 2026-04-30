'use client'

import { Fragment, useState } from 'react'
import { basePath } from '@/lib/basePath'
import type { CaseStudy } from './types'

interface SuccessStoriesListProps {
  studies: CaseStudy[]
  expandedCards: boolean[]
  onToggle: (index: number) => void
}

export default function SuccessStoriesList({ studies, expandedCards, onToggle }: SuccessStoriesListProps) {
  const [mobileSubOpen, setMobileSubOpen] = useState<boolean[][]>(
    studies.map(s => new Array(s.grid.length + 1).fill(false))
  )

  const toggleMobileSub = (cardIndex: number, itemIndex: number) => {
    setMobileSubOpen(prev =>
      prev.map((card, ci) =>
        ci === cardIndex
          ? card.map((v, ii) => (ii === itemIndex ? !v : v))
          : card
      )
    )
  }

  return (
    <>
      <style jsx>{`
        @media (max-width: 639px) {
          .context-preview { display: none; }
          .context-label { display: none; }
          .desktop-body { display: none !important; }
          .mobile-body { display: block !important; }
          .tags-collapsed { max-height: 103px; overflow: hidden; }
          .card-arrow { margin-top: 16px !important; }
          .case-card { padding-bottom: 16px !important; }
        }
        @media (min-width: 640px) {
          .mobile-body { display: none !important; }
          .desktop-body { display: block; }
          .case-study-grid-content { margin-bottom: 0; }
        }
      `}</style>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {studies.map((study, cardIndex) => {
          const isExpanded = expandedCards[cardIndex]

          const accordionItems = [
            { label: 'Client Context', content: [study.clientContextP1, study.clientContextP2] },
            ...study.grid.map(row => ({ label: row.label.replace('\n', ' '), content: row.content }))
          ]

          return (
            <div
              key={study.title}
              className="case-card"
              style={{ backgroundColor: '#F8F8F8', padding: '30px', position: 'relative' }}
            >
              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Scandia, sans-serif',
                  fontSize: '24px',
                  fontWeight: 500,
                  color: '#0B1215',
                  marginBottom: '8px',
                }}
              >
                {study.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: 'Scandia, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#0B1215',
                  marginBottom: '32px',
                }}
              >
                {study.subtitle}
              </p>

              {/* Tags */}
              <div
                className={!isExpanded ? 'tags-collapsed' : ''}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '8px',  }}
              >
                {study.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: '#0033FF',
                      color: '#FFFFFF',
                      padding: '6px 16px',
                      borderRadius: '999px',
                      fontFamily: 'Scandia, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ── DESKTOP body ── */}
              <div className="desktop-body">
                <h4
                  className="context-label"
                  style={{
                    fontFamily: 'Scandia, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#0B1215',
                    marginTop: '24px',
                    marginBottom: '16px',
                  }}
                >
                  Client Context:
                </h4>

                {/* Preview (2-3 lines) */}
                <div className="context-preview" style={{ position: 'relative', marginBottom: '0' }}>
                  <div style={{ maxHeight: isExpanded ? 'none' : '60px', overflow: 'hidden', position: 'relative' }}>
                    <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', lineHeight: 1.5, margin: 0 }}>
                      {study.clientContextP1}
                    </p>
                  </div>
                  {!isExpanded && (
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '24px', background: 'linear-gradient(to bottom, transparent, #F8F8F8)', pointerEvents: 'none' }} />
                  )}
                </div>

                {/* Desktop collapsible */}
                <div style={{ maxHeight: isExpanded ? '4000px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                  <div style={{ marginBottom: '16px' }} />
                  <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', lineHeight: 1.5, marginBottom: '48px' }}>
                    {study.clientContextP2}
                  </p>

                  <div
                    className="case-study-grid"
                    style={{ display: 'grid', gridTemplateColumns: '220px 1fr', rowGap: '32px', columnGap: '32px', marginBottom: '48px' }}
                  >
                    {study.grid.map(row => (
                      <Fragment key={row.label}>
                        <div>
                          <h5 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 500, color: '#0B1215', margin: 0, whiteSpace: 'pre-line' }}>
                            {row.label}
                          </h5>
                        </div>
                        <div className="case-study-grid-content">
                          {row.content.map((paragraph, pi) => (
                            <p
                              key={`${row.label}-${pi}`}
                              style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', margin: pi < row.content.length - 1 ? '0 0 12px 0' : 0, lineHeight: 1.5 }}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </Fragment>
                    ))}
                  </div>

                  <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', lineHeight: 1.5, marginBottom: study.closingP2 ? '16px' : 0 }}>
                    {study.closingP1}
                  </p>
                  {study.closingP2 && (
                    <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', lineHeight: 1.5, margin: 0 }}>
                      {study.closingP2}
                    </p>
                  )}
                </div>
              </div>

              {/* ── MOBILE body ── */}
              <div className="mobile-body" style={{ display: 'none' }}>
                <div style={{ maxHeight: isExpanded ? '4000px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                  <div style={{ borderTop: '1px solid #0B1215', marginTop: '16px' }}>
                    {accordionItems.map((item, itemIndex) => {
                      const isItemOpen = mobileSubOpen[cardIndex]?.[itemIndex] ?? false
                      return (
                        <div key={item.label} style={{ borderBottom: '1px solid #0B1215' }}>
                          <button
                            onClick={() => toggleMobileSub(cardIndex, itemIndex)}
                            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                          >
                            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '18px', fontWeight: 700, color: '#0B1215' }}>
                              {item.label}
                            </span>
                            <div style={{ position: 'relative', width: '20px', height: '20px', flexShrink: 0 }}>
                              <span style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '2px', backgroundColor: '#0B1215', transform: 'translateY(-50%)' }} />
                              <span style={{ position: 'absolute', top: 0, left: '50%', width: '2px', height: '100%', backgroundColor: '#0B1215', transform: 'translateX(-50%)', opacity: isItemOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
                            </div>
                          </button>
                          <div style={{ maxHeight: isItemOpen ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '20px' }}>
                              {item.content.map((para, pi) => (
                                <p key={pi} style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', lineHeight: 1.5, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }}>
                                  {para}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Closing text */}
                  <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', lineHeight: 1.5, marginTop: '24px', marginBottom: study.closingP2 ? '16px' : 0 }}>
                    {study.closingP1}
                  </p>
                  {study.closingP2 && (
                    <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, color: '#0B1215', lineHeight: 1.5, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }}>
                      {study.closingP2}
                    </p>
                  )}
                  <div style={{ height: '24px' }} />
                </div>
              </div>

              {/* Arrow — bottom right */}
              <div className="card-arrow" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                <button
                  onClick={() => onToggle(cardIndex)}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <img
                    src={`${basePath}/images/Arrow 7.svg`}
                    alt=""
                    style={{ width: '16px', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                  />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
