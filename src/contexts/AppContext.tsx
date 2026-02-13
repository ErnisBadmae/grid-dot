'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextType {
  mobileMenuOn: boolean
  toggleMobileMenu: () => void
  sidebarDesktopOn: boolean
  sidebarDesktopHover: boolean
  setSidebarDesktopHover: (hover: boolean) => void
  toggleSidebarDesktop: () => void
  sidebarMobileExpanded: boolean
  toggleSidebarMobile: () => void
  scrollTo: (target: string, offset?: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [mobileMenuOn, setMobileMenuOn] = useState(false)
  const [sidebarDesktopOn, setSidebarDesktopOn] = useState(false)
  const [sidebarDesktopHover, setSidebarDesktopHover] = useState(false)
  const [sidebarMobileExpanded, setSidebarMobileExpanded] = useState(false)

  const scrollTo = (target: string, offset: string = '25%') => {
    const element = document.querySelector(target)
    if (!element) return

    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const windowHeight = window.innerHeight

    let offsetPosition: number

    if (offset === 'start') {
      // Scroll to top of element with small offset for header
      offsetPosition = elementPosition - 120 // 120px for header height
    } else if (offset === 'center') {
      const elementHeight = element.getBoundingClientRect().height
      offsetPosition = elementPosition - windowHeight / 2 + elementHeight / 2
    } else {
      const percentageOffset = (parseFloat(offset) / 100) * windowHeight
      offsetPosition = elementPosition - percentageOffset
    }

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })

    if (mobileMenuOn) setMobileMenuOn(false)
  }

  const value: AppContextType = {
    mobileMenuOn,
    toggleMobileMenu: () => setMobileMenuOn(!mobileMenuOn),
    sidebarDesktopOn,
    sidebarDesktopHover,
    setSidebarDesktopHover,
    toggleSidebarDesktop: () => {
      setSidebarDesktopOn(!sidebarDesktopOn)
      setSidebarDesktopHover(false)
    },
    sidebarMobileExpanded,
    toggleSidebarMobile: () => setSidebarMobileExpanded(!sidebarMobileExpanded),
    scrollTo,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
