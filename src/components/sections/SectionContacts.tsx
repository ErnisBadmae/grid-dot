'use client'

import { basePath } from '@/lib/basePath'
import { BOOK_A_CALL_URL } from '@/lib/constants'
import ContactForm from './contacts/ContactForm'

export default function SectionContacts() {
  const handleBookCall = () => {
    window.open(BOOK_A_CALL_URL, '_blank')
  }

  return (
    <section
      id="section-contacts"
      style={{
        padding: '100px 73px',
        backgroundColor: '#F2F0EF',
      }}
    >
      <div className="contacts-grid" style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', gap: '120px', alignItems: 'flex-start' }}>
        <style jsx>{`
          .contacts-grid {
            flex-direction: row;
          }
          .contacts-left-header {
            font-family: 'Scandia', sans-serif;
            font-weight: 700;
            font-size: 48px;
            line-height: 1.1;
            margin-bottom: 30px;
          }
          @media (max-width: 639px) {
            .contacts-grid {
              flex-direction: column !important;
              gap: 60px !important;
            }
            .contacts-left,
            .contacts-right {
              width: 100% !important;
              min-width: 100% !important;
              max-width: 100% !important;
            }
            .contacts-left-header {
              font-size: 32px !important;
              margin-bottom: 40px !important;
            }
          }
          .book-call-btn-contacts:hover {
            background-color: #0033FF !important;
            color: #FFFFFF !important;
          }
          .book-call-btn-contacts:hover .book-call-arrow-contacts {
            filter: brightness(0) invert(1);
          }
        `}</style>

        <div className="contacts-left" style={{ flex: '1', minWidth: '300px', maxWidth: '500px' }}>
          <h2
            className="contacts-left-header"
            style={{
              fontFamily: 'Scandia, sans-serif',
              fontWeight: 700,
              color: '#0B1215',
              textAlign: 'left',
            }}
          >
            Let&apos;s talk,
            <br />
            we are here
            <br />
            to help
          </h2>

          <p
            style={{
              fontFamily: 'Scandia, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#0B1215',
              lineHeight: 1.5,
              marginBottom: '32px',
            }}
          >
            Looking for the right expertise?
            <br />
            We help teams find specialists that truly fit —
            <br />
            technically and culturally.
          </p>

          <p
            style={{
              fontFamily: 'Scandia, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#0B1215',
              lineHeight: 1.5,
              marginBottom: '32px',
            }}
          >
            Contact us via the form and we&apos;ll respond
            <br />
            promptly.
            <br />
            You can also request a case study to see how
            <br />
            similar challenges were solved.
          </p>

          <button
            onClick={handleBookCall}
            className="book-call-btn-contacts"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 32px',
              backgroundColor: 'transparent',
              border: '2px solid #0033FF',
              color: '#0033FF',
              fontFamily: 'Scandia, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              cursor: 'pointer',
              marginTop: '40px',
              width: '100%',
              maxWidth: '100%',
              transition: 'all 0.2s ease',
            }}
          >
            Book a Call
            <img
              src={`${basePath}/images/Arrow 6.svg`}
              alt="arrow"
              className="book-call-arrow-contacts"
              style={{
                marginLeft: '12px',
                width: '20px',
                height: '20px',
                transition: 'filter 0.2s ease',
              }}
            />
          </button>
        </div>

        <div className="contacts-right" style={{ flex: '2', minWidth: '400px', maxWidth: '800px' }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

