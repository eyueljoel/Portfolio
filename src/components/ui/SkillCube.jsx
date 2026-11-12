export default function SkillCube({
  faces = ['Laravel', 'PHP', 'MySQL', 'React', 'Node.js', 'Git'],
  size = 150,
}) {
  const half = size / 2
  const transforms = [
    `rotateY(0deg) translateZ(${half}px)`,
    `rotateY(90deg) translateZ(${half}px)`,
    `rotateY(180deg) translateZ(${half}px)`,
    `rotateY(-90deg) translateZ(${half}px)`,
    `rotateX(90deg) translateZ(${half}px)`,
    `rotateX(-90deg) translateZ(${half}px)`,
  ]

  return (
    <div
      className="cube-scene select-none"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`Core technical stack cube: ${faces.join(', ')}`}
    >
      <div className="cube">
        {faces.map((face, i) => (
          <div
            key={face}
            className="cube-face font-mono text-xs sm:text-sm font-bold text-slate-100"
            style={{ width: size, height: size, transform: transforms[i] }}
          >
            {face}
          </div>
        ))}
      </div>
    </div>
  )
}

