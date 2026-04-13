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
        className="desktop-only"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: '60px',
          rowGap: '60px',
        }}
      >
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
            <span style={{ whiteSpace: 'nowrap' }}>How It Works - Simple</span><br />
            & Transparent
          </h2>
        </div>

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
              Most of the work starts inside our own networking - people we already know, trust, and have worked with in real projects.<br /><br />
              That makes the process simpler.<br />
              And far more reliable.
            </p>
          </div>
        </div>

        <div style={{ gridColumn: '1 / 2', marginTop: '-70px' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '16px' }}>
              [1.0]
            </span>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215' }}>
              we start with context
            </span>
          </div>
          <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0, maxWidth: '450px', paddingLeft: '72px' }}>
            Before talking about roles, we talk about your team, your product, and where you need support.
          </p>
        </div>

        <div style={{ gridColumn: '2 / 3' }}></div>

        <div style={{ gridColumn: '1 / 2' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '16px' }}>
              [2.0]
            </span>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215' }}>
              we reach out - not outwards
            </span>
          </div>
          <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0, maxWidth: '450px', paddingLeft: '72px' }}>
            Instead of searching everywhere, we approach a small number of specialists who are already relevant.<br />
            No mass outreach. No long lists. Just focused conversations.
          </p>
        </div>

        <div style={{ gridColumn: '2 / 3' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '16px' }}>
              [4.0]
            </span>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215' }}>
              we curate, not filter
            </span>
          </div>
          <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0, maxWidth: '450px', paddingLeft: '72px' }}>
            Every specialist we introduce is reviewed for more than experience.<br />
            We look at how they think, communicate, and work inside a team. Fit is intentional.
          </p>
        </div>

        <div style={{ gridColumn: '1 / 2' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '16px' }}>
              [3.0]
            </span>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215' }}>
              we stay involved
            </span>
          </div>
          <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0, maxWidth: '450px', paddingLeft: '72px' }}>
            Once someone joins your team, our role doesn't end.<br />
            We support onboarding, alignment, and day-to-day collaboration to make sure things actually work.
          </p>
        </div>

        <div style={{ gridColumn: '2 / 3' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF', marginRight: '16px' }}>
              [5.0]
            </span>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215' }}>
              we adjust and improve
            </span>
          </div>
          <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0, maxWidth: '450px', paddingLeft: '72px' }}>
            If something isn't right, we address it early.<br />
            Open feedback, clear decisions, no friction.
          </p>
        </div>

        <div style={{ gridColumn: '1 / 2', alignSelf: 'baseline', paddingTop: '40px' }}>
          <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF' }}>
            [in practice]
          </span>
        </div>

        <div style={{ gridColumn: '2 / 3', paddingTop: '40px', marginLeft: '-340px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              'clarity at every step',
              'fewer introductions, better matches',
            ].map((text) => (
              <h3
                key={text}
                style={{
                  fontFamily: 'Scandia, sans-serif',
                  fontSize: '44px',
                  fontWeight: 700,
                  color: '#0B1215',
                  lineHeight: 1.1,
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {text}
              </h3>
            ))}
            <h3
              style={{
                fontFamily: 'Scandia, sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                color: '#0B1215',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              specialists who work as<br />
              <span style={{ whiteSpace: 'nowrap' }}>part of your team</span>
            </h3>
          </div>
        </div>
      </div>

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
          How It Works -<br />
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
            Most of the work starts inside our own networking - people we already know, trust, and have worked with in real projects.<br /><br />
            That makes the process simpler.<br />
            And far more reliable.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {[
            { num: '[1.0]', title: 'we start with context', text: 'Before talking about roles, we talk about your team, your product, and where you need support.' },
            { num: '[2.0]', title: 'we reach out - not outwards', text: 'Instead of searching everywhere, we approach a small number of specialists who are already relevant. No mass outreach. No long lists. Just focused conversations.' },
            { num: '[3.0]', title: 'we stay involved', text: "Once someone joins your team, our role doesn't end. We support onboarding, alignment, and day-to-day collaboration to make sure things actually work." },
            { num: '[4.0]', title: 'we curate, not filter', text: 'Every specialist we introduce is reviewed for more than experience. We look at how they think, communicate, and work inside a team. Fit is intentional.' },
            { num: '[5.0]', title: 'we adjust and improve', text: "If something isn't right, we address it early. Open feedback, clear decisions, no friction." },
          ].map(({ num, title, text }) => (
            <div key={num} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '16px' }}>
              <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0033FF', whiteSpace: 'nowrap' }}>{num}</span>
              <div>
                <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1215', margin: '0 0 8px 0' }}>{title}</p>
                <p style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#0B1215', margin: 0 }}>{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '60px' }}>
          <div style={{ marginBottom: '32px' }}>
            <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0033FF' }}>
              [in practice]
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {['clarity at every step', 'fewer introductions, better matches'].map((text) => (
              <div key={text} style={{ backgroundColor: '#9AC2E4', padding: '0 8px', width: 'fit-content' }}>
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
                  {text}
                </h3>
              </div>
            ))}
            <div style={{ backgroundColor: '#9AC2E4', padding: '0 8px', width: 'fit-content' }}>
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
                specialists who work as<br />
                <span style={{ whiteSpace: 'nowrap' }}>part of your team</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
