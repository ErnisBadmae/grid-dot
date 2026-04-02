'use client'

import { type CSSProperties, type FormEvent, useState } from 'react'
import { basePath } from '@/lib/basePath'

type FormStatus = 'idle' | 'success' | 'error' | 'server-error'

interface FieldErrors {
  firstName?: string
  lastName?: string
  email?: string
  privacy?: string
}

const requestOptions = [
  'extended team support',
  'specific role / specialist',
  'requesting a case',
  'not sure yet',
]

const fieldLabelStyle: CSSProperties = {
  display: 'block',
  fontFamily: 'Scandia, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  color: '#656565',
  marginBottom: '8px',
}

const inputStyle: CSSProperties = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid #0B1215',
  background: 'transparent',
  padding: '4px 0',
  outline: 'none',
  borderRadius: 0,
  fontFamily: 'Scandia, sans-serif',
  fontSize: '14px',
  color: '#0B1215',
}

const inputErrorStyle: CSSProperties = {
  ...inputStyle,
  borderBottom: '1px solid #C00000',
}

const textareaStyle: CSSProperties = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid #0B1215',
  background: 'transparent',
  padding: '4px 0',
  outline: 'none',
  borderRadius: 0,
  resize: 'none',
  fontFamily: 'Scandia, sans-serif',
  fontSize: '14px',
  color: '#0B1215',
}

function StatusMessage({ formStatus }: { formStatus: FormStatus }) {
  if (formStatus === 'success') {
    return <p className="form-status-success">Thank you! We&apos;ll get back to you shortly.</p>
  }

  if (formStatus === 'server-error' || formStatus === 'error') {
    return <p className="form-status-error">Sorry, there was an error submitting the form. Please try again.</p>
  }

  return null
}

export default function ContactForm() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [dataPopupOpen, setDataPopupOpen] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [context, setContext] = useState('')
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const validate = (): FieldErrors => {
    const errors: FieldErrors = {}

    if (!firstName.trim()) errors.firstName = "Don't forget to fill in your first name"
    if (!lastName.trim()) errors.lastName = "Don't forget to fill in your last name"
    if (!email.trim()) errors.email = 'We need your email to get back to you'
    if (!privacyAccepted) errors.privacy = 'Please agree to the Privacy Policy to continue'

    return errors
  }

  const clearFieldError = (field: keyof FieldErrors) => {
    setFieldErrors((previousErrors) => {
      const nextErrors = { ...previousErrors }
      delete nextErrors[field]
      return nextErrors
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const errors = validate()
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setFormStatus('error')
      return
    }

    setFieldErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          message: context,
          projectType: selectedOption,
        }),
      })

      if (response.ok) {
        setFormStatus('success')
      } else {
        setFormStatus('server-error')
      }
    } catch {
      setFormStatus('server-error')
    }
  }

  return (
    <>
      <style jsx>{`
        .contact-huge-header {
          font-family: 'Scandia', sans-serif;
          font-size: 160px;
          font-weight: 700;
          color: #0B1215;
          line-height: 1;
          margin-bottom: 50px;
          letter-spacing: -0.02em;
          margin-top: -25px;
        }
        .form-row-name {
          display: flex;
          gap: 40px;
        }
        .custom-dropdown-options {
          position: relative;
          width: 100%;
          background-color: transparent;
          border-bottom: 1px solid #0B1215;
          margin-top: 20px;
          margin-bottom: 20px;
          border: none;
          overflow-y: hidden;
        }
        .custom-dropdown-option {
          padding: 12px 0;
          font-family: 'Scandia', sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: #0B1215;
          cursor: pointer;
          transition: color 0.2s;
        }
        .custom-dropdown-option:hover {
          color: #0033FF;
          background-color: transparent;
        }
        .form-field-error {
          font-family: 'Scandia', sans-serif;
          font-size: 13px;
          color: #C00000;
          margin-top: 5px;
        }
        .form-status-success {
          font-family: 'Scandia', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #0033FF;
          margin-bottom: 24px;
        }
        .form-status-error {
          font-family: 'Scandia', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #C00000;
          margin-bottom: 24px;
        }
        .start-conversation-btn:hover .conversation-arrow {
          transform: translate(4px, -4px);
        }
        @media (max-width: 639px) {
          .contact-huge-header {
            font-size: 80px !important;
            margin-bottom: 40px !important;
          }
          .form-row-name {
            flex-direction: column !important;
            gap: 40px !important;
          }
        }
      `}</style>

      <h2 className="contact-huge-header">
        contact
      </h2>

      <StatusMessage formStatus={formStatus} />

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} noValidate>
        <div className="form-row-name">
          <div style={{ flex: 1 }}>
            <label style={fieldLabelStyle}>
              first name*
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(event) => { setFirstName(event.target.value); clearFieldError('firstName') }}
              style={fieldErrors.firstName ? inputErrorStyle : inputStyle}
            />
            {fieldErrors.firstName && <p className="form-field-error">{fieldErrors.firstName}</p>}
          </div>
          <div style={{ flex: 1 }}>
            <label style={fieldLabelStyle}>
              last name*
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(event) => { setLastName(event.target.value); clearFieldError('lastName') }}
              style={fieldErrors.lastName ? inputErrorStyle : inputStyle}
            />
            {fieldErrors.lastName && <p className="form-field-error">{fieldErrors.lastName}</p>}
          </div>
        </div>

        <div>
          <label style={fieldLabelStyle}>
            e-mail address*
          </label>
          <input
            type="email"
            value={email}
            onChange={(event) => { setEmail(event.target.value); clearFieldError('email') }}
            style={fieldErrors.email ? inputErrorStyle : inputStyle}
          />
          {fieldErrors.email && <p className="form-field-error">{fieldErrors.email}</p>}
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            borderBottom: '1px solid #0B1215',
            paddingBottom: '8px',
            transition: 'height 0.2s ease',
          }}>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <span style={{
                fontFamily: 'Scandia, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                color: '#656565',
                minHeight: '24px',
              }}>
                {selectedOption || 'what are you looking for?*'}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src={`${basePath}/images/Arrow 7.svg`}
                  style={{
                    width: '16px',
                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                  alt=""
                />
              </div>
            </div>

            {dropdownOpen && (
              <div className="custom-dropdown-options">
                {requestOptions.map((option) => (
                  <div
                    key={option}
                    className="custom-dropdown-option"
                    onClick={() => {
                      setSelectedOption(option)
                      setDropdownOpen(false)
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <label style={fieldLabelStyle}>
            tell us about your context
          </label>
          <textarea
            value={context}
            onChange={(event) => setContext(event.target.value)}
            rows={3}
            style={textareaStyle}
          />
        </div>

        <div style={{ marginTop: '5px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
            <input
              type="checkbox"
              id="privacy"
              checked={privacyAccepted}
              onChange={(event) => { setPrivacyAccepted(event.target.checked); clearFieldError('privacy') }}
              className="privacy-checkbox"
              style={{
                marginTop: '4px',
                width: '16px',
                height: '16px',
                border: fieldErrors.privacy ? '1px solid #C00000' : '1px solid #0B1215',
                borderRadius: 0,
                flexShrink: 0,
                cursor: 'pointer',
                appearance: 'auto',
                accentColor: '#0B1215',
              }}
            />
            <label htmlFor="privacy" style={{ fontFamily: 'Scandia, sans-serif', fontSize: '18px', color: '#0B1215', lineHeight: 1.4, cursor: 'pointer' }}>
              I agree to the processing of my personal data in accordance with the <a href={`${basePath}/privacy`} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Scandia, sans-serif', fontWeight: 500, textDecoration: 'underline', color: 'inherit' }}>Privacy Policy.</a>
            </label>
          </div>
          {fieldErrors.privacy && <p className="form-field-error" style={{ marginBottom: '16px' }}>{fieldErrors.privacy}</p>}

          <div style={{ position: 'relative', marginBottom: '24px', marginTop: fieldErrors.privacy ? '8px' : '16px' }}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              onClick={() => setDataPopupOpen(!dataPopupOpen)}
            >
              <img src={`${basePath}/images/Exclude.svg`} alt="info" style={{ width: '16px', height: '16px' }} />
              <span
                style={{ fontFamily: 'Scandia, sans-serif', fontSize: '18px', fontWeight: 500, textDecoration: 'underline', color: '#0B1215' }}
              >
                How we use your data
              </span>
            </div>

            {dataPopupOpen && (
              <>
                <div
                  onClick={() => setDataPopupOpen(false)}
                  style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 99 }}
                />
                <div
                  onClick={() => setDataPopupOpen(false)}
                  style={{
                    marginTop: '12px',
                    backgroundColor: '#FFFFFF',
                    padding: '20px 24px',
                    zIndex: 100,
                    maxWidth: '560px',
                    cursor: 'pointer',
                    boxShadow: 'none',
                  }}
                >
                  <p style={{
                    fontFamily: "'Overpass Mono', monospace",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#0B1215',
                    lineHeight: 1.6,
                    margin: 0,
                  }}>
                    We&apos;ll only use your information to respond to your enquiry.
                    We do not share your data with third parties.
                  </p>
                </div>
              </>
            )}
          </div>

          <button
            type="submit"
            className="start-conversation-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              fontFamily: 'Scandia, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              color: '#0033FF',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              float: 'right',
            }}
          >
            Start a Conversation
            <img
              src={`${basePath}/images/Arrow 6.svg`}
              alt="arrow"
              className="conversation-arrow"
              style={{
                marginLeft: '12px',
                width: '20px',
                transition: 'transform 0.2s ease',
              }}
            />
          </button>
        </div>
      </form>
    </>
  )
}

