'use client'

import { Fragment } from 'react'
import { basePath } from '@/lib/basePath'
import type { CaseStudy } from './types'

interface SuccessStoriesListProps {
  studies: CaseStudy[]
  expandedCards: boolean[]
  onToggle: (index: number) => void
}

export default function SuccessStoriesList({ studies, expandedCards, onToggle }: SuccessStoriesListProps) {
  return (
    <>
      <style jsx>{`
        @media (max-width: 639px) {
          .context-preview {
            display: none;
          }
          .context-label {
            display: none;
          }
          .case-study-grid {
            grid-template-columns: 1fr !important;
            row-gap: 4px !important;
          }
          .case-study-grid-content {
            margin-bottom: 20px;
          }
          .tags-collapsed {
            max-height: 103px;
            overflow: hidden;
          }
          .card-arrow {
            margin-top: 4px !important;
          }
          .context-p1-mobile {
            display: block !important;
          }
        }
        @media (min-width: 640px) {
          .context-p1-mobile {
            display: none;
          }
        }
      `}</style>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {studies.map((study, index) => {
          const isExpanded = expandedCards[index]

          return (
            <div
              key={study.title}
              style={{
                backgroundColor: '#F8F8F8',
                padding: '30px',
                position: 'relative',
              }}
            >
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

              <div className={!isExpanded ? 'tags-collapsed' : ''} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {study.tags.map((tag) => (
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

              <h4
                className="context-label"
                style={{
                  fontFamily: 'Scandia, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#0B1215',
                  marginBottom: '16px',
                }}
              >
                Client Context:
              </h4>
              <div className="context-preview" style={{ position: 'relative', marginBottom: '0' }}>
                <div
                  style={{
                    maxHeight: isExpanded ? 'none' : '60px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Scandia, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#0B1215',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {study.clientContextP1}
                  </p>
                </div>
                {!isExpanded && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '24px',
                      background: 'linear-gradient(to bottom, transparent, #F8F8F8)',
                      pointerEvents: 'none',
                    }}
                  />
                )}
              </div>

              <div
                style={{
                  maxHeight: isExpanded ? '4000px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}
              >
                <div style={{ marginBottom: '16px' }} />
                <p
                  className="context-p1-mobile"
                  style={{
                    fontFamily: 'Scandia, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#0B1215',
                    lineHeight: 1.5,
                    marginBottom: '16px',
                  }}
                >
                  {study.clientContextP1}
                </p>
                <p
                  style={{
                    fontFamily: 'Scandia, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#0B1215',
                    lineHeight: 1.5,
                    marginBottom: '48px',
                  }}
                >
                  {study.clientContextP2}
                </p>

                <div
                  className="case-study-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(200px, auto) 1fr',
                    rowGap: '32px',
                    columnGap: '32px',
                    marginBottom: '48px',
                  }}
                >
                  {study.grid.map((row) => (
                    <Fragment key={row.label}>
                      <div>
                        <h5
                          style={{
                            fontFamily: 'Scandia, sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            color: '#0B1215',
                            margin: 0,
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {row.label}
                        </h5>
                      </div>
                      <div className="case-study-grid-content">
                        {row.content.map((paragraph, paragraphIndex) => (
                          <p
                            key={`${row.label}-${paragraphIndex}`}
                            style={{
                              fontFamily: 'Scandia, sans-serif',
                              fontSize: '16px',
                              fontWeight: 400,
                              color: '#0B1215',
                              margin: paragraphIndex < row.content.length - 1 ? '0 0 12px 0' : 0,
                              lineHeight: 1.5,
                            }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </Fragment>
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: 'Scandia, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#0B1215',
                    lineHeight: 1.5,
                    marginBottom: study.closingP2 ? '16px' : 0,
                  }}
                >
                  {study.closingP1}
                </p>
                {study.closingP2 && (
                  <p
                    style={{
                      fontFamily: 'Scandia, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#0B1215',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {study.closingP2}
                  </p>
                )}
              </div>

              <div className="card-arrow" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                <button
                  onClick={() => onToggle(index)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={`${basePath}/images/Arrow 7.svg`}
                    alt=""
                    style={{
                      width: '16px',
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
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
