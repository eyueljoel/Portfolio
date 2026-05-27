import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FolderOpen, Code2, Award, Clock } from 'lucide-react'
import { stats } from '../../data/portfolio'

// Map icon name strings → actual components using createElement-safe references
// We avoid object maps because lucide forwardRef objects break when used as JSX via map lookup
const ICONS = [FolderOpen, Code2, Award, Clock]

const colors = [
  { g: 'from-blue-500 to-blue-600',     bg: 'bg-blue-50 dark:bg-blue-900/20',    icon: 'text-blue-600 dark:text-blue-400' },
  { g: 'from-purple-500 to-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20', icon: 'text-purple-600 dark:text-purple-400' },
  { g: 'from-yellow-500 to-orange-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20', icon: 'text-yellow-600 dark:text-yellow-400' },
  { g: 'from-green-500 to-emerald-500', bg: 'bg-green-50 dark:bg-green-900/20',   icon: 'text-green-600 dark:text-green-400' },
]

function StatCard({ stat, icon: IconComponent, color, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-delay={delay}
      className="card text-center group hover:border-blue-200 dark:hover:border-blue-700"
    >
      <div className={`w-12 h-12 rounded-xl ${color.bg} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
        <IconComponent size={22} className={color.icon} />
      </div>
      <div className={`text-3xl md:text-4xl font-black mb-1 bg-gradient-to-r ${color.g} bg-clip-text text-transparent`}>
        {inView
          ? <CountUp start={0} end={stat.value} duration={2} useEasing suffix={stat.suffix} />
          : `0${stat.suffix}`
        }
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            By the <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">A snapshot of my journey so far</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <StatCard
              key={s.label}
              stat={s}
              icon={ICONS[i % ICONS.length]}
              color={colors[i % colors.length]}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
