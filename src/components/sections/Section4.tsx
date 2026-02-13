'use client'

import { useApp } from '@/contexts/AppContext'
import { SECTION_4 } from '@/lib/constants'
import { basePath } from '@/lib/basePath'

export default function Section4() {
  const { scrollTo } = useApp()

  return (
    <section
      id="section-4"
      style={{
        position: 'relative',
        display: 'block',
        width: '100%',
        padding: '30px 73px 80px',
      }}
    >
      {/* Desktop: Responsive SVG Hero Text */}
      <picture
        className="desktop-only"
        style={{
          display: 'block',
          width: '100%',
          maxWidth: 'calc(100% - 146px)', // Account for 73px padding on each side
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        <source media="(min-width: 2560px)" srcSet={`${basePath}/images/assemble-your-team-with-us-w2560.svg`} />
        <source media="(min-width: 1920px)" srcSet={`${basePath}/images/assemble-your-team-with-us-w1920.svg`} />
        <source media="(min-width: 1728px)" srcSet={`${basePath}/images/assemble-your-team-with-us-w1728.svg`} />
        <source media="(min-width: 1512px)" srcSet={`${basePath}/images/assemble-your-team-with-us-w1512.svg`} />
        <img
          src={`${basePath}/images/assemble-your-team-with-us-w1440.svg`}
          alt="Assemble your team with us"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </picture>

      {/* Mobile: Original HTML Text */}
      <div className="mobile-only" dangerouslySetInnerHTML={{ __html: SECTION_4.slogan }} style={{ position: 'relative', zIndex: 10 }} />

      <img
        id="text-on-path-1-desktop"
        className="text-on-path"
        src={`${basePath}/images/text-on-path-new-desktop.svg`}
        alt=""
        style={{ top: '0px', zIndex: 0 /* Changed from -1 to 0 to sit above bg but below content? Or 10? User said white block covers it. If white block is Section 1, and Section 4 is Relative... actually, let's try 10 and pointer-events-none */, left: '0', width: '100%', pointerEvents: 'none' }}
      />
      {/* Mobile Marquee 1 - Inline Animated SVG */}
      <svg
        id="text-on-path-1-mobile"
        className="text-on-path mobile-only"
        width="390"
        height="17"
        viewBox="0 0 390 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: '40px', left: '0', width: '100%', zIndex: 20, pointerEvents: 'none' }}
      >
        <rect width="1200" height="19" fill="#9AC2E4" />
        <defs>
          <path id="text-path-mobile-1" d="M0 11.5H1200" />
        </defs>
        <text fill="#0033FF" fontSize="14" fontFamily="var(--font-overpass)" fontWeight="400" letterSpacing="0.05em" dominantBaseline="middle">
          <textPath href="#text-path-mobile-1" startOffset="0%">
            / Product / Design / Frontend / Backend / QA / Content / CMS / Data / PM / Product / Design / Frontend / Backend / QA / Content / CMS / Data / PM / Product / Design / Frontend / Backend / QA / Content / CMS / Data / PM / Product / Design / Frontend / Backend / QA / Content / CMS / Data / PM
            <animate attributeName="startOffset" from="0%" to="-100%" dur="30s" repeatCount="indefinite" />
          </textPath>
        </text>
      </svg>
      {/* Mobile Marquee 2 - Inline Animated SVG */}
      <svg
        id="text-on-path-2-mobile"
        className="text-on-path mobile-only"
        width="390"
        height="17"
        viewBox="0 0 390 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: '340px', left: '0', width: '100%', zIndex: 20, pointerEvents: 'none' }}
      >
        <rect width="1200" height="19" fill="#9AC2E4" />
        <defs>
          <path id="text-path-mobile-2" d="M0 11.5H1200" />
        </defs>
        <text fill="#0033FF" fontSize="14" fontFamily="var(--font-overpass)" fontWeight="400" letterSpacing="0.05em" dominantBaseline="middle">
          <textPath href="#text-path-mobile-2" startOffset="0%">
            / Product / Design / Frontend / Backend / QA / Content / CMS / Data / PM / Product / Design / Frontend / Backend / QA / Content / CMS / Data / PM / Product / Design / Frontend / Backend / QA / Content / CMS / Data / PM / Product / Design / Frontend / Backend / QA / Content / CMS / Data / PM
            <animate attributeName="startOffset" from="0%" to="-100%" dur="30s" repeatCount="indefinite" />
          </textPath>
        </text>
      </svg>

      {/* Bottom content - two columns */}
      <div
        className="desktop-only"
        style={{
          display: 'flex',
          justifyContent: 'flex-start', // Left aligned
          alignItems: 'flex-start',
          gap: '80px', // Increased gap
          marginTop: '60px',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Left side - CTA */}
        <div style={{ maxWidth: '450px', flex: '1 1 300px' }}>
          <p
            style={{
              fontFamily: 'Scandia, sans-serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              color: '#656565',
              margin: '0 0 24px 0',
              lineHeight: 1.2,
            }}
          >
            We don't sell CVs.
          </p>
          <p
            style={{
              fontFamily: 'Scandia, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#0B1215',
              margin: '0 0 32px 0',
              lineHeight: 1.2,
            }}
          >
            We curate<br />specialists who<br />deliver.
          </p>
          <button
            onClick={() => window.open('https://calendly.com/et-gridanddot/30min', '_blank')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 48px',
              backgroundColor: 'transparent',
              border: '2px solid #0033FF',
              borderRadius: '0',
              color: '#0033FF',
              fontFamily: 'Scandia, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              cursor: 'pointer',
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
          >
            Let's Talk
          </button>
        </div>

        {/* Right side - Description box */}
        <div
          style={{
            backgroundColor: '#F8F8F8',
            padding: '40px',
            maxWidth: '450px',
            flex: '1 1 300px',
            marginTop: '80px',
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
            We help digital-first teams solve skill<br />gaps fast — with carefully selected<br />specialists who don't just fill seats, but add value from day one.
          </p>
        </div>
      </div>

      {/* Mobile content - single column */}
      <div className="mobile-only" style={{ marginTop: '140px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <p
          style={{
            fontFamily: 'Scandia, sans-serif',
            fontSize: '24px',
            fontWeight: 400,
            color: '#656565',
            margin: '0 0 24px 0',
            lineHeight: 1.2,
          }}
        >
          We don't sell CVs.
        </p>
        <p
          style={{
            fontFamily: 'Scandia, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            color: '#0B1215',
            margin: '0 0 32px 0',
            lineHeight: 1.2,
          }}
        >
          We curate specialists who deliver.
        </p>
        <div
          style={{
            backgroundColor: '#F8F8F8',
            padding: '24px',
            marginBottom: '32px',
          }}
        >
          <p
            style={{
              fontFamily: "'Overpass Mono', monospace",
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '0em',
              color: '#0033FF',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            We help digital-first teams solve skill gaps fast — with carefully selected specialists who don't just fill seats, but add value from day one.
          </p>
        </div>
        <button
          onClick={() => window.open('https://calendly.com/et-gridanddot/30min', '_blank')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '16px 48px',
            width: '100%',
            backgroundColor: 'transparent',
            border: '2px solid #0033FF',
            borderRadius: '0',
            color: '#0033FF',
            fontFamily: 'Scandia, sans-serif',
            fontSize: '20px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 150ms ease',
          }}
        >
          Let's Talk
          <img
            src={`${basePath}/images/Arrow 6.svg`}
            alt=""
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </div>
    </section>
  )
}
