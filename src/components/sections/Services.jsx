import { Globe, Network, Palette, BookOpen, Database, Shield, ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { services } from '../../data/portfolio'

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
  const handleSelectService = (serviceTitle) => {
    window.dispatchEvent(new CustomEvent('select-service', { detail: { service: serviceTitle } }))
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="What I Offer"
          title="Professional"
          highlight="Services"
          subtitle="Specialized capabilities in web engineering, enterprise Cisco network design, database systems, and technical tutoring."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resolvedServices.map((s, i) => {
            const Icon = s.IconComponent
            const c = cm[s.color] || cm.blue
            return (
              <div key={s.title} data-aos="fade-up" data-aos-delay={i * 70}>
                <div className="card h-full flex flex-col group hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">{s.description}</p>
                  
                  <ul className="space-y-1.5 mb-5 border-t border-gray-100 dark:border-gray-800 pt-3">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${c.g} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSelectService(s.title)}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-xs font-semibold ${c.feat} transition-all mt-auto group/btn`}
                  >
                    <span>Request Service</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
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
