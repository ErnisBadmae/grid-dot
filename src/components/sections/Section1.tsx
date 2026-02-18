'use client'

import { basePath } from '@/lib/basePath'

export default function Section1() {
  return (
    <section
      id="section-1"
      style={{
        position: 'relative',
        padding: '80px 73px 180px', // Increased bottom padding
        backgroundColor: '#F2F0EF',
      }}
    >
      {/* Desktop Layout */}
      < div className="desktop-only" >
        {/* Top Row: Headline and Description */}
        < div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'cente5',
            flexWrap: 'wrap',
            gap: '40px',
            marginBottom: '50px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Scandia, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#0B1215',
              lineHeight: 1.1,
              maxWidth: '500px',
              margin: 0,
            }}
          >
            Why Extended<br />Expertise
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
              justifyContent: 'center'
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
              Unlike traditional who send lists of CVs and hope for the best, we curate talent that fits your culture, workflows, and goals.
            </p>
          </div>
        </div >

        {/* Comparison Grid with SVG Background */}
        < div style={{ position: 'relative' }}>
          {/* SVG Structure Layer */}
          < img
            src={`${basePath}/images/grid+vs+next.svg`}
            alt=""
            style={{
              position: 'absolute',
              // top: '0px', // Handled by CSS class grid-vs-next-img
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              maxWidth: '1440px', // Cap width to prevent vertical scaling drift
              height: 'auto',
              zIndex: 1,
              pointerEvents: 'none',
            }}
            className="grid-vs-next-img"
          />

          {/* Content Layer */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) 1px minmax(0, 1fr)',
              columnGap: '0',
              fontFamily: 'Scandia, sans-serif',
              position: 'relative',
              zIndex: 2,
              maxWidth: '1440px', // Match SVG max-width
              margin: '0 auto',   // Center the grid
            }}
          >
            {/* Row 1 Headers */}
            <div style={{ gridColumn: '1 / 2', paddingRight: '40px', marginBottom: '90px' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  color: '#656565',
                  margin: 0,
                }}
              >
                Traditional recruiters
              </h3>
            </div>

            <div className="section-1-extended-header" style={{ gridColumn: '3 / 4', paddingLeft: '40px', marginBottom: '90px' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  color: '#0033FF',
                  margin: 0,
                }}
              >
                Extended Expertise
              </h3>
            </div>

            {/* Row 2 Content Lists */}
            <div style={{ gridColumn: '1 / 2', paddingRight: '40px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {['Send CVs', 'Volume-driven', 'One-off hiring', 'Minimal follow-up'].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '24px',
                      fontWeight: 500,
                      color: '#656565',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="section-1-extended-list" style={{ gridColumn: '3 / 4', paddingLeft: '40px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {['Curate specialists', 'Quality-driven', 'Long-term fit', 'Ongoing support'].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '24px',
                      fontWeight: 500,
                      color: '#0B1215',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div >
      </div >

      {/* Mobile Layout */}
      < div className="mobile-only" >
        <h2
          style={{
            fontFamily: 'Scandia, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            color: '#0B1215',
            lineHeight: 1.1,
            margin: '0 0 32px 0',
          }}
        >
          Why Extended<br />Expertise
        </h2>

        <div
          style={{
            backgroundColor: '#F8F8F8',
            padding: '24px',
            marginBottom: '40px',
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
            Unlike traditional recruiters who send lists of CVs and hope for the best, we curate talent that fits your culture, workflows, and goals.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* SVG Mobile Background */}
          <img
            src={`${basePath}/images/grid+vs+next-mobile.svg`}
            alt=""
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              height: 'auto',
              zIndex: 1,
              pointerEvents: 'none',
              maxWidth: '300px' // Limiting width to match likely design
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              columnGap: '20px',
              fontFamily: 'Scandia, sans-serif',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div style={{ paddingBottom: '30px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#656565', margin: 0 }}>
                Traditional<br />recruiters
              </h3>
            </div>
            <div style={{ paddingBottom: '30px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#0033FF', margin: 0 }}>
                Extended<br />Expertise
              </h3>
            </div>

            <div style={{ textAlign: 'center' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {['Send CVs', 'Volume-driven', 'One-off hiring', 'Minimal follow-up'].map(item => (
                  <li key={item} style={{ fontSize: '16px', fontWeight: 500, color: '#656565' }}>{item}</li>
                ))}
              </ul>
            </div>
            <div style={{ textAlign: 'center' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {['Curate specialists', 'Quality-driven', 'Long-term fit', 'Ongoing support'].map(item => (
                  <li key={item} style={{ fontSize: '16px', fontWeight: 500, color: '#0B1215' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div >

      {/* Animated Text Path */}
      {/* Animated Text Path Footer */}
      <img
        src={`${basePath}/images/text-on-path-3-desktop.svg`}
        alt=""
        className="text-on-path desktop-only section-1-running-text"
        style={{
          position: 'absolute',
          top: 'auto',
          bottom: '-250px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          minWidth: '1440px',
          height: 'auto',
          pointerEvents: 'none',
          zIndex: 0,
          display: 'block',
        }}
      />
      <style jsx>{`
        .grid-vs-next-img {
          top: 0px;
          transition: top 0.3s ease;
        }
        @media (min-width: 1501px) {
          .grid-vs-next-img { top: -15px !important; }
        }
        @media (min-width: 1601px) {
          .grid-vs-next-img { top: -30px !important; }
        }
        @media (min-width: 1701px) {
          .grid-vs-next-img { top: -45px !important; }
        }
        // @media (min-width: 1801px) {
        //   .grid-vs-next-img { top: -60px !important; }
        // }
        // @media (min-width: 1901px) {
        //   .grid-vs-next-img { top: -75px !important; }
        // }
        // @media (min-width: 2001px) {
        //    .grid-vs-next-img { top: -90px !important; }
        // }
      `}</style>
    </section>
  )
}
