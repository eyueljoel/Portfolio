import { useState } from 'react'
import { Code2, Heart, ArrowUp, Copy, Check, MapPin, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon, FacebookIcon, InstagramIcon } from '../ui/SocialIcons'
import { profile } from '../../data/portfolio'
import { showToast } from '../ui/Toast'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'References' },
  { href: '#blog', label: 'Articles' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { Icon: GithubIcon,    href: profile.social.github,    label: 'GitHub',    hover: 'hover:text-white' },
  { Icon: LinkedinIcon,  href: profile.social.linkedin,  label: 'LinkedIn',  hover: 'hover:text-indigo-400' },
  { Icon: TelegramIcon,  href: profile.social.telegram,  label: 'Telegram',  hover: 'hover:text-sky-400' },
  { Icon: FacebookIcon,  href: profile.social.facebook,  label: 'Facebook',  hover: 'hover:text-blue-400' },
  { Icon: InstagramIcon, href: profile.social.instagram, label: 'Instagram', hover: 'hover:text-pink-400' },
]

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    showToast('Email copied to clipboard!', 'copy')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="bg-slate-900 dark:bg-ink text-slate-400 pt-16 pb-10 border-t border-slate-800 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          {/* Brand & Socials (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <Code2 size={18} />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Eyuel<span className="text-indigo-400">.</span></span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              IT student at Haramaya University & aspiring software developer building practical ERP systems, web applications, and database solutions.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              {socials.map(({ Icon, href, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 ${hover} transition-all hover:-translate-y-0.5`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {quickLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Direct Contact
            </h3>

            <div className="p-2.5 rounded-xl glass flex items-center justify-between text-xs">
              <span className="font-mono text-slate-300 truncate max-w-[170px]">{profile.email}</span>
              <button
                onClick={copyEmail}
                className="p-1 rounded text-slate-400 hover:text-indigo-400 transition-colors"
                title="Copy email"
              >
                {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin size={13} className="text-indigo-400" />
              <span>{profile.location} · {profile.timezone}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-medium">{profile.availability}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 dark:border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Eyuel Cherenet · Built with React 19 & Tailwind CSS.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
