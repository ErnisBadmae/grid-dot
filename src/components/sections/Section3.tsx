import React from 'react'
import { SECTION_3 } from '@/lib/constants'

export default function Section3() {
  return (
    <section
      id="section-3"
      style={{
        position: 'relative',
        padding: '100px 73px',
        backgroundColor: '#F2F0EF',
      }}
    >
      {/* Desktop Layout */}
      <div
        className="desktop-only"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: '60px',
          rowGap: '60px',
        }}
      >
        {/* === ROW 1 === */}
        {/* Col 1: Header */}
        <div style={{ gridColumn: '1 / 2' }}>
          <h2
            style={{
              fontFamily: 'var(--font-scandia), sans-serif',
              fontSize: '48px',
              fontStyle: 'normal',
              fontWeight: 700,
              color: '#0B1215',
              lineHeight: 1.1,
              margin: 0,
              textAlign: 'left',
            }}
          >
            <span style={{ whiteSpace: 'nowrap' }}>How It Works — Simple</span><br />
            & Transparent
          </h2>
        </div>

        {/* Col 2: Gray Box */}
        <div style={{ gridColumn: '2 / 3', position: 'relative', top: '120px' }}>
          <div
            style={{
              backgroundColor: '#F8F8F8',
              padding: '30px',
              maxWidth: '500px',
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
              Most of the work starts inside our own networking — people we already know, trust, and have worked with in real projects.<br /><br />
              That makes the process simpler.<br />
              And far more reliable.
            </p>
          </div>
        </div>

        {/* === ROW 2 === */}
        {/* Col 1: Step [0.1] */}
        <div style={{ gridColumn: '1 / 2', }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '16px' }}>
              [1.0]
            </span>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215' }}>
              we start with context
            </span>
          </div>
          <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0, maxWidth: '450px' }}>
            Before talking about roles, we talk about your team, your product, and where you need support.
          </p>
        </div>

        {/* Col 2: Empty */}
        <div style={{ gridColumn: '2 / 3' }}></div>

        {/* === ROW 3 === */}
        {/* Col 1: Step [0.2] */}
        <div style={{ gridColumn: '1 / 2' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '16px' }}>
              [2.0]
            </span>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215' }}>
              we reach out — not outwards
            </span>
          </div>
          <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0, maxWidth: '450px' }}>
            Instead of searching everywhere, we approach a small number of specialists who are already relevant.<br />
            No mass outreach. No long lists. Just focused conversations.
          </p>
        </div>

        {/* Col 2: Step [0.4] */}
        <div style={{ gridColumn: '2 / 3' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '16px' }}>
              [4.0]
            </span>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215' }}>
              we curate, not filter
            </span>
          </div>
          <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0, maxWidth: '450px' }}>
            Every specialist we introduce is reviewed for more than experience.<br />
            We look at how they think, communicate, and work inside a team. Fit is intentional.
          </p>
        </div>

        {/* === ROW 4 === */}
        {/* Col 1: Step [0.3] */}
        <div style={{ gridColumn: '1 / 2' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '16px' }}>
              [3.0]
            </span>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215' }}>
              we stay involved
            </span>
          </div>
          <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0, maxWidth: '450px' }}>
            Once someone joins your team, our role doesn’t end.<br />
            We support onboarding, alignment, and day-to-day collaboration to make sure things actually work.
          </p>
        </div>

        {/* Col 2: Step [0.5] */}
        <div style={{ gridColumn: '2 / 3' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '16px' }}>
              [5.0]
            </span>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215' }}>
              we adjust and improve
            </span>
          </div>
          <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0, maxWidth: '450px' }}>
            If something isn’t right, we address it early.<br />
            Open feedback, clear decisions, no friction.
          </p>
        </div>

        {/* === ROW 5: Footer === */}
        {/* Col 1: Label */}
        <div style={{ gridColumn: '1 / 2', alignSelf: 'baseline', paddingTop: '40px' }}>
          <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF' }}>
            [in practice]
          </span>
        </div>

        {/* Col 2: Text */}
        <div style={{ gridColumn: '2 / 3', paddingTop: '40px' }}>
          <h3
            style={{
              fontFamily: 'Scandia, sans-serif',
              fontSize: '44px',
              fontWeight: 700,
              color: '#0B1215',
              lineHeight: 1.5,
              margin: 0,
              marginLeft: '-320px',
            }}
          >
            clarity at every step<br />
            fewer introductions, better matches<br />
            specialists who work as part of your team
          </h3>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-only">
        <h2
          style={{
            fontFamily: 'Scandia, sans-serif',
            fontSize: '32px',
            fontStyle: 'normal',
            fontWeight: 700,
            color: '#0B1215',
            lineHeight: 1.1,
            margin: '0 0 32px 0',
            textAlign: 'left',
          }}
        >
          How It Works —<br />
          Simple & Transparent
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
              letterSpacing: '0em',
              color: '#0033FF',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Most of the work starts inside our own networking — people we already know, trust, and have worked with in real projects.<br /><br />
            That makes the process simpler.<br />
            And far more reliable.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {/* Step 0.1 */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '10px' }}>[1.0]</span>
              <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1215' }}>we start with context</span>
            </div>
            <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0 }}>
              Before talking about roles, we talk about your team, your product, and where you need support.
            </p>
          </div>

          {/* Step 0.2 */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '10px' }}>[2.0]</span>
              <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1215' }}>we reach out — not outwards</span>
            </div>
            <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0 }}>
              Instead of searching everywhere, we approach a small number of specialists who are already relevant.<br />
              No mass outreach. No long lists. Just focused conversations.
            </p>
          </div>

          {/* Step 0.3 */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '10px' }}>[3.0]</span>
              <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1215' }}>we stay involved</span>
            </div>
            <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0 }}>
              Once someone joins your team, our role doesn’t end.<br />
              We support onboarding, alignment, and day-to-day collaboration to make sure things actually work.
            </p>
          </div>

          {/* Step 0.4 */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '10px' }}>[4.0]</span>
              <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1215' }}>we curate, not filter</span>
            </div>
            <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0 }}>
              Every specialist we introduce is reviewed for more than experience.<br />
              We look at how they think, communicate, and work inside a team. Fit is intentional.
            </p>
          </div>

          {/* Step 0.5 */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '10px' }}>[5.0]</span>
              <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1215' }}>we adjust and improve</span>
            </div>
            <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0 }}>
              If something isn’t right, we address it early.<br />
              Open feedback, clear decisions, no friction.
            </p>
          </div>
        </div>

        {/* In Practice Section */}
        <div style={{ marginTop: '60px' }}>
          <div style={{ marginBottom: '32px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF' }}>
              [in practice]
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {['clarity at every step', 'fewer introductions,\nbetter matches', 'specialists who work\nas part of your team'].map((text, i) => (
              <div key={i} style={{ backgroundColor: '#9AC2E4', padding: '0 8px', width: 'fit-content' }}>
                <h3
                  style={{
                    fontFamily: 'Scandia, sans-serif',
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#0B1215',
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  {text.split('\n').map((line, j) => <React.Fragment key={j}>{line}<br /></React.Fragment>)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
