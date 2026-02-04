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
      <div
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
              fontFamily: 'Scandia, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#0B1215',
              lineHeight: 1.1,
              margin: 0,
              textAlign: 'left',
            }}
          >
            How It Works —<br />
            Simple & Transparent
          </h2>
        </div>

        {/* Col 2: Gray Box */}
        <div style={{ gridColumn: '2 / 3' }}>
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
        <div style={{ gridColumn: '1 / 2' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '16px' }}>
              [0.1]
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
              [0.2]
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
              [0.4]
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
              [0.3]
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
              [0.5]
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
              lineHeight: 1.2,
              margin: 0,
              marginLeft: '-400px',
            }}
          >
            clarity at every step<br />
            fewer introductions, better matches<br />
            specialists who work as part of your team
          </h3>
        </div>
      </div>
    </section>
  )
}
