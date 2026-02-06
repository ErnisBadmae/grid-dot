'use client'

import { basePath } from '@/lib/basePath'

export default function Section1() {
  return (
    <section
      id="section-1"
      style={{
        position: 'relative',
        padding: '100px 73px 80px',
        backgroundColor: '#F2F0EF',
      }}
    >
      {/* Top Row: Headline and Description */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '40px',
          marginBottom: '60px',
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
            padding: '32px',
            maxWidth: '500px',
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
            Unlike traditional recruiters who send lists of CVs and hope for the best, we curate talent that fits your culture, workflows, and goals.
          </p>
        </div>
      </div>

      {/* Comparison Grid with SVG Background */}
      <div style={{ position: 'relative' }}>

        {/* SVG Structure Layer */}
        {/* Placed absolutely to act as the grid lines and badges */}
        <img
          src={`${basePath}/images/grid+vs+next.svg`}
          alt=""
          style={{
            position: 'absolute',
            top: '0px', // Positioning it to start roughly below the headers
            left: '40px',
            width: '100%',
            height: 'auto',
            zIndex: 1,
            pointerEvents: 'none', // Allow clicking through if needed
          }}
        />

        {/* Content Layer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1px 1fr', // Middle col for spacing
            columnGap: '0',
            fontFamily: 'Scandia, sans-serif',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Row 1 Headers */}
          <div style={{ gridColumn: '1 / 2', paddingRight: '40px', marginBottom: '90px' }}>
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#656565',
                margin: 0,
              }}
            >
              Traditional recruiters
            </h3>
          </div>

          <div style={{ gridColumn: '3 / 4', paddingLeft: '40px', marginBottom: '90px' }}>
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#0033FF',
                margin: 0,
              }}
            >
              Extended Expertise
            </h3>
          </div>

          {/* Row 2 Content Lists */}
          {/* Left List */}
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

          {/* Right List */}
          <div style={{ gridColumn: '3 / 4', paddingLeft: '40px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {['Curate specialists', 'Quality-driven', 'Long-term fit', 'Ongoing support'].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#0B1215',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Animated Text Path */}
      {/* Animated Text Path Footer */}
      <img
        src={`${basePath}/images/text-on-path-3-desktop.svg`}
        alt=""
        className="text-on-path"
        style={{
          position: 'absolute',
          top: 'auto',
          bottom: '-350px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          minWidth: '1440px',
          height: 'auto',
          pointerEvents: 'none',
          zIndex: 0,
          display: 'block',
          maxWidth: 'none',
        }}
      />
    </section>
  )
}
