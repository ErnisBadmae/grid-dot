'use client'

import { useApp } from '@/contexts/AppContext'

export default function MobileMenu() {
  const { mobileMenuOn, scrollTo } = useApp()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) scrollTo(href)
  }

  if (!mobileMenuOn) return null

  return (
    <nav id="mobile-menu" className="mobile-menu">
      <a href="#section-1" className="mobile-menu__link" onClick={handleClick}>Home</a>
      <a href="#section-2" className="mobile-menu__link" onClick={handleClick}>About</a>
      <a href="#section-3" className="mobile-menu__link" onClick={handleClick}>Services</a>
      <a href="#section-4" className="mobile-menu__link" onClick={handleClick}>Hire</a>
      <a href="#section-6" className="mobile-menu__link" onClick={handleClick}>Contact</a>
    </nav>
  )
}
