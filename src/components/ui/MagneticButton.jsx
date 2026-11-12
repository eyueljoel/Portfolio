import { useRef, useCallback } from 'react'

/**
 * Wraps any child in a magnetic attraction zone.
 * On mouse-enter the element drifts toward the cursor.
 * strength  — how many px it moves (default 0.35 of offset)
 * radius    — activation distance in px (default 80)
 * Respects prefers-reduced-motion — passes through as a plain div if reduced.
 */
export default function MagneticButton({ children, strength = 0.35, radius = 80, className = '' }) {
  const ref = useRef(null)
  const reduced = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const onMove = useCallback((e) => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < radius) {
      el.style.transform = `translate3d(${dx * strength}px,${dy * strength}px,0)`
      el.style.transition = 'transform 0.2s cubic-bezier(.23,1,.32,1)'
    }
  }, [reduced, strength, radius])

  const onLeave = useCallback(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0,0,0)'
    el.style.transition = 'transform 0.5s cubic-bezier(.23,1,.32,1)'
  }, [reduced])

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}
