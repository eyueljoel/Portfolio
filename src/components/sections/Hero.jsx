import { useState, useEffect } from 'react'
import { Download, Mail, ChevronDown, Sparkles, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon, FacebookIcon } from '../ui/SocialIcons'
import { personalInfo } from '../../data/portfolio'
import eyuelPhoto from '../../assets/eyuel.png'

function TypingEffect({ words }) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const word = words[idx]
    let t
    if (paused) {
      t = setTimeout(() => { setPaused(false); setDeleting(true) }, 2000)
      return () => clearTimeout(t)
    }
    if (deleting) {
      if (!text.length) { setDeleting(false); setIdx(p => (p + 1) % words.length); return }
      t = setTimeout(() => setText(p => p.slice(0, -1)), 60)
    } else {
      if (text.length === word.length) { setPaused(true); return }
      t = setTimeout(() => setText(word.slice(0, text.length + 1)), 100)
    }
    return () => clearTimeout(t)
  }, [text, deleting, paused, idx, words])

  return <span className="gradient-text font-bold">{text}<span className="typing-cursor" /></span>
}

const socials = [
  { Icon: GithubIcon,   href: personalInfo.social.github,   label: 'GitHub' },
  { Icon: LinkedinIcon, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { Icon: TelegramIcon, href: personalInfo.social.telegram, label: 'Telegram' },
  { Icon: FacebookIcon, href: personalInfo.social.facebook, label: 'Facebook' },
]

export default function Hero() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20 dark:from-gray-950 dark:via-blue-950/10 dark:to-purple-950/10">

      {/* Simple gradient orbs — no particles */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left content ── */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <div data-aos="fade-up" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for Opportunities
            </div>

            <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text-animated">Eyuel Cherenet</span>
            </h1>

            <div data-aos="fade-up" data-aos-delay="200" className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-5 h-9">
              <TypingEffect words={personalInfo.taglines} />
            </div>

            <p data-aos="fade-up" data-aos-delay="300" className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* CTA buttons */}
            <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <button onClick={() => go('projects')} className="btn-primary group">
                View Projects <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href={personalInfo.cvUrl} download className="btn-secondary">
                <Download size={15} /> Download CV
              </a>
              <button onClick={() => go('contact')} className="btn-ghost">
                <Mail size={15} /> Contact Me
              </button>
            </div>

            {/* Social links */}
            <div data-aos="fade-up" data-aos-delay="500" className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-sm text-gray-400">Follow me:</span>
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:-translate-y-0.5">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right — photo ── */}
          <div data-aos="fade-left" data-aos-delay="150" className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-15 scale-110" />

              {/* Photo */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={eyuelPhoto}
                  alt="Eyuel Cherenet"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Badge — Cisco */}
              <div className="absolute -top-3 -right-3 bg-white dark:bg-gray-800 rounded-xl px-3 py-2 shadow-card border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🏆</span>
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white leading-none">Cisco</p>
                    <p className="text-xs text-gray-500 leading-none">CCNA</p>
                  </div>
                </div>
              </div>

              {/* Badge — Projects */}
              <div className="absolute -bottom-3 -left-3 bg-white dark:bg-gray-800 rounded-xl px-3 py-2 shadow-card border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">💻</span>
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white leading-none">6+ Projects</p>
                    <p className="text-xs text-gray-500 leading-none">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={() => go('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-blue-500 transition-colors"
        aria-label="Scroll down">
        <span className="text-xs">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  )
}
