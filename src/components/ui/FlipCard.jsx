export default function FlipCard({ front, back, className = '' }) {
  return (
    <div className={`flip group [perspective:1200px] ${className}`} tabIndex={0}>
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 glass rounded-2xl p-6 [backface-visibility:hidden]">
          {front}
        </div>
        <div className="absolute inset-0 glass rounded-2xl p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </div>
  )
}

