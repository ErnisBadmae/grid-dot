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
      {/* Desktop Sidebar — matches old site 1:1 */}
      <aside
        id="contact-sidebar"
        className={`${sidebarDesktopOn ? 'visible' : ''} ${sidebarDesktopHover ? 'hover' : ''}`}
        onMouseEnter={() => setSidebarDesktopHover(true)}
        onMouseLeave={() => setSidebarDesktopHover(false)}
      >
        {/* Content panel */}
        <div style={{ padding: '16px 38px 16px 28px' }}>
          {/* Line 1: Messengers */}
          <p>
            <span>You can get in touch with us by</span>
            {CONTACTS.whatsapp && (
              <a href={`https://wa.me/${CONTACTS.whatsapp}`} className="link" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <img className="svg-icon" src={`${basePath}/images/icon-whatsapp.svg`} alt="WhatsApp" style={{ filter: 'brightness(0) invert(1)' }} />
                WhatsApp
              </a>
            )}
            {CONTACTS.telegram && (
              <a href={`https://t.me/${CONTACTS.telegram}`} className="link" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <img className="svg-icon" src={`${basePath}/images/icon-telegram.svg`} alt="Telegram" style={{ filter: 'brightness(0) invert(1)' }} />
                Telegram
              </a>
            )}
          </p>

          {/* Line 2: Email */}
          {CONTACTS.email && (
            <p>
              <span>Send a message to our email</span>
              <a href={`mailto:${CONTACTS.email}`} className="link" aria-label="Email">
                <img className="svg-icon" src={`${basePath}/images/icon-email.svg`} alt="Email" style={{ filter: 'brightness(0) invert(1)' }} />
                {CONTACTS.email}
              </a>
            </p>
          )}

          {/* Line 3: Phone */}
          {CONTACTS.phone && (
            <p>
              <span>or give us a call at</span>
              <a href={`tel:${CONTACTS.phone}`} className="link" aria-label="Phone">
                <img className="svg-icon" src={`${basePath}/images/icon-phone-2.svg`} alt="Phone" style={{ filter: 'brightness(0) invert(1)' }} />
                {CONTACTS.phone}
              </a>
            </p>
          )}
        </div>

        {/* Toggle tab — div like in old site */}
        <div
          id="contact-sidebar-toggle"
          className="contact-sidebar-toggle"
          onClick={toggleSidebarDesktop}
        >
          Contact Us
          <img
            src={`${basePath}/images/icon-arrow-horizontal.svg`}
            className="contact-sidebar-toggle__icon"
            alt=""
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>
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
