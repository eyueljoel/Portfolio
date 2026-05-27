import { useState } from 'react'
import { Code2, Network, Database, Wrench, Users } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '../ui/SectionHeader'
import { skills } from '../../data/portfolio'

const cats = [
  { id:'programming', label:'Programming', Icon:Code2, color:'blue' },
  { id:'networking',  label:'Networking',  Icon:Network, color:'purple' },
  { id:'databases',   label:'Databases',   Icon:Database, color:'indigo' },
  { id:'tools',       label:'Tools',       Icon:Wrench, color:'violet' },
  { id:'soft',        label:'Soft Skills', Icon:Users, color:'green' },
]
const cm = {
  blue:   { tab:'bg-blue-600 text-white',   bar:'from-blue-500 to-blue-600',     badge:'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' },
  purple: { tab:'bg-purple-600 text-white', bar:'from-purple-500 to-purple-600', badge:'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' },
  indigo: { tab:'bg-indigo-600 text-white', bar:'from-indigo-500 to-indigo-600', badge:'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' },
  violet: { tab:'bg-violet-600 text-white', bar:'from-violet-500 to-violet-600', badge:'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400' },
  green:  { tab:'bg-green-600 text-white',  bar:'from-green-500 to-green-600',   badge:'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' },
}

function SkillBar({ skill, bar, delay=0 }) {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 })
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2"><span>{skill.icon}</span><span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span></div>
        <span className="text-sm font-bold text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div className={`skill-fill bg-gradient-to-r ${bar}`} style={{width:inView?`${skill.level}%`:'0%',transitionDelay:`${delay}ms`}} />
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('programming')
  const cat = cats.find(c => c.id === active)
  const list = skills[active] || []
  const CatIcon = cat?.Icon  // extract to variable so JSX can render it

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionHeader badge="My Skills" title="Technical" highlight="Expertise" subtitle="A comprehensive overview of my technical skills and proficiency levels." />

        <div data-aos="fade-up" className="flex flex-wrap justify-center gap-3 mb-12">
          {cats.map(({ id, label, Icon, color }) => (
            <button key={id} onClick={() => setActive(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${active===id ? `${cm[color].tab} border-transparent shadow-md` : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-blue-300'}`}>
              <Icon size={16} />{label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <div className="card space-y-5">
              <div className="flex items-center gap-3 mb-6">
                {CatIcon && <CatIcon size={20} className="text-blue-600 dark:text-blue-400" />}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cat?.label} Skills</h3>
              </div>
              {list.map((s,i) => <SkillBar key={s.name} skill={s} bar={cm[cat?.color||'blue'].bar} delay={i*100} />)}
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="grid grid-cols-2 gap-3">
              {list.map(s => (
                <div key={s.name} className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-card transition-all hover:-translate-y-0.5 group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{s.icon}</span>
                    <span className="font-semibold text-gray-900 dark:text-white text-sm">{s.name}</span>
                  </div>
                  <div className="skill-bar mb-2"><div className={`skill-fill bg-gradient-to-r ${cm[cat?.color||'blue'].bar}`} style={{width:`${s.level}%`}} /></div>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cm[cat?.color||'blue'].badge}`}>{s.level>=85?'Expert':s.level>=70?'Advanced':'Intermediate'}</span>
                    <span className="text-xs text-gray-400">{s.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="mt-16">
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">All Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[{n:'C++',e:'⚡'},{n:'C',e:'🔧'},{n:'Java',e:'☕'},{n:'JavaScript',e:'🌐'},{n:'HTML5',e:'🎨'},{n:'CSS3',e:'💅'},{n:'React',e:'⚛️'},{n:'MySQL',e:'🗄️'},{n:'Git',e:'🐙'},{n:'GitHub',e:'🐱'},{n:'VS Code',e:'💻'},{n:'Packet Tracer',e:'📡'},{n:'Linux',e:'🐧'},{n:'CCNA',e:'🏆'},{n:'OSPF',e:'🔀'},{n:'VLANs',e:'🔌'},{n:'Tailwind CSS',e:'🎯'},{n:'Python',e:'🐍'}].map(({n,e}) => (
                <span key={n} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-default">
                  <span>{e}</span>{n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
