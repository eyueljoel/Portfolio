import { GraduationCap, Shield, Code2, Target, MapPin, Mail, Calendar, Briefcase } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { personalInfo, aboutCards } from '../../data/portfolio'
import eyuelPhoto from '../../assets/eyuel.png'

// Direct component references — avoids lucide forwardRef object bug
const CARD_ICONS = [GraduationCap, Shield, Code2, Target]
const colorMap = {
  blue:   { bg: 'bg-blue-50 dark:bg-blue-900/20',   icon: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',   border: 'border-blue-100 dark:border-blue-800' },
  purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', icon: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400', border: 'border-purple-100 dark:border-purple-800' },
  indigo: { bg: 'bg-indigo-50 dark:bg-indigo-900/20', icon: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400', border: 'border-indigo-100 dark:border-indigo-800' },
  violet: { bg: 'bg-violet-50 dark:bg-violet-900/20', icon: 'bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400', border: 'border-violet-100 dark:border-violet-800' },
}
const info = [
  { icon: Calendar,  label: 'Age',      value: `${personalInfo.age} years old` },
  { icon: MapPin,    label: 'Location', value: personalInfo.location },
  { icon: Mail,      label: 'Email',    value: personalInfo.email },
  { icon: Briefcase, label: 'Status',   value: personalInfo.availability },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <SectionHeader badge="About Me" title="Who I" highlight="Am"
          subtitle="A passionate IT student building the future, one line of code at a time." />

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ── Left — photo + info ── */}
          <div data-aos="fade-right" className="space-y-6">
            {/* Photo card */}
            <div className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
              <div className="relative flex-shrink-0">
                <img src={eyuelPhoto} alt="Eyuel Cherenet"
                  className="w-24 h-24 rounded-xl object-cover object-top shadow-card" />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg px-2 py-0.5">
                  <p className="text-xs font-bold text-white">CCNA ✓</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Eyuel Cherenet</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">IT Student & Developer</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Addis Ababa, Ethiopia · Age 21</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p>I'm a 21-year-old IT student from Ethiopia with a deep passion for technology and software development. I believe in the power of code to solve real-world problems.</p>
              <p>Currently pursuing my B.Sc. in Information Technology, I've developed strong skills in C++, Java, JavaScript, networking (Cisco CCNA certified), and web development.</p>
              <p>My goal is to become a full-stack software engineer and network security specialist.</p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Software Dev', 'Networking', 'Cybersecurity', 'Problem Solving', 'Open Source'].map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">{t}</span>
              ))}
            </div>
          </div>

          {/* ── Right — cards ── */}
          <div className="grid grid-cols-2 gap-4">
            {aboutCards.map((card, i) => {
              const Icon = CARD_ICONS[i]
              const c = colorMap[card.color]
              return (
                <div key={card.title} data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className={`p-5 rounded-2xl border ${c.border} ${c.bg} hover:-translate-y-1 hover:shadow-card transition-all duration-300 group`}>
                    <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      {Icon && <Icon size={20} />}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{card.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              )
            })}

            {/* Career goals — simple card */}
            <div className="col-span-2" data-aos="fade-up" data-aos-delay="400">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <h3 className="font-bold mb-2">Career Vision</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Aspiring to become a full-stack software engineer and network security specialist, building innovative solutions that connect software with infrastructure.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
