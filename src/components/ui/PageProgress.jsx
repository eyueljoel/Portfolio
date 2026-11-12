import { useEffect, useRef } from 'react'

/**
 * PageProgress — a slim progress bar at the very top of the viewport
 * that fills as the user scrolls the page.
 * Uses a rAF loop for silky performance.
 */
export default function PageProgress() {
  const bar = useRef(null)

  useEffect(() => {
    let raf
    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? (scrolled / total) * 100 : 0
      if (bar.current) bar.current.style.width = `${pct}%`
      raf = requestAnimationFrame(update)
    }
    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9998] h-[2px] w-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-none"
      ref={bar}
      style={{ width: '0%' }}
    />
  )
}

