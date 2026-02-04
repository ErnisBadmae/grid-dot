'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true) // Always visible for testing as requested

  // useEffect(() => {
  //   // Check if user has already made a choice
  //   const cookieConsent = localStorage.getItem('cookieConsent')
  //   if (!cookieConsent) {
  //     setIsVisible(true)
  //   }
  // }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: '32px',
        padding: '40px',
        maxWidth: '600px',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ fontFamily: "'Overpass Mono', monospace", fontSize: '16px', fontWeight: 400, color: '#0B1215', lineHeight: 1.5 }}>
          <p style={{ marginBottom: '16px' }}>
            We use a small number of cookies to keep things<br />
            running and to learn how the site is used.
          </p>
          <p>
            By clicking "Accept", you consent to our use of<br />
            cookies. <a href="/privacy" style={{ textDecoration: 'underline', color: '#0B1215' }}>Privacy policy</a>.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <button
            onClick={handleAccept}
            style={{
              flex: 1,
              padding: '16px 0',
              backgroundColor: 'transparent',
              border: '2px solid #0033FF',
              color: '#0033FF',
              fontFamily: 'Scandia, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            style={{
              flex: 1,
              padding: '16px 0',
              backgroundColor: 'transparent',
              border: '2px solid #0033FF',
              color: '#0033FF',
              fontFamily: 'Scandia, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  )
}
