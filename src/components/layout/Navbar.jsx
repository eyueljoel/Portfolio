import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Code2, Search } from 'lucide-react'
import { useActiveSection } from '../../hooks/useScrollProgress'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'References' },
  { href: '#blog', label: 'Articles' },
  { href: '#contact', label: 'Contact' },
]
const sectionIds = links.map(l => l.href.slice(1))

export default function Navbar({ isDark, toggleDark }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href) => {
    setOpen(false)
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  const triggerCommandPalette = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'))
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-ink/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/5 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); go('#home') }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Code2 size={16} className="text-white" />
          </div>
          <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight">
            Eyuel<span className="text-indigo-500">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href.slice(1)
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); go(l.href) }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]'
                }`}
              >
                {l.label}
              </a>
            )
          })}
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2">
          {/* Quick Search Pill */}
          <button
            onClick={triggerCommandPalette}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-slate-500 dark:text-slate-400 text-xs hover:border-indigo-400/50 transition-colors cursor-pointer"
            title="Search or press Ctrl+K"
          >
            <Search size={13} />
            <span className="hidden md:inline font-sans">Search</span>
            <kbd className="px-1.5 py-0.2 rounded bg-slate-200 dark:bg-white/10 font-mono text-[10px]">Ctrl+K</kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); go('#contact') }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow-md shadow-indigo-500/20 hover:opacity-95 transition-opacity"
          >
            Contact Me
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 dark:bg-ink/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/5 px-4 py-4 space-y-1">
          <button
            onClick={() => { setOpen(false); triggerCommandPalette() }}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium glass text-slate-600 dark:text-slate-300 mb-2"
          >
            <span className="flex items-center gap-2"><Search size={14} /> Quick Search</span>
            <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded font-mono text-[10px]">Ctrl+K</kbd>
          </button>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); go(l.href) }}
              className={`block px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
                active === l.href.slice(1)
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/[0.03]'
              }`}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); go('#contact') }}
            className="block w-full text-center px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 mt-2"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  )
}
