import { useState } from 'react'
import { GraduationCap, Briefcase, MapPin, Mail, Phone, Copy, Check, Eye, EyeOff, Sparkles, Terminal, Code2 } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import SpotlightCard from '../ui/SpotlightCard'
import Reveal from '../ui/Reveal'
import { profile } from '../../data/portfolio'
import { showToast } from '../ui/Toast'

export default function About() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [showPhone, setShowPhone] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopiedEmail(true)
    showToast('Email copied to clipboard!', 'copy')
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const copyPhone = () => {
    navigator.clipboard.writeText(profile.phone)
    setCopiedPhone(true)
    showToast('Phone number copied to clipboard!', 'copy')
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader
            badge="About Me"
            title="Building Scalable Systems with"
            highlight="Purpose"
            subtitle="IT Student and Software Developer focused on practical, user-friendly ERP solutions and modern full-stack web applications."
          />
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">

          {/* Bento Card 1: Main Bio (Col 1-8) */}
          <Reveal className="md:col-span-8 h-full" delay={100}>
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-bold">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Practical & Collaborative Engineering</h3>
                    <p className="text-xs text-indigo-500 font-mono">Full-Stack Web & ERP Systems</p>
                  </div>
                </div>

                <div className="space-y-3.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  <p>
                    I'm an Information Technology student at <span className="text-slate-900 dark:text-white font-medium">Haramaya University</span> with a passion for building software that makes real-world business operations smoother and more reliable.
                  </p>
                  <p>
                    My core technical focus centers on <span className="text-indigo-600 dark:text-indigo-400 font-medium">Laravel, PHP, MySQL, JavaScript, React, and Node.js</span>. During my developer internship at <span className="text-slate-900 dark:text-white font-medium">Tewos Company</span>, I contributed to a production HR & Payroll Management System, handling payroll processing logic, employee directory workflows, and ERP modules.
                  </p>
                  <p>
                    I value clean database normalization, readable backend architecture, transparent Git team workflows, and creating digital products that users genuinely find intuitive.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Core Tools:</span>
                {['Laravel', 'PHP', 'MySQL', 'React', 'Node.js', 'Express', 'Git'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Bento Card 2: Education (Col 9-12) */}
          <Reveal className="md:col-span-4 h-full" delay={180}>
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Education</h3>
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Haramaya University</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">B.Sc. Information Technology</p>
                <p className="text-xs font-mono text-slate-400 mt-0.5">2023 – Present · Ethiopia</p>

                <div className="mt-5 space-y-2">
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Relevant Focus:</p>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Software Engineering & Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Relational Database Systems (SQL)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Data Structures & Web Technologies
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30">
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium leading-relaxed">
                  Active academic standing pursuing modern software engineering and systems design.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Bento Card 3: Location & Timezone (Col 1-4) */}
          <Reveal className="md:col-span-4 h-full" delay={260}>
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-4">
                  <MapPin size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Location & Timezone</h3>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Ethiopia</p>
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-1">East Africa Time (EAT) · UTC+3</p>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
                  Available for remote software internships, hybrid positions, and collaborative developer teams globally.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Synchronized with EU / EAT timezones</span>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Bento Card 4: Currently Exploring / Learning (Col 5-8) */}
          <Reveal className="md:col-span-4 h-full" delay={340}>
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Currently Deep-Diving</h3>
                <p className="text-xs text-purple-500 font-mono">Expanding Capabilities</p>

                <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold mt-0.5">→</span>
                    <span><strong>Mobile Development:</strong> Cross-platform interfaces using Flutter and Dart.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold mt-0.5">→</span>
                    <span><strong>Advanced Laravel:</strong> Multi-tenant ERP architecture, event queues, and caching.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold mt-0.5">→</span>
                    <span><strong>REST API Security:</strong> Token-based authentication, RBAC, and rate limiting.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Continuous Growth</span>
                <span>2025 Focus</span>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Bento Card 5: Direct Contact & Hidden Phone (Col 9-12) */}
          <Reveal className="md:col-span-4 h-full" delay={420}>
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-4">
                  <Mail size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Get In Touch</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Quick one-click communication</p>

                {/* Email Copy */}
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-700 dark:text-slate-300 truncate max-w-[170px]">
                    {profile.email}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-500 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Hidden Phone (Protected from bots with Reveal/Copy) */}
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-700 dark:text-slate-300">
                    {showPhone ? profile.phone : '+251 ••• ••• •••'}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setShowPhone(!showPhone)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-500 transition-colors"
                      title={showPhone ? 'Hide phone' : 'Reveal phone'}
                    >
                      {showPhone ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                    <button
                      onClick={copyPhone}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-500 transition-colors"
                      title="Copy Phone"
                    >
                      {copiedPhone ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="mt-5 w-full text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow-md shadow-indigo-500/20 hover:opacity-95 transition-opacity"
              >
                Send Direct Email
              </a>
            </SpotlightCard>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
