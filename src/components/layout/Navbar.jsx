import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react'
import { useActiveSection } from '../../hooks/useScrollProgress'

const links = [
  { href:'#home', label:'Home' }, { href:'#about', label:'About' },
  { href:'#skills', label:'Skills' }, { href:'#projects', label:'Projects' },
  { href:'#experience', label:'Experience' }, { href:'#services', label:'Services' },
  { href:'#blog', label:'Blog' }, { href:'#contact', label:'Contact' },
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

  return (
    <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-sm border-b border-gray-100 dark:border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" onClick={e => { e.preventDefault(); go('#home') }} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-glow-blue group-hover:scale-110 transition-transform">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-bold text-gray-900 dark:text-white text-lg">Eyuel<span className="gradient-text">.</span></span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); go(l.href) }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active === l.href.slice(1) ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button onClick={toggleDark} className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all" aria-label="Toggle dark mode">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" onClick={e => { e.preventDefault(); go('#contact') }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-glow-blue transition-all hover:-translate-y-0.5">
            Hire Me
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 px-4 py-4 space-y-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); go(l.href) }}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${active === l.href.slice(1) ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={e => { e.preventDefault(); go('#contact') }}
            className="block w-full text-center px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
