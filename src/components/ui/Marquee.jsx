export default function Marquee({ items = [] }) {
  if (!items.length) return null
  const row = [...items, ...items] // duplicated for seamless infinite loop

  return (
    <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <ul className="flex w-max gap-3 sm:gap-4 animate-marquee hover:[animation-play-state:paused]">
        {row.map((tech, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="glass rounded-full px-4 sm:px-5 py-1.5 sm:py-2 font-mono text-xs sm:text-sm whitespace-nowrap text-slate-700 dark:text-slate-300 shadow-sm"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}

