import { useRef } from 'react'

export default function GlareTilt({ children, max = 10, className = '', ...rest }) {
  const ref = useRef(null)
  const glare = useRef(null)
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const move = (e) => {
    if (reduce || !ref.current || !glare.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    ref.current.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg) scale3d(1.02,1.02,1.02)`
    glare.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,.22), transparent 55%)`
    glare.current.style.opacity = '1'
  }

  const leave = () => {
    if (ref.current) {
      ref.current.style.transform = ''
    }
    if (glare.current) {
      glare.current.style.opacity = '0'
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...rest}
    >
      {children}
      <div
        ref={glare}
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 z-20"
      />
    </div>
  )
}

