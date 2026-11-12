import { useEffect, useRef } from 'react'

/**
 * Custom cursor ring that:
 * - Lags behind real cursor for a smooth trailing feel
 * - Grows + fills on hover over interactive elements
 * - Hides on touch/coarse-pointer devices
 * - Respects prefers-reduced-motion
 */
export default function CursorRing() {
  const ring = useRef(null)
  const dot = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || reducedMotion) return

    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let rx = tx, ry = ty
    let raf

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      // Dot follows instantly
      if (dot.current) {
        dot.current.style.transform = `translate3d(${tx - 3}px,${ty - 3}px,0)`
      }
    }

    const onOver = (e) => {
      const hot = e.target.closest('a,button,[role="button"],input,textarea,select,[tabindex]')
      ring.current?.classList.toggle('ring-hot', !!hot)
    }

    const onDown = () => ring.current?.classList.add('ring-click')
    const onUp   = () => ring.current?.classList.remove('ring-click')

    const loop = () => {
      rx += (tx - rx) * 0.14
      ry += (ty - ry) * 0.14
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx - 18}px,${ry - 18}px,0)`
      }
      raf = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    loop()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Lagging ring */}
      <div
        ref={ring}
        aria-hidden="true"
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 rounded-full border border-indigo-400/50 transition-[width,height,background,opacity,margin] duration-200 md:block"
      />
      {/* Instant dot */}
      <div
        ref={dot}
        aria-hidden="true"
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 rounded-full bg-indigo-400 transition-opacity duration-200 md:block"
      />
    </>
  )
}

