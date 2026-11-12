import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import SpotlightCard from '../ui/SpotlightCard'
import Reveal from '../ui/Reveal'
import { profile } from '../../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader
            badge="My Journey"
            title="Professional Experience &"
            highlight="Education"
            subtitle="Hands-on software development experience, university academics, and foundational engineering training."
          />
        </Reveal>

        {/* Vertical Timeline */}
        <div className="mt-12 relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-white/10 space-y-12 ml-2 sm:ml-4">

          {/* 1. Tewos Company Internship (Featured First) */}
          <Reveal delay={100} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 rounded-full bg-indigo-500 border-4 border-white dark:border-ink flex items-center justify-center text-white shadow-md shadow-indigo-500/30">
              <Briefcase size={12} />
            </div>

            <SpotlightCard className="p-6 sm:p-7 border border-indigo-500/20 shadow-lg shadow-indigo-500/5">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-mono bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                      Internship
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                      <Calendar size={12} /> June 29, 2024 – August 29, 2024
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Software Developer Intern</h3>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 mt-0.5">
                    <span>Tewos Company</span>
                    <span>·</span>
                    <span className="text-xs font-normal text-slate-400 flex items-center gap-1"><MapPin size={11} /> Ethiopia</span>
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-xs font-mono text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                  <CheckCircle2 size={13} className="text-emerald-500" /> Verified Production Experience
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Contributed to the development and enhancement of an enterprise HR and Payroll Management System, learning an established production codebase and working with a collaborative development team.
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2 mb-5">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Contributions:</p>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <span>Contributed to core payroll processing logic and employee information modules using <strong>Laravel, PHP, and MySQL</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <span>Investigated and resolved bugs across existing ERP modules, refactoring backend workflows to enhance operational stability.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <span>Collaborated with engineering peers using <strong>Git and GitHub</strong> for version control, issue tracking, and code reviews.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <span>Participated in feature development for restaurant point-of-sale (POS) and client e-commerce software workflows.</span>
                  </li>
                </ul>
              </div>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-white/10">
                {['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Git', 'GitHub', 'ERP Modules', 'REST APIs'].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* 2. Haramaya University Education */}
          <Reveal delay={200} className="relative">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 rounded-full bg-emerald-500 border-4 border-white dark:border-ink flex items-center justify-center text-white shadow-md shadow-emerald-500/30">
              <GraduationCap size={12} />
            </div>

            <SpotlightCard className="p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      Undergraduate
                    </span>
                    <span className="text-xs font-mono text-slate-400">2023 – Present</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">B.Sc. Information Technology</h3>
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    Haramaya University, Ethiopia
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Undertaking formal higher education in IT, cultivating strong analytical and practical foundations across systems engineering, database modeling, and algorithms.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-white/10">
                {['Software Engineering', 'Relational Databases', 'OOP', 'Data Structures', 'Web Development'].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* 3. Cisco Networking Academy (Introduction to Networks) */}
          <Reveal delay={300} className="relative">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 rounded-full bg-cyan-500 border-4 border-white dark:border-ink flex items-center justify-center text-white shadow-md shadow-cyan-500/30">
              <Award size={12} />
            </div>

            <SpotlightCard className="p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-mono bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                      Coursework Completed
                    </span>
                    <span className="text-xs font-mono text-slate-400">2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Cisco Networking Academy: Introduction to Networks (CCNA v7 ITN)
                  </h3>
                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                    Cisco Networking Academy
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Completed structured curriculum covering network architectures, IP addressing (IPv4/IPv6 VLSM subnetting), packet tracing simulations, Ethernet switching, and router configurations.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-white/10">
                {['CCNA v7 ITN', 'IPv4 & IPv6 Subnetting', 'Cisco Packet Tracer', 'TCP/IP Protocol Suite'].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
