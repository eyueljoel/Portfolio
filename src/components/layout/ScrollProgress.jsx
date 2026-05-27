import { useScrollProgress } from '../../hooks/useScrollProgress'

export default function ScrollProgress() {
  const p = useScrollProgress()
  return (
    <div
      className="scroll-progress transition-all duration-100"
      style={{ width: `${p * 100}%` }}
      role="progressbar"
      aria-valuenow={Math.round(p * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}
