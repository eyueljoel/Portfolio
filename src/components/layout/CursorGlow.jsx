import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.left = `${e.clientX}px`
        el.style.top = `${e.clientY}px`
        el.style.opacity = '1'
      })
    }
    const leave = () => { el.style.opacity = '0' }
    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      cancelAnimationFrame(raf)
    }
  }, [])
  return <div ref={ref} className="cursor-glow hidden lg:block" style={{ opacity: 0 }} aria-hidden="true" />
}
