import { SECTION_2 } from '@/lib/constants'

export default function Section2() {
  return (
    <section
      id="section-2"
      style={{
        position: 'relative',
        padding: '100px 73px',
      }}
    >
      {/* Header */}
      <h2
        style={{
          fontFamily: 'Scandia, sans-serif',
          fontSize: '48px',
          fontWeight: 700,
          color: '#0B1215',
          lineHeight: 1.1,
          marginBottom: '80px',
          margin: '0 0 80px 0',
        }}
      >
        What We Offer —<br />
        Our Expertise
      </h2>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          columnGap: '40px',
          rowGap: '40px',
        }}
      >
        {/* Row 1: Categories */}
        <div style={{ borderBottom: '1px solid #0B1215', paddingBottom: '20px' }}>
          <h3 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215', margin: 0 }}>
            Product &<br />Strategy
          </h3>
        </div>
        <div style={{ borderBottom: '1px solid #0B1215', paddingBottom: '20px' }}>
          <h3 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215', margin: 0 }}>
            Experience,<br />Content & CMS
          </h3>
        </div>
        <div style={{ borderBottom: '1px solid #0B1215', paddingBottom: '20px' }}>
          <h3 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215', margin: 0 }}>
            Data &<br />Architecture
          </h3>
        </div>
        <div style={{ borderBottom: '1px solid #0B1215', paddingBottom: '20px' }}>
          <h3 style={{ fontFamily: 'Scandia, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0B1215', margin: 0 }}>
            Delivery, Quality &<br />Rollout
          </h3>
        </div>

        {/* Rows 2-5: Roles */}

        {/* Col 1 Roles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {['Product Managers', 'Product Analysts', 'Business Analysts (BA)'].map(role => (
            <div key={role} style={{ fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1215' }}>
              {role}
            </div>
          ))}
        </div>

        {/* Col 2 Roles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {['UX / UI Designers', 'CMS Editors', 'Content Specialists'].map(role => (
            <div key={role} style={{ fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1215' }}>
              {role}
            </div>
          ))}
        </div>

        {/* Col 3 Roles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {['Data Scientists', 'Data Analysts', 'AI Solution Architects'].map(role => (
            <div key={role} style={{ fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1215' }}>
              {role}
            </div>
          ))}
        </div>

        {/* Col 4 Roles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {[
            'Producers',
            'QA Specialists',
            'Rollout Managers',
            <>AI QA / Model Validation<br />Specialists</>
          ].map((role, i) => (
            <div key={i} style={{ fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1215' }}>
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
