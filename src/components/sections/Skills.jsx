import { Code2, Server, Layout, Wrench, Sparkles, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import SpotlightCard from '../ui/SpotlightCard'
import Reveal from '../ui/Reveal'
import SkillCube from '../ui/SkillCube'
import { skillGroups } from '../../data/portfolio'

const levelColors = {
  Strong: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
  Comfortable: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
  Learning: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            badge="Technical Toolkit"
            title="Practical Skills &"
            highlight="Proficiencies"
            subtitle="Honest, experience-verified capabilities across backend engineering, modern frontend interfaces, relational databases, and tools."
          />
        </Reveal>

        {/* ── Skills Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">

          {/* Bento Box 1: Primary Engineering Stack (Large featured card: 12 cols or 8 cols) */}
          <Reveal delay={100} className="md:col-span-12 lg:col-span-8">
            <SpotlightCard className="h-full border border-indigo-500/30 p-7 bg-gradient-to-br from-indigo-500/[0.04] via-transparent to-purple-500/[0.04]">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                    <Server size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Primary Engineering Stack</h3>
                    <p className="text-xs text-indigo-500 font-mono">Core Production Focus</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-slate-500 dark:text-slate-400">Production Tested</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Hands-on backend development, relational database schemas, and dynamic user interfaces utilized during enterprise internship and personal project engineering.
              </p>

              {/* Primary Stack Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {skillGroups[0].skills.map((s) => (
                  <div
                    key={s.name}
                    className="p-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-colors shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{s.icon}</span>
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${levelColors[s.level]}`}>
                        {s.level}
                      </span>
                    </div>
                    <p className="font-bold text-sm text-slate-900 dark:text-white">{s.name}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Bento Box 2: Frontend & UI (4 cols) */}
          <Reveal delay={180} className="md:col-span-6 lg:col-span-4">
            <SpotlightCard className="h-full p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Layout size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Frontend & UI</h3>
                    <p className="text-xs text-purple-500 font-mono">Web Interfaces</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {skillGroups[1].skills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{s.icon}</span>
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{s.name}</span>
                      </div>
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${levelColors[s.level]}`}>
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Interactive 3D Skill Cube */}
                <div className="my-6 hidden sm:flex items-center justify-center py-2">
                  <SkillCube faces={['Laravel', 'PHP', 'MySQL', 'React', 'Node.js', 'Git']} size={120} />
                </div>
              </div>

              <p className="mt-4 text-[11px] text-slate-400 font-mono text-center sm:text-left">
                Component lifecycles, responsive layouts & CSS design tokens
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Bento Box 3: Additional Languages (6 cols) */}
          <Reveal delay={260} className="md:col-span-6 lg:col-span-6">
            <SpotlightCard className="h-full p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Programming Languages</h3>
                  <p className="text-xs text-cyan-500 font-mono">Academic & Systems</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {skillGroups[2].skills.map((s) => (
                  <div
                    key={s.name}
                    className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xl">{s.icon}</span>
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${levelColors[s.level]}`}>
                        {s.level}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{s.name}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Bento Box 4: Tools, OS & Networking (6 cols) */}
          <Reveal delay={340} className="md:col-span-12 lg:col-span-6">
            <SpotlightCard className="h-full p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Wrench size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tools, OS & Networking</h3>
                  <p className="text-xs text-emerald-500 font-mono">Development Workflow</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skillGroups[3].skills.map((s) => (
                  <div
                    key={s.name}
                    className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xl">{s.icon}</span>
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${levelColors[s.level]}`}>
                        {s.level}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{s.name}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

        </div>

        {/* Legend bar */}
        <Reveal delay={400} className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Strong (Primary production competency)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
            <span>Comfortable (Frequent practical application)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>Learning (Active expansion & study)</span>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
