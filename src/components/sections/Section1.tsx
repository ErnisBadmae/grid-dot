'use client';

import { basePath } from '@/lib/basePath';

export default function Section1() {
  return (
    <section
      id="section-1"
      style={{
        position: 'relative',
        padding: '80px 73px 180px',
        backgroundColor: '#F2F0EF'
      }}
    >
      {/* Desktop Layout */}
      <div className="desktop-only">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '40px',
            marginBottom: '50px'
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
              margin: 0
            }}
          >
            Why Extended
            <br />
            Expertise
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
                color: '#0B1215',
                lineHeight: 1.6,
                margin: 0
              }}
            >
              Unlike traditional recruiters who send lists of CVs and hope for
              the best, we curate talent that fits your culture, workflows, and
              goals.
            </p>
          </div>
        </div>

        {/* Comparison Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            fontFamily: 'Scandia, sans-serif',
            maxWidth: '800px',
            alignItems: 'stretch',
            position: 'relative'
          }}
        >
          {/* Header: Traditional */}
          <div style={{ paddingRight: '40px', paddingTop: '24px', paddingBottom: '24px', display: 'flex', alignItems: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 500, color: '#656565', margin: 0 }}>
              Traditional recruiters
            </h3>
          </div>

          {/* Header: Extended */}
          <div
            style={{
              paddingLeft: '40px',
              paddingRight: '24px',
              paddingTop: '24px',
              paddingBottom: '24px',
              backgroundColor: '#EEF1FF',
              borderRadius: '4px 4px 0 0',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <h3 style={{ fontSize: '24px', fontWeight: 500, color: '#0033FF', margin: 0 }}>
              Extended Expertise
            </h3>
          </div>

          {/* List: Traditional */}
          <div style={{ paddingRight: '40px', paddingTop: '32px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {['Send CVs', 'Volume-driven', 'One-off hiring', 'Minimal follow-up'].map((item) => (
                <li key={item} style={{ fontSize: '24px', fontWeight: 500, color: '#656565' }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* List: Extended */}
          <div
            style={{
              paddingLeft: '40px',
              paddingRight: '24px',
              paddingTop: '32px',
              paddingBottom: '48px',
              backgroundColor: '#EEF1FF',
              borderRadius: '0 0 4px 4px',
              position: 'relative'
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {['Curate specialists', 'Quality-driven', 'Long-term fit', 'Ongoing support'].map((item) => (
                <li key={item} style={{ fontSize: '24px', fontWeight: 500, color: '#0B1215' }}>{item}</li>
              ))}
            </ul>

            {/* Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '24px',
                backgroundColor: '#9AC2E4',
                color: '#0033FF',
                fontFamily: 'Scandia, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                padding: '8px 22px',
                borderRadius: '30px',
                transform: 'rotate(-6deg)',
                transformOrigin: 'center center',
                whiteSpace: 'nowrap',
                zIndex: 2
              }}
            >
              next-gen specialists
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-only">
        <h2
          style={{
            fontFamily: 'Scandia, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            color: '#0B1215',
            lineHeight: 1.1,
            margin: '0 0 32px 0'
          }}
        >
          Why Extended
          <br />
          Expertise
        </h2>

        <div style={{ backgroundColor: '#F8F8F8', padding: '24px', marginBottom: '40px' }}>
          <p style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 400, color: '#0033FF', lineHeight: 1.6, margin: 0 }}>
            Unlike traditional recruiters who send lists of CVs and hope for the
            best, we curate talent that fits your culture, workflows, and goals.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            fontFamily: 'Scandia, sans-serif'
          }}
        >
          <div style={{ paddingTop: '12px', paddingBottom: '16px', paddingRight: '12px', display: 'flex', alignItems: 'center' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#656565', margin: 0 }}>
              Traditional<br />recruiters
            </h3>
          </div>
          <div style={{ paddingBottom: '16px', paddingLeft: '16px', paddingRight: '12px', paddingTop: '12px', backgroundColor: '#EEF1FF', borderRadius: '4px 4px 0 0', display: 'flex', alignItems: 'center' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#0033FF', margin: 0 }}>
              Extended<br />Expertise
            </h3>
          </div>

          <div style={{ paddingRight: '12px', paddingTop: '16px', paddingBottom: '36px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {['Send CVs', 'Volume-driven', 'One-off hiring', 'Minimal follow-up'].map((item) => (
                <li key={item} style={{ fontSize: '16px', fontWeight: 500, color: '#656565' }}>{item}</li>
              ))}
            </ul>
          </div>
          <div style={{ paddingLeft: '16px', paddingRight: '12px', paddingTop: '16px', paddingBottom: '36px', backgroundColor: '#EEF1FF', borderRadius: '0 0 4px 4px', position: 'relative' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {['Curate specialists', 'Quality-driven', 'Long-term fit', 'Ongoing support'].map((item) => (
                <li key={item} style={{ fontSize: '16px', fontWeight: 500, color: '#0B1215' }}>{item}</li>
              ))}
            </ul>
            {/* Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-16px',
                right: '12px',
                backgroundColor: '#9AC2E4',
                color: '#0033FF',
                fontFamily: 'Scandia, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                padding: '6px 16px',
                borderRadius: '24px',
                transform: 'rotate(-6deg)',
                transformOrigin: 'center center',
                whiteSpace: 'nowrap',
                zIndex: 2
              }}
            >
              next-gen specialists
            </div>
          </div>
        </div>
      </div>

      <img
        src={`${basePath}/images/text-on-path-3-desktop.svg`}
        alt=""
        className="text-on-path desktop-only section-1-running-text"
        style={{
          position: 'absolute',
          bottom: '-250px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          minWidth: '1440px',
          height: 'auto',
          pointerEvents: 'none',
          zIndex: 0,
          display: 'block'
        }}
      />
    </section>
  );
}
