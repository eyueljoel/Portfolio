import { useState, useEffect, useRef } from 'react'
import {
  Search,
  Command,
  Moon,
  Sun,
  Download,
  Copy,
  ExternalLink,
  Home,
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  Layers,
  FileCheck,
  BookOpen,
  Mail,
  X,
  ArrowRight,
} from 'lucide-react'
import { profile } from '../../data/portfolio'
import { showToast } from './Toast'

export default function CommandPalette({ isDark, toggleDark }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      } else if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }

    const handleCustomOpen = () => setOpen(true)

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('open-command-palette', handleCustomOpen)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('open-command-palette', handleCustomOpen)
    }
  }, [open])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setSelectedIndex(0)
    }
  }, [open])

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const copyText = (text, label) => {
    setOpen(false)
    navigator.clipboard.writeText(text)
    showToast(`${label} copied to clipboard!`, 'copy')
  }

  const downloadCv = () => {
    setOpen(false)
    const link = document.createElement('a')
    link.href = profile.cvUrl
    link.download = 'Eyuel_Cherenet_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    showToast('Downloading Eyuel Cherenet CV...', 'success')
  }

  const actions = [
    // Navigation
    { id: 'nav-home', title: 'Go to Home', category: 'Navigation', icon: Home, perform: () => scrollTo('home') },
    { id: 'nav-about', title: 'Go to About Me & Education', category: 'Navigation', icon: User, perform: () => scrollTo('about') },
    { id: 'nav-exp', title: 'Go to Experience (Tewos Internship)', category: 'Navigation', icon: Briefcase, perform: () => scrollTo('experience') },
    { id: 'nav-projects', title: 'Go to Projects (TewosHR, POS, Library)', category: 'Navigation', icon: FolderGit2, perform: () => scrollTo('projects') },
    { id: 'nav-skills', title: 'Go to Skills & Proficiencies', category: 'Navigation', icon: Cpu, perform: () => scrollTo('skills') },
    { id: 'nav-services', title: 'Go to Services', category: 'Navigation', icon: Layers, perform: () => scrollTo('services') },
    { id: 'nav-references', title: 'Go to References & Endorsements', category: 'Navigation', icon: FileCheck, perform: () => scrollTo('testimonials') },
    { id: 'nav-blog', title: 'Go to Articles & Knowledge', category: 'Navigation', icon: BookOpen, perform: () => scrollTo('blog') },
    { id: 'nav-contact', title: 'Go to Contact Form', category: 'Navigation', icon: Mail, perform: () => scrollTo('contact') },

    // Quick Actions
    { id: 'act-copy-email', title: `Copy Email (${profile.email})`, category: 'Actions', icon: Copy, perform: () => copyText(profile.email, 'Email') },
    { id: 'act-copy-phone', title: 'Copy Phone Number', category: 'Actions', icon: Copy, perform: () => copyText(profile.phone, 'Phone number') },
    { id: 'act-download-cv', title: 'Download CV / Resume (PDF)', category: 'Actions', icon: Download, perform: downloadCv },
    { id: 'act-theme', title: `Switch to ${isDark ? 'Light' : 'Dark'} Mode`, category: 'Actions', icon: isDark ? Sun : Moon, perform: () => { toggleDark(); setOpen(false); showToast(`Switched to ${isDark ? 'Light' : 'Dark'} mode`, 'info') } },

    // Social Links
    { id: 'soc-github', title: 'Open GitHub Profile', category: 'Social', icon: ExternalLink, perform: () => { window.open(profile.social.github, '_blank'); setOpen(false) } },
    { id: 'soc-linkedin', title: 'Open LinkedIn Profile', category: 'Social', icon: ExternalLink, perform: () => { window.open(profile.social.linkedin, '_blank'); setOpen(false) } },
    { id: 'soc-telegram', title: 'Open Telegram Channel', category: 'Social', icon: ExternalLink, perform: () => { window.open(profile.social.telegram, '_blank'); setOpen(false) } },
  ]

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  )

  const handleKeyDownList = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filtered.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].perform()
      }
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-white dark:bg-ink rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden transform transition-all duration-200 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-white/10">
          <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            onKeyDown={handleKeyDownList}
            placeholder="Type a command or search sections... (↑↓ to navigate)"
            className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none"
          />
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-400">
              No matching actions found for "{query}"
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon
              const isSelected = index === selectedIndex
              return (
                <div
                  key={item.id}
                  onClick={item.perform}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-sm transition-all ${
                    isSelected
                      ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-medium'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        isSelected
                          ? 'bg-indigo-500 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-white/[0.05] text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      <Icon size={15} />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.05] text-slate-400 font-mono">
                      {item.category}
                    </span>
                    {isSelected && <ArrowRight size={14} className="text-indigo-500" />}
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-200 dark:border-white/10 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded font-mono">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded font-mono">↵</kbd> Select</span>
            <span><kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded font-mono">ESC</kbd> Close</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px]">
            <Command size={11} /> + K
          </div>
        </div>
      </div>
    </div>
  )
}
