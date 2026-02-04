'use client'

import { useApp } from '@/contexts/AppContext'
import { CONTACTS } from '@/lib/constants'

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
        <p>
          <a href={`mailto:${CONTACTS.email}`} className="link">{CONTACTS.email}</a>
        </p>
        <p>
          <a href={`tel:${CONTACTS.phone}`} className="link">{CONTACTS.phone}</a>
        </p>
        <p>
          <a href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`} className="link" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </p>
        <p>
          <a href={`https://wa.me/${CONTACTS.whatsapp}`} className="link" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </p>

        <button id="contact-sidebar-toggle" onClick={toggleSidebarDesktop}>
          <img
            src="/images/Vector for contacts slidebar.svg"
            alt="Toggle"
            style={{
              transform: sidebarDesktopOn ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.3s ease'
            }}
          />
        </button>
      </aside>

      {/* Mobile Bottom Sheet */}
      <aside id="contact-sidebar-mobile" className={sidebarMobileExpanded ? 'visible' : ''}>
        <button id="contact-sidebar-mobile__toggle" onClick={toggleSidebarMobile}>
          Contacts
          <span className="contact-sidebar-toggle__icon">→</span>
        </button>

        {sidebarMobileExpanded && (
          <div className="p-20">
            <p><a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a></p>
            <p><a href={`tel:${CONTACTS.phone}`}>{CONTACTS.phone}</a></p>
            <p>
              <a href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </p>
            <p>
              <a href={`https://wa.me/${CONTACTS.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </p>
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

