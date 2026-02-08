'use client'

import { useApp } from '@/contexts/AppContext'
import { CONTACTS } from '@/lib/constants'
import { basePath } from '@/lib/basePath'

export default function ContactsSidebar() {
  const {
    sidebarDesktopOn,
    sidebarDesktopHover,
    setSidebarDesktopHover,
    toggleSidebarDesktop,
    sidebarMobileExpanded,
    toggleSidebarMobile
  } = useApp()

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        id="contact-sidebar"
        className={`${sidebarDesktopOn ? 'visible' : ''} ${sidebarDesktopHover ? 'hover' : ''}`}
        onMouseEnter={() => setSidebarDesktopHover(true)}
        onMouseLeave={() => setSidebarDesktopHover(false)}
      >
        <div style={{
          display: sidebarDesktopOn ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '12px',
          whiteSpace: 'nowrap',
          opacity: sidebarDesktopOn ? 1 : 0,
          transition: 'opacity 0.3s ease',
          fontFamily: "'Scandia', sans-serif",
          fontSize: '18px',
          fontWeight: 700,
          color: '#FFFFFF'
        }}>
          {/* Line 1: Messengers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>You can get in touch with us by</span>
            <a href={`https://wa.me/${CONTACTS.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFF', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              <img src={`${basePath}/images/icon-whatsapp.svg`} alt="" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
              WhatsApp
            </a>
            <a href={`https://t.me/${CONTACTS.telegram}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFF', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              <img src={`${basePath}/images/icon-telegram.svg`} alt="" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
              Telegram
            </a>
          </div>

          {/* Line 2: Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Send a message to our email</span>
            <a href={`mailto:${CONTACTS.email}`} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFF', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              <img src={`${basePath}/images/icon-email.svg`} alt="" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
              {CONTACTS.email}
            </a>
          </div>

          {/* Line 3: Phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>or give us a call at</span>
            <a href={`tel:${CONTACTS.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFF', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              <img src={`${basePath}/images/icon-phone-2.svg`} alt="" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
              {CONTACTS.phone}
            </a>
          </div>
        </div>

        <button id="contact-sidebar-toggle" onClick={toggleSidebarDesktop}>
          <span
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              fontFamily: "'Scandia'",
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: '#fff',
              marginBottom: '10px',
            }}
          >
            Contact Us
          </span>
          <img
            src={`${basePath}/images/Vector for contacts slidebar.svg`}
            alt="Toggle"
            style={{
              width: '10px',
              transform: sidebarDesktopOn ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.3s ease'
            }}
          />
        </button>
      </aside>

      {/* Mobile Bottom Sheet */}
      <aside id="contact-sidebar-mobile" className={sidebarMobileExpanded ? 'visible' : ''}>
        <style jsx>{`
          #contact-sidebar-mobile__toggle {
            background-color: #9AC2E4 !important; /* User requested specific background color */
            color: #0033FF !important; /* User requested specific text color */
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
          }
          .contact-mobile-expanded-content {
            background-color: #9AC2E4;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center; /* Center content since we might have fewer items */
            gap: 20px; /* Add gap between icons */
            width: 100%;
          }
          .contact-mobile-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px; /* Keep size for touch target */
            height: 50px;
            background-color: transparent; /* Removed white background */
            border-radius: 50%;
            transition: transform 0.2s ease;
            text-decoration: none;
          }
          .contact-mobile-link:active {
            transform: scale(0.95);
          }
          .contact-mobile-link img {
            width: 48px;
            height: 48px;
            object-fit: contain;
            filter: brightness(0) invert(1); /* Make icon white */
          }
        `}</style>
        <button id="contact-sidebar-mobile__toggle" onClick={toggleSidebarMobile} style={{ backgroundColor: '#9AC2E4', color: '#0033FF' }}>
          Contact us
          <img
            src={`${basePath}/images/Arrow-for-mobile.svg`}
            alt="Toggle"
            className="contact-sidebar-toggle__icon"
            style={{
              transform: sidebarMobileExpanded ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.3s ease',
              width: '12px',
              height: '12px'
            }}
          />
        </button>

        {sidebarMobileExpanded && (
          <div className="contact-mobile-expanded-content">
            {CONTACTS.whatsapp && (
              <a href={`https://wa.me/${CONTACTS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="contact-mobile-link" aria-label="WhatsApp">
                <img src={`${basePath}/images/icon-whatsapp.svg`} alt="WhatsApp" />
              </a>
            )}
            {CONTACTS.telegram && (
              <a href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="contact-mobile-link" aria-label="Telegram">
                <img src={`${basePath}/images/icon-telegram.svg`} alt="Telegram" />
              </a>
            )}
            {CONTACTS.email && (
              <a href={`mailto:${CONTACTS.email}`} className="contact-mobile-link" aria-label="Email">
                <img src={`${basePath}/images/icon-email.svg`} alt="Email" />
              </a>
            )}
            {CONTACTS.phone && (
              <a href={`tel:${CONTACTS.phone}`} className="contact-mobile-link" aria-label="Phone">
                <img src={`${basePath}/images/icon-phone-2.svg`} alt="Phone" />
              </a>
            )}
          </div>
        )}
      </aside>

      {/* Overlay */}
      {(sidebarDesktopOn || sidebarMobileExpanded) && (
        <div
          id="contact-sidebar-overlay"
          onClick={() => {
            if (sidebarDesktopOn) toggleSidebarDesktop()
            if (sidebarMobileExpanded) toggleSidebarMobile()
          }}
        />
      )}
    </>
  )
}
