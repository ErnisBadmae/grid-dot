'use client'

import React from 'react' // Added React import
import { useApp } from '@/contexts/AppContext'
import { CONTACTS } from '@/lib/constants'
import { basePath } from '@/lib/basePath'

export default function MobileMenu() {
  const { mobileMenuOn, toggleMobileMenu, scrollTo } = useApp()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    toggleMobileMenu() // Close menu
    scrollTo(href)
  }

  if (!mobileMenuOn) return null

  return (
    <>
      <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
      <div className="mobile-menu-panel">

        {/* Close Button */}
        <button className="mobile-menu-close" onClick={toggleMobileMenu} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="#0033FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="mobile-menu-nav">
          <a href="#section-1" onClick={(e) => handleClick(e, '#section-1')}>why extended expertise</a>
          <a href="#section-2" onClick={(e) => handleClick(e, '#section-2')}>what we offer — our expertise</a>
          <a href="#section-3" onClick={(e) => handleClick(e, '#section-3')}>how it works — simple & transparent</a>
          <a href="#section-success-stories" onClick={(e) => handleClick(e, '#section-success-stories')}>success stories — case highlights</a>
          <a href="#section-commitment" onClick={(e) => handleClick(e, '#section-commitment')}>our commitment</a>
        </nav>

        {/* Contact Section */}
        <div className="mobile-menu-contact">
          <div className="get-in-touch">Get in touch</div>
          <div className="contact-icons">
            <a href={`https://wa.me/${CONTACTS.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <img src={`${basePath}/images/icon-whatsapp.svg`} alt="WhatsApp" />
            </a>
            <a href={`https://t.me/${CONTACTS.telegram}`} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <img src={`${basePath}/images/icon-telegram.svg`} alt="Telegram" />
            </a>
            <a href={`mailto:${CONTACTS.email}`} aria-label="Email">
              <img src={`${basePath}/images/icon-email.svg`} alt="Email" />
            </a>
            <a href={`tel:${CONTACTS.phone}`} aria-label="Phone">
              <img src={`${basePath}/images/icon-phone-2.svg`} alt="Phone" />
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overly */
          z-index: 1000;
        }

        .mobile-menu-panel {
          position: fixed;
          top: 0;
          right: 0;
          height: 60%;
          background-color: #9AC2E4; /* Blue background */
          z-index: 1001;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 10px rgba(0,0,0,0.1);
          
          /* Desktop Styles */
          width: 540px;
          padding: 40px;
        }

        .mobile-menu-close {
          align-self: flex-end;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          margin-bottom: 60px; /* Spacing before links */
        }
        
        .mobile-menu-close svg {
            width: 32px; /* Close icon size */
            height: 32px;
        }
        
        .mobile-menu-close path {
             stroke: #0033FF; /* Close icon color matches text */
        }


        .mobile-menu-nav {
          display: flex;
          flex-direction: column;
          gap: 32px; /* Spacing between links */
          flex-grow: 1; /* Push contact to bottom */
        }

        .mobile-menu-nav a {
          font-family: 'Overpass Mono', monospace;
          font-weight: 700; /* Bold */
          font-size: 24px;
          color: #0B1215; 
          text-decoration: none;
          text-transform: lowercase; 
          line-height: 1.2;
        }

        .mobile-menu-contact {
          margin-top: auto; /* Push to bottom */
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .get-in-touch {
          font-family: 'Overpass Mono', monospace;
          font-weight: 700;
          font-size: 24px;
          color: #0033FF; /* Specific blue color */
        }

        .contact-icons {
          display: flex;
          gap: 20px;
        }

        .contact-icons a {
             display: flex;
             align-items: center;
             justify-content: center;
             width: 40px;
             height: 40px;
        }
        
        .contact-icons img {
            width: 100%;
            height: 100%;
            /* Filter to make icons #0033FF from black */
            filter: invert(13%) sepia(90%) saturate(5427%) hue-rotate(244deg) brightness(88%) contrast(150%);
        }


        /* Mobile Styles */
        @media (max-width: 639px) {
          .mobile-menu-panel {
            width: 100%; /* Full width */
            height: 70dvh; /* Full viewport height */
            padding: 20px; /* Smaller padding */
            overflow-y: auto; /* Allow scrolling */
            z-index: 2001; /* Ensure it's on top of everything */
            scrollbar-width: none;  /* Firefox */
            -ms-overflow-style: none;  /* IE and Edge */
          }
          
          .mobile-menu-panel::-webkit-scrollbar {
            display: none;
          }
          
          .mobile-menu-nav {
              gap: 24px;
          }

           /* Correcting filter to strictly match #0033FF */
           .contact-icons img {
              filter: invert(12%) sepia(95%) saturate(6000%) hue-rotate(246deg) brightness(95%) contrast(145%);
           }
          
          .mobile-menu-nav a {
              font-size: 20px; 
          }
        }
      `}</style>
    </>
  )
}
