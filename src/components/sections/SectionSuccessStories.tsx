'use client';

import React, { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { basePath } from '@/lib/basePath';

interface GridRow {
  label: string;
  content: string[];
}

interface CaseStudy {
  title: string;
  subtitle: string;
  tags: string[];
  clientContextP1: string;
  clientContextP2: string;
  grid: GridRow[];
  closingP1: string;
  closingP2?: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Global Beauty & Personal Care Company',
    subtitle: 'global platform modernisation, omni-channel expansion, brand experience innovation',
    tags: ['data', 'product', 'ux', 'delivery', 'cms', 'cx', 'data-visualisation', 'amazon', 'user-tools', 'modernisation', 'brands', 'global', 'emea', 'apac'],
    clientContextP1: 'Global leader in luxury beauty. Operating across owned platforms, retail partners, and marketplaces, must modernise at pace — while protecting brand consistency, measurement integrity, and governance across regions.',
    clientContextP2: 'For many years our Extended Expertise has empowered the client teams to deliver key global and regional initiatives across multiple markets and regions, aligning to global standards and customer experience excellence.',
    grid: [
      {
        label: 'Global Data',
        content: ['data stream and GA4 architecture creation, data visualisation for non-technical stakeholder enablement and accessibility.']
      },
      {
        label: 'Global Product',
        content: ['Amazon/brand integration across marketplace and brands, establishing channel expansion.']
      },
      {
        label: 'Regional Delivery\nEMEA, APAC',
        content: ['platform modernisation and CMS delivery to support regional speed and consistency.']
      },
      {
        label: 'Brand Experience',
        content: ['user tool innovation, creating a richer, more personalised customer experiences.']
      }
    ],
    closingP1: 'Our long tenure has allowed us to bring institutional knowledge, established ways of working, and deliver high impact collaboration. Enforced by expertise, agility and scalability, the client continues to benefit from a reliable, continuously embedded delivery capability - supporting initiative after initiative with consistent governance, stronger measurement foundations, and the confidence that critical programmes can progress at pace without sacrificing quality or continuity on a global scale.'
  },
  {
    title: 'Digital Banking & Premium Current Accounts',
    subtitle: 'partner bonus journey optimisation, premium experience clarity, conversion enablement',
    tags: ['ux', 'product', 'ba', 'qa', 'delivery', 'cx', 'product-design', 'journey', 'conversion', 'partners', 'emea'],
    clientContextP1: 'Digital bank leader operating a premium subscription model across EMEA markets. As Premium adoption scaled, partner-bonus benefits became a critical value driver — yet customer journeys across discovery, eligibility, activation, and redemption required greater clarity, consistency, and operational alignment.',
    clientContextP2: 'Premium customers expect seamless access to benefits they pay for. The client needed to strengthen the end‑to‑end partner bonus experience — reducing friction, improving transparency, and coordinating across internal product teams and external partner dependencies without disrupting ongoing delivery velocity.',
    grid: [
      {
        label: 'UX & Product',
        content: [
          '"I pay for a Premium account — how do I quickly see, understand, and use my benefits?" Redesigned discovery within the Premium area, clarified eligibility logic and benefit states, and streamlined activation and redemption journeys to minimise friction and drop‑off.'
        ]
      },
      {
        label: 'CX & Journey Design',
        content: [
          'Created clearer status communication: what is available, what has been claimed, what is pending, and what has expired.',
          'Resolved edge cases including partial eligibility, failed activations, expired offers, and partner handoffs — ensuring continuity across touchpoints and reducing ambiguity in the experience.'
        ]
      },
      {
        label: 'Delivery, BA & QA',
        content: [
          'Aligned cross-functional teams and partner dependencies through structured BA governance and quality gates.',
          'Standardised UI states, tracking logic, and copy frameworks to ensure consistency across releases — enabling smoother deployments and stronger measurement foundations.'
        ]
      }
    ],
    closingP1: 'Extended Expertise enabled the establishment of a scalable and repeatable delivery model for Premium experience and partner integrations — strengthening user clarity, advocacy, conversion performance, and cross‑functional alignment across teams and markets.',
    closingP2: 'Through integrated UX, product, BA, QA, and delivery expertise, the client benefits from a dependable, continuously evolving capability — supporting new partner onboarding, improved governance, clearer measurement frameworks, and the confidence that Premium value can scale without compromising experience quality, operational control, or customer trust.'
  },
  {
    title: 'Fintech & Payment Platform',
    subtitle: 'Financial Crime Behaviour Intelligence: llm‑assisted analytics, scalable risk decision support, compliance‑grade model governance',
    tags: ['data', 'product', 'delivery', 'llm', 'mlops', 'risk', 'compliance', 'governance', 'data-quality', 'casemanagement', 'model-monitoring', 'emea', 'na'],
    clientContextP1: 'Fintech operating at significant transaction scale across EMEA and North America, processing high volumes of activity spanning current accounts, transfers, and payments. Compliance, Risk, and Data teams are required to transform behavioural data into defensible, actionable risk signals — aligned to evolving regulatory expectations and regional governance standards.',
    clientContextP2: 'As operational scale increased, traditional rule-based approaches and manual review workflows faced limitations. The client sought to enhance behaviour intelligence through LLM‑enabled analytics and data science — improving detection quality while preserving auditability, explainability, and regulatory control.',
    grid: [
      {
        label: 'Data & Behaviour\nIntelligence',
        content: [
          'Designed LLM‑assisted behavioural analysis across large‑scale activity streams, strengthening signal quality and contextual risk interpretation.',
          'Enhanced data‑quality controls and traceability to ensure outputs remained defensible, auditable, and aligned with fincrime standards.'
        ]
      },
      {
        label: 'Product & Risk\nDecisioning',
        content: [
          'Translated model intelligence into practical decision‑support tools embedded within case‑management workflows.',
          'Enabled clearer prioritisation, faster reviews, and consistent risk handling — balancing advanced analytics with regulatory explainability.'
        ]
      },
      {
        label: 'Delivery, MLOps &\nGovernance',
        content: [
          'Established scalable MLOps foundations including monitoring, performance oversight, and structured governance controls.',
          'Aligned regional compliance expectations (EMEA and NA) within a unified delivery model — ensuring sustainability, audit readiness, and operational resilience.'
        ]
      }
    ],
    closingP1: 'Embedded data, product, and delivery capability enabled the client to scale behavioural intelligence without eroding governance integrity or regulatory confidence.',
    closingP2: 'By combining LLM innovation with disciplined MLOps, compliance alignment, and operational integration, the organisation strengthened risk detection quality while maintaining control, transparency, and delivery momentum — ensuring financial crime controls could evolve at pace with business growth and regulatory complexity.'
  }
  // Uncomment to add more cards:
  // {
  //   title: '',
  //   subtitle: '',
  //   tags: [],
  //   clientContextP1: '',
  //   clientContextP2: '',
  //   grid: [],
  //   closingP1: ''
  // },
  // {
  //   title: '',
  //   subtitle: '',
  //   tags: [],
  //   clientContextP1: '',
  //   clientContextP2: '',
  //   grid: [],
  //   closingP1: ''
  // }
];

export default function SectionSuccessStories() {
  const { scrollTo } = useApp();
  const [expandedCards, setExpandedCards] = useState<boolean[]>(
    CASE_STUDIES.map(() => false)
  );

  const toggleCard = (index: number) => {
    setExpandedCards(prev => prev.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <section
      id="section-success-stories"
      style={{
        position: 'relative',
        padding: '100px 73px',
        backgroundColor: '#F2F0EF'
      }}
    >
      <style jsx>{`
        @media (min-width: 1701px) and (max-width: 1800px) {
          .bg-svg { top: -500px !important; }
        }
        @media (min-width: 1801px) and (max-width: 1900px) {
          .bg-svg { top: -500px !important; }
        }
        @media (min-width: 1901px) and (max-width: 2000px) {
          .bg-svg { top: -550px !important; }
        }
        @media (min-width: 2001px) and (max-width: 2200px) {
          .bg-svg { top: -570px !important; }
        }
          @media (min-width: 2101px) and (max-width: 2500px) {
          .bg-svg { top: -620px !important; }
        }
        @media (min-width: 2201px) and (max-width: 2500px) {
          .bg-svg { top: -650px !important; }
        }
        @media (max-width: 639px) {
          #section-success-stories {
            padding: 60px 20px !important;
          }
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

      {/* Background Animated SVG */}
      <img
        src={`${basePath}/images/text-on-path-4-desktop.svg`}
        alt=""
        className="desktop-only bg-svg"
        style={{
          position: 'absolute',
          top: '-450px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          minWidth: '1440px',
          height: 'auto',
          pointerEvents: 'none',
          zIndex: 0,
          maxWidth: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0' }}>

        {/* Mobile Header */}
        <h2
          className="mobile-only"
          style={{
            fontFamily: 'Scandia, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            color: '#0B1215',
            lineHeight: 1.1,
            marginBottom: '32px'
          }}
        >
          Success Stories —<br />
          Case Highlights
        </h2>

        {/* Desktop Header */}
        <h2
          className="desktop-only"
          style={{
            fontFamily: 'Scandia, sans-serif',
            fontSize: '48px',
            fontWeight: 700,
            color: '#0B1215',
            lineHeight: 1.1,
            marginBottom: '60px'
          }}
        >
          Success Stories —<br />
          Case Highlights
        </h2>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {CASE_STUDIES.map((study, index) => {
            const isExpanded = expandedCards[index];
            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#F8F8F8',
                  padding: '30px',
                  position: 'relative'
                }}
              >
                {/* Title & Subtitle — always visible */}
                <h3
                  style={{
                    fontFamily: 'Scandia, sans-serif',
                    fontSize: '24px',
                    fontWeight: 500,
                    color: '#0B1215',
                    marginBottom: '8px'
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
                    marginBottom: '32px'
                  }}
                >
                  {study.subtitle}
                </p>

                {/* Tags */}
                <div className={!isExpanded ? 'tags-collapsed' : ''} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  {study.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: '#0033FF',
                        color: '#FFFFFF',
                        padding: '6px 16px',
                        borderRadius: '999px',
                        fontFamily: 'Scandia, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Text preview — always visible, 2 lines */}
                <h4
                  className="context-label"
                  style={{
                    fontFamily: 'Scandia, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#0B1215',
                    marginBottom: '16px'
                  }}
                >
                  Client Context:
                </h4>
                {/* Client Context preview — desktop only, 2-3 lines when collapsed */}
                <div className="context-preview" style={{ position: 'relative', marginBottom: '0' }}>
                  <div
                    style={{
                      maxHeight: isExpanded ? 'none' : '60px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Scandia, sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#0B1215',
                        lineHeight: 1.5,
                        margin: 0
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
                        pointerEvents: 'none'
                      }}
                    />
                  )}
                </div>

                {/* Collapsible Body */}
                <div
                  style={{
                    maxHeight: isExpanded ? '4000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease'
                  }}
                >
                  <div style={{ marginBottom: '16px' }} />
                  {/* P1 visible only on mobile (desktop shows it in preview above) */}
                  <p
                    className="context-p1-mobile"
                    style={{
                      fontFamily: 'Scandia, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#0B1215',
                      lineHeight: 1.5,
                      marginBottom: '16px'
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
                      marginBottom: '48px'
                    }}
                  >
                    {study.clientContextP2}
                  </p>

                  {/* Grid of Details */}
                  <div
                    className="case-study-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(200px, auto) 1fr',
                      rowGap: '32px',
                      columnGap: '32px',
                      marginBottom: '48px'
                    }}
                  >
                    {study.grid.map((row, i) => (
                      <React.Fragment key={i}>
                        <div>
                          <h5
                            style={{
                              fontFamily: 'Scandia, sans-serif',
                              fontSize: '16px',
                              fontWeight: 500,
                              color: '#0B1215',
                              margin: 0,
                              whiteSpace: 'pre-line'
                            }}
                          >
                            {row.label}
                          </h5>
                        </div>
                        <div className="case-study-grid-content">
                          {row.content.map((para, j) => (
                            <p
                              key={j}
                              style={{
                                fontFamily: 'Scandia, sans-serif',
                                fontSize: '16px',
                                fontWeight: 400,
                                color: '#0B1215',
                                margin: j < row.content.length - 1 ? '0 0 12px 0' : 0,
                                lineHeight: 1.5
                              }}
                            >
                              {para}
                            </p>
                          ))}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Closing Text */}
                  <p
                    style={{
                      fontFamily: 'Scandia, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#0B1215',
                      lineHeight: 1.5,
                      marginBottom: study.closingP2 ? '16px' : 0
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
                        margin: 0
                      }}
                    >
                      {study.closingP2}
                    </p>
                  )}
                </div>

                {/* Arrow — bottom right */}
                <div className="card-arrow" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                  <button
                    onClick={() => toggleCard(index)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      src={`${basePath}/images/Arrow 7.svg`}
                      alt=""
                      style={{
                        width: '16px',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div style={{ marginTop: '60px' }}>
          <p
            style={{
              fontFamily: 'Scandia, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#0B1215',
              lineHeight: 1.5,
              marginBottom: '24px',
              maxWidth: '740px'
            }}
          >
            We'd love to show everything — but some projects are confidential.
            Tell us what you're working on and we'll pull together similar work
            we can share.
          </p>
          <button
            onClick={() => scrollTo('#section-contacts', 'start')}
            className="request-case-study-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              fontFamily: 'Scandia, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              color: '#0033FF',
              textDecoration: 'underline',
              textUnderlineOffset: '4px'
            }}
          >
            Request a Case Study
            <svg
              className="case-study-arrow"
              width="20"
              height="20"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: '12px', transition: 'transform 0.2s ease' }}
            >
              <path
                d="M1 13L13 1M13 1H4M13 1V10"
                stroke="#0033FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <style jsx>{`
        .request-case-study-btn:hover .case-study-arrow {
          transform: translate(4px, -4px);
        }
      `}</style>
    </section>
  );
}
