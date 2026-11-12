import { useRef } from 'react'

export default function TiltCard({ children, max = 8, className = '', ...rest }) {
  const ref = useRef(null)
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const move = (e) => {
    if (reduce) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateZ(0)`
  }

  const leave = () => {
    if (ref.current) {
      ref.current.style.transform = ''
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}

