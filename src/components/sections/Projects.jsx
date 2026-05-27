import { useState } from 'react'
import { ExternalLink, Star, Code2, Network, Shield, Globe, FlaskConical } from 'lucide-react'
import { GithubIcon } from '../ui/SocialIcons'
import { projects, projectCategories } from '../../data/portfolio'

const cm = {
  blue:   { g:'from-blue-500 to-blue-600',     b:'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',   bdr:'border-blue-100 dark:border-blue-800',   glow:'hover:shadow-glow-blue' },
  purple: { g:'from-purple-500 to-purple-600', b:'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400', bdr:'border-purple-100 dark:border-purple-800', glow:'hover:shadow-glow-purple' },
  indigo: { g:'from-indigo-500 to-indigo-600', b:'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400', bdr:'border-indigo-100 dark:border-indigo-800', glow:'hover:shadow-glow-blue' },
  violet: { g:'from-violet-500 to-violet-600', b:'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400', bdr:'border-violet-100 dark:border-violet-800', glow:'hover:shadow-glow-purple' },
  green:  { g:'from-green-500 to-emerald-600', b:'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',   bdr:'border-green-100 dark:border-green-800', glow:'hover:shadow-card-hover' },
}
const catIcons = { networking:Network, cpp:Code2, security:Shield, web:Globe, research:FlaskConical }
const catEmoji = { networking:'📡', cpp:'⚡', security:'🔐', web:'🌐', research:'🔬' }

function ProjectCard({ project, index }) {
  const c = cm[project.color] || cm.blue
  const CatIcon = catIcons[project.category] || Code2
  return (
    <div data-aos="fade-up" data-aos-delay={index*80}>
      <div className={`group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-card ${c.glow} hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}>
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-800">
              <Star size={10} className="fill-yellow-500 text-yellow-500" />Featured
            </span>
          </div>
        )}
        <div className={`relative h-44 bg-gradient-to-br ${c.g} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">{catEmoji[project.category]||'💻'}</div>
              <div className="flex items-center gap-1 text-white/80 text-xs"><CatIcon size={12} /><span className="capitalize">{project.category}</span></div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full" />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map(t => <span key={t} className={`px-2 py-0.5 rounded-md text-xs font-medium ${c.b} border ${c.bdr}`}>{t}</span>)}
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all">
              <GithubIcon size={14} />GitHub
            </a>
            {project.demo
              ? <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r ${c.g} hover:opacity-90 transition-all`}><ExternalLink size={14} />Live Demo</a>
              : <span className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 cursor-not-allowed"><ExternalLink size={14} />Coming Soon</span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">A collection of projects showcasing my skills in software development, networking, and problem solving.</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map(({ id, label }) => (
            <button key={id} onClick={() => setFilter(id)} className={`filter-btn ${filter===id?'active':''}`}>{label}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p,i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        <div data-aos="fade-up" className="text-center mt-12">
          <a href="https://github.com/eyueljoel" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex">
            <GithubIcon size={16} />View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
