import { GraduationCap, Award, Code2, Globe, Rocket } from 'lucide-react'
import { timeline } from '../../data/portfolio'

// Resolve icon strings to components once, outside render
const iconMap = {
  GraduationCap,
  Award,
  Code2,
  Globe,
  Rocket,
}

// Pre-resolve so we never call iconMap[x] inside JSX render
const resolvedTimeline = timeline.map(item => ({
  ...item,
  IconComponent: iconMap[item.icon] || GraduationCap,
}))
const typeColors = {
  education:    { dot:'from-blue-500 to-blue-600',     badge:'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800',     label:'Education' },
  certification:{ dot:'from-yellow-500 to-orange-500', badge:'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-100 dark:border-yellow-800', label:'Certification' },
  learning:     { dot:'from-purple-500 to-purple-600', badge:'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-800', label:'Learning' },
  milestone:    { dot:'from-green-500 to-emerald-500', badge:'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-100 dark:border-green-800',   label:'Milestone' },
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Education & <span className="gradient-text">Experience</span></h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">My academic background, certifications, and technical learning journey.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {resolvedTimeline.map((item, i) => {
            const Icon = item.IconComponent
            const c = typeColors[item.type] || typeColors.education
            return (
              <div key={i} data-aos={i%2===0?'fade-right':'fade-left'} data-aos-delay={i*80}>
                <div className="timeline-item">
                  <div className={`timeline-dot bg-gradient-to-r ${c.dot}`}><Icon size={12} className="text-white" /></div>
                  <div className="card ml-4 group hover:border-blue-200 dark:hover:border-blue-700">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${c.badge}`}>{c.label}</span>
                          <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">{item.year}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{item.organization}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${c.dot} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon size={18} className="text-white" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(t => <span key={t} className="px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="card border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg flex-shrink-0"><span className="text-3xl">🏆</span></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Cisco CCNA</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cisco Certified Network Associate</p>
                <div className="flex items-center gap-2 mt-1"><span className="w-2 h-2 rounded-full bg-green-500" /><span className="text-xs text-green-600 dark:text-green-400 font-medium">Certified 2024</span></div>
              </div>
            </div>
            <p className="mt-4 pt-4 border-t border-yellow-200 dark:border-yellow-800 text-xs text-gray-500 dark:text-gray-400">Covers network fundamentals, IP connectivity, IP services, security fundamentals, automation and programmability.</p>
          </div>
          <div className="card border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg flex-shrink-0"><span className="text-3xl">🎓</span></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">B.Sc. Information Technology</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">University — Ethiopia</p>
                <div className="flex items-center gap-2 mt-1"><span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /><span className="text-xs text-blue-600 dark:text-blue-400 font-medium">In Progress — 2023–Present</span></div>
              </div>
            </div>
            <p className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800 text-xs text-gray-500 dark:text-gray-400">Studying software engineering, networking, databases, algorithms, cybersecurity, and system design.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
