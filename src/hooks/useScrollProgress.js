import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? window.scrollY / total : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return progress
}

export function useActiveSection(sections) {
  const [active, setActive] = useState(sections[0] || 'home')

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 160
      // If at bottom of page, activate last item
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActive(sections[sections.length - 1])
        return
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i]
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const top = rect.top + window.scrollY
        if (scrollPos >= top) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return active
}
