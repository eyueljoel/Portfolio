import { Globe, Network, Palette, BookOpen, Database, Shield, ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { services } from '../../data/portfolio'

// Pre-resolve icons ONCE at module level — avoids lucide forwardRef object bug
// when icons are looked up via string key inside JSX render
const iconMap = { Globe, Network, Palette, BookOpen, Database, Shield }
const resolvedServices = services.map(s => ({
  ...s,
  IconComponent: iconMap[s.icon] || Globe,
}))

const cm = {
  blue:   { g: 'from-blue-500 to-blue-600',     icon: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',     feat: 'text-blue-600 dark:text-blue-400' },
  purple: { g: 'from-purple-500 to-purple-600', icon: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400', feat: 'text-purple-600 dark:text-purple-400' },
  indigo: { g: 'from-indigo-500 to-indigo-600', icon: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400', feat: 'text-indigo-600 dark:text-indigo-400' },
  violet: { g: 'from-violet-500 to-violet-600', icon: 'bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400', feat: 'text-violet-600 dark:text-violet-400' },
  green:  { g: 'from-green-500 to-emerald-600', icon: 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400',     feat: 'text-green-600 dark:text-green-400' },
  orange: { g: 'from-orange-500 to-red-500',    icon: 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400', feat: 'text-orange-600 dark:text-orange-400' },
}

export default function Services() {
  const go = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="What I Offer"
          title="My"
          highlight="Services"
          subtitle="Professional services to help you build, configure, and optimize your digital solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resolvedServices.map((s, i) => {
            const Icon = s.IconComponent
            const c = cm[s.color] || cm.blue
            return (
              <div key={s.title} data-aos="fade-up" data-aos-delay={i * 70}>
                <div className="card h-full flex flex-col group hover:border-blue-200 dark:hover:border-blue-700">
                  <div className={`w-11 h-11 rounded-xl ${c.icon} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">{s.description}</p>
                  <ul className="space-y-1 mb-4">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${c.g} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={go}
                    className={`flex items-center gap-1 text-sm font-semibold ${c.feat} mt-auto group-hover:gap-2 transition-all`}
                  >
                    Get Started <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
