'use client'

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { basePath } from '@/lib/basePath'

type FormStatus = 'idle' | 'success' | 'error' | 'server-error'

interface FieldErrors {
    firstName?: string
    lastName?: string
    email?: string
    privacy?: string
}

export default function SectionContacts() {
    useApp()
    const [dropdownOpen, setDropdownOpen] = React.useState(false)
    const [selectedOption, setSelectedOption] = React.useState('')
    const [privacyAccepted, setPrivacyAccepted] = React.useState(false)
    const [dataPopupOpen, setDataPopupOpen] = React.useState(false)

    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [context, setContext] = React.useState('')
    const [formStatus, setFormStatus] = React.useState<FormStatus>('idle')
    const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({})

    const options = [
        'extended team support',
        'specific role / specialist',
        'requesting a case',
        'not sure yet'
    ]

    const validate = (): FieldErrors => {
        const errors: FieldErrors = {}
        if (!firstName.trim()) errors.firstName = "Don't forget to fill in your first name"
        if (!lastName.trim()) errors.lastName = "Don't forget to fill in your last name"
        if (!email.trim()) errors.email = "We need your email to get back to you"
        if (!privacyAccepted) errors.privacy = "Please agree to the Privacy Policy to continue"
        return errors
    }

    const clearFieldError = (field: keyof FieldErrors) => {
        setFieldErrors(prev => { const next = { ...prev }; delete next[field]; return next })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

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

    const inputStyle: React.CSSProperties = {
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

    const inputErrorStyle: React.CSSProperties = {
        ...inputStyle,
        borderBottom: '1px solid #C00000',
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
                    .custom-dropdown-overlay {
                        display: none;
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
                    @media (max-width: 639px) {
                        .contacts-grid {
                            flex-direction: column !important;
                            gap: 60px !important;
                        }
                        .contacts-left, .contacts-right {
                            width: 100% !important;
                            min-width: 100% !important;
                            max-width: 100% !important;
                        }
                        .contacts-left-header {
                            font-size: 32px !important;
                            margin-bottom: 40px !important;
                        }
                        .contact-huge-header {
                            font-size: 80px !important;
                            margin-bottom: 40px !important;
                        }
                        .form-row-name {
                            flex-direction: column !important;
                            gap: 40px !important;
                        }
                    }

                    /* Conversation Button Hover */
                    .start-conversation-btn:hover .conversation-arrow {
                        transform: translate(4px, -4px);
                    }

                    /* Book a Call Contacts Button Hover */
                    .book-call-btn-contacts:hover {
                        background-color: #0033FF !important;
                        color: #FFFFFF !important;
                    }
                    .book-call-btn-contacts:hover .book-call-arrow-contacts {
                        filter: brightness(0) invert(1);
                    }
                `}</style>

                {/* Left Column: Info & CTA */}
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
                        Let's talk,<br />
                        we are here<br />
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
                        Looking for the right expertise?<br />
                        We help teams find specialists that truly fit —
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
                        Contact us via the form and we'll respond<br />
                        promptly.<br />
                        You can also request a case study to see how
                        similar challenges were solved.
                    </p>

                    <button
                        onClick={() => window.open('https://calendly.com/et-gridanddot/30min', '_blank')}
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
                                transition: 'filter 0.2s ease'
                            }}
                        />
                    </button>
                </div>

                {/* Right Column: Form */}
                <div className="contacts-right" style={{ flex: '2', minWidth: '400px', maxWidth: '800px' }}>
                    <h2 className="contact-huge-header">
                        contact
                    </h2>

                    {formStatus === 'success' && (
                        <p className="form-status-success">Thank you! We'll get back to you shortly.</p>
                    )}
                    {formStatus === 'server-error' && (
                        <p className="form-status-error">Sorry, there was an error submitting the form. Please try again.</p>
                    )}
                    {formStatus === 'error' && (
                        <p className="form-status-error">Sorry, there was an error submitting the form. Please try again.</p>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} noValidate>
                        {/* Name Row */}
                        <div className="form-row-name">
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontFamily: 'Scandia, sans-serif', fontSize: '14px', fontWeight: 400, color: '#656565', marginBottom: '8px' }}>
                                    first name*
                                </label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={e => { setFirstName(e.target.value); clearFieldError('firstName') }}
                                    style={fieldErrors.firstName ? inputErrorStyle : inputStyle}
                                />
                                {fieldErrors.firstName && <p className="form-field-error">{fieldErrors.firstName}</p>}
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontFamily: 'Scandia, sans-serif', fontSize: '14px', fontWeight: 400, color: '#656565', marginBottom: '8px' }}>
                                    last name*
                                </label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={e => { setLastName(e.target.value); clearFieldError('lastName') }}
                                    style={fieldErrors.lastName ? inputErrorStyle : inputStyle}
                                />
                                {fieldErrors.lastName && <p className="form-field-error">{fieldErrors.lastName}</p>}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label style={{ display: 'block', fontFamily: 'Scandia, sans-serif', fontSize: '14px', fontWeight: 400, color: '#656565', marginBottom: '8px' }}>
                                e-mail address*
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => { setEmail(e.target.value); clearFieldError('email') }}
                                style={fieldErrors.email ? inputErrorStyle : inputStyle}
                            />
                            {fieldErrors.email && <p className="form-field-error">{fieldErrors.email}</p>}
                        </div>

                        {/* Looking For (Custom Dropdown) */}
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                borderBottom: '1px solid #0B1215',
                                paddingBottom: '8px',
                                transition: 'height 0.2s ease'
                            }}>
                                <div
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <span style={{
                                        fontFamily: 'Scandia, sans-serif',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        color: '#656565',
                                        minHeight: '24px'
                                    }}>
                                        {selectedOption || 'what are you looking for?*'}
                                    </span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <img
                                            src={`${basePath}/images/Arrow 7.svg`}
                                            style={{
                                                width: '16px',
                                                transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.2s ease'
                                            }}
                                            alt=""
                                        />
                                    </div>
                                </div>

                                {dropdownOpen && (
                                    <div className="custom-dropdown-options">
                                        {options.map((option) => (
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

                        {/* Context */}
                        <div>
                            <label style={{ display: 'block', fontFamily: 'Scandia, sans-serif', fontSize: '14px', fontWeight: 400, color: '#656565', marginBottom: '8px' }}>
                                tell us about your context
                            </label>
                            <textarea
                                value={context}
                                onChange={e => setContext(e.target.value)}
                                rows={3}
                                style={{
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
                                }}
                            />
                        </div>

                        {/* Footer / Privacy */}
                        <div style={{ marginTop: '5px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    checked={privacyAccepted}
                                    onChange={(e) => { setPrivacyAccepted(e.target.checked); clearFieldError('privacy') }}
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
                                        accentColor: '#0B1215'
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
                                                We'll only use your information to respond to your enquiry.
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
                                        transition: 'transform 0.2s ease'
                                    }}
                                />
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
