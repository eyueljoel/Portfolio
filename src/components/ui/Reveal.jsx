import { useInView } from 'react-intersection-observer'

export default function Reveal({ children, delay = 0, y = 24, className = '', ...rest }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView || reduce ? 1 : 0,
        transform: inView || reduce ? 'none' : `translateY(${y}px)`,
        transition: reduce
          ? 'none'
          : `opacity .8s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .8s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

