'use client'

export default function ButtonUp() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className="hidden mobile:block fixed bottom-6 right-6 w-14 h-14 rounded-[38px] bg-primary z-10 shadow-lg hover:bg-[hsl(228,100%,65%)] transition-colors"
      aria-label="Scroll to top"
    >
      <span className="text-white text-2xl">↑</span>
    </button>
  )
}
