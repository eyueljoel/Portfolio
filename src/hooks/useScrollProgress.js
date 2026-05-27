import { useState, useEffect, useRef } from 'react'

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

// Pass a stable string[] — defined outside component or with useMemo
export function useActiveSection(sections) {
  const [active, setActive] = useState('')
  // Use a ref so the effect never re-runs due to array identity changes
  const sectionsRef = useRef(sections)

  useEffect(() => {
    const ids = sectionsRef.current
    const onScroll = () => {
      const y = window.scrollY + 120
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, []) // empty deps — runs once only

  return active
}
