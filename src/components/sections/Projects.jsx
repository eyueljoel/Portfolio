import { useState } from 'react'
import { ExternalLink, Star, Code2, Network, Globe, Terminal, Eye, Layers, CheckCircle2, ArrowRight } from 'lucide-react'
import { GithubIcon } from '../ui/SocialIcons'
import { projects, projectCategories, featuredProject } from '../../data/portfolio'
import GlareTilt from '../ui/GlareTilt'
import SpotlightCard from '../ui/SpotlightCard'
import Reveal from '../ui/Reveal'
import ProjectModal from '../ui/ProjectModal'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const list = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  const getCategoryCount = (catId) => {
    if (catId === 'all') return projects.length
    return projects.filter(p => p.category === catId).length
  }

  return (
    <section id="projects" className="section-padding bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold glass text-indigo-600 dark:text-indigo-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" /> Engineering Portfolio
            </span>
            <h2 className="scroll-3d text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Production ERP systems, point-of-sale applications, and systems software built with Laravel, PHP, React, Node.js, and C++.
            </p>
          </div>
        </Reveal>

        {/* ── Featured Showcase: TewosHR (Large Card with Gradient Border) ── */}
        <Reveal delay={100} className="mb-14">
          <div className="gradient-border p-[1px] shadow-2xl">
            <div className="bg-white dark:bg-ink rounded-[1.2rem] p-6 sm:p-10">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                      <Star size={12} className="fill-indigo-500 text-indigo-500" /> Featured Internship Project
                    </span>
                    <span className="text-xs font-mono text-slate-400">Tewos Company · 2024</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {featuredProject.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">What I Personally Built:</p>
                    <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5">
                      {featuredProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-3">
                    {featuredProject.stack.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <button
                      onClick={() => setSelectedProject(projects[0])}
                      className="btn-primary cursor-pointer text-xs sm:text-sm py-2.5"
                    >
                      <Terminal size={15} /> View Architecture & Code
                    </button>
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex items-center gap-2 text-xs sm:text-sm py-2.5 cursor-pointer"
                    >
                      <GithubIcon size={15} /> GitHub Repository
                    </a>
                  </div>
                </div>

                {/* Right Code/Terminal Preview Mockup */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-slate-950 border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-white/5 text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 text-[11px] text-slate-500">PayrollService.php</span>
                      </div>
                      <span className="text-[10px] text-indigo-400">Laravel 11</span>
                    </div>
                    <div className="p-4 overflow-x-auto text-slate-300 leading-relaxed text-[11px]">
                      <pre>{featuredProject.codeSnippet}</pre>
                    </div>
                    <div className="px-4 py-2 bg-slate-900/60 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                      <span>✓ MySQL Data Model</span>
                      <span>✓ Clean Service Layer</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Category Filter Buttons with Live Count Pills ── */}
        <Reveal delay={150}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map(({ id, label }) => {
              const count = getCategoryCount(id)
              const isActive = filter === id
              return (
                <button
                  key={id}
                  onClick={() => setFilter(id)}
                  className={`filter-btn flex items-center gap-2 cursor-pointer ${isActive ? 'active' : ''}`}
                >
                  <span>{label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* ── 3D Tilt Project Cards Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <GlareTilt className="h-full">
                <SpotlightCard
                  onClick={() => setSelectedProject(p)}
                  className="h-full flex flex-col justify-between cursor-pointer border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 transition-colors group"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/50 uppercase tracking-wider">
                        {p.category}
                      </span>
                      {p.featured && (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-500">
                          <Star size={11} className="fill-amber-500" /> Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {p.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div
                      className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500"
                    >
                      <span className="flex items-center gap-1">
                        <Terminal size={13} /> Architecture & Code
                      </span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </SpotlightCard>
              </GlareTilt>
            </Reveal>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
