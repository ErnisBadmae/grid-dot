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
        paddingTop: '30px',
        paddingBottom: '80px',
      }}
    >
      {/* Main headline with curved text */}
      <div dangerouslySetInnerHTML={{ __html: SECTION_4.slogan }} style={{ position: 'relative', zIndex: 10 }} />

      <img
        id="text-on-path-1-desktop"
        className="text-on-path"
        src={`${basePath}/images/text-on-path-new-desktop.svg`}
        alt=""
        style={{ top: '50px', zIndex: -1, left: '-60px' }}
      />
      <img
        id="text-on-path-1-mobile"
        className="text-on-path mobile-only"
        src={`${basePath}/images/text-on-path-0-mobile-new.svg`}
        alt=""
        style={{ top: '30px', left: '0', width: '390px', maxWidth: '100%', zIndex: -1 }}
      />
      <img
        id="text-on-path-2-mobile"
        className="text-on-path mobile-only"
        src={`${basePath}/images/text-on-path-0-mobile-new.svg`}
        alt=""
        style={{ top: '320px', left: '0', width: '390px', maxWidth: '100%', zIndex: -1 }}
      />

      {/* Bottom content - two columns */}
      <div
        className="desktop-only"
        style={{
          display: 'flex',
          justifyContent: 'center', // Center the content blocks
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
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700,
              color: '#0B1215',
              margin: '0 0 32px 0',
              lineHeight: 1.2,
            }}
          >
            We curate<br />specialists who<br />deliver.
          </p>
          <button
            onClick={() => scrollTo('#section-7', '25%')}
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
          }}
        >
          <p
            style={{
              fontFamily: "'Overpass Mono', monospace",
              fontSize: '16px',
              fontWeight: 400,
              color: '#0B1215',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            We help digital-first teams solve skill<br />gaps fast — with carefully selected<br />specialists who don't just fill seats,<br />but add value from day one.
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
              color: '#0033FF',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            We help digital-first teams solve skill gaps fast — with carefully selected specialists who don't just fill seats, but add value from day one.
          </p>
        </div>
        <button
          onClick={() => scrollTo('#section-7', '25%')}
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
