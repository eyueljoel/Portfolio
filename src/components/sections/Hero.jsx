import { Download, ArrowDown, ExternalLink, Copy, Check } from 'lucide-react'
import HeroBackground from '../3d/HeroBackground'
import MagneticButton from '../ui/MagneticButton'
import Marquee from '../ui/Marquee'
import useScramble from '../../hooks/useScramble'
import { profile } from '../../data/portfolio'
import { showToast } from '../ui/Toast'
import eyuelPhoto from '../../assets/eyuel.png'

export default function Hero() {
  const role = useScramble(profile.taglines || profile.roles, 2400)

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-12">
      {/* 3D WebGL Scene with automatic CSS Aurora fallback */}
      <HeroBackground labels={profile.stackStrip.slice(0, 6)} colors={profile.heroScene.colors} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left Content (7 cols) ── */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-ring" />
              <span className="text-slate-700 dark:text-slate-300">{profile.availability}</span>
            </div>

            {/* Headline Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-bold text-slate-900 dark:text-white leading-[1.08] tracking-tight mb-4 animate-fade-up [animation-delay:100ms]">
              Hi, I'm <span className="text-gradient">{profile.name}</span>
            </h1>

            {/* Rotating Role with Scramble Decode */}
            <div className="h-8 font-mono text-base sm:text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-6 flex items-center justify-center lg:justify-start animate-fade-up [animation-delay:200ms]">
              <span>&gt; {role}</span>
              <span className="typing-cursor ml-0.5" />
            </div>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up [animation-delay:300ms]">
              {profile.headline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-up [animation-delay:400ms]">
              <a href="#projects" onClick={(e) => { e.preventDefault(); go('projects') }}>
                <MagneticButton className="cursor-pointer">
                  View Projects <ArrowDown size={17} />
                </MagneticButton>
              </a>
              <a
                href={profile.cvUrl}
                download="Eyuel_Cherenet_CV.pdf"
                className="btn-ghost flex items-center gap-2 cursor-pointer"
              >
                <Download size={17} /> Download CV
              </a>
            </div>

            {/* Tech Stack Chip Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 animate-fade-up [animation-delay:500ms]">
              <span className="text-xs font-mono text-slate-400 mr-1">Primary:</span>
              {['Laravel', 'PHP', 'MySQL', 'JavaScript', 'React', 'Node.js'].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium glass text-slate-700 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>

          {/* ── Right Profile Image & Floating Cards (5 cols) ── */}
          <div className="lg:col-span-5 flex justify-center order-first lg:order-last">
            <div className="relative">
              {/* Outer ambient glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl scale-105" />

              {/* Profile Image with 1px glass border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden glass p-2 shadow-2xl">
                <img
                  src={eyuelPhoto}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top rounded-2xl grayscale-[15%] hover:grayscale-0 hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Badge: Tewos Company Internship */}
              <div className="absolute -top-3 -right-3 glass rounded-xl px-3.5 py-2 shadow-xl border border-white/10 flex items-center gap-2 animate-float">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-sm font-bold text-indigo-400">
                  💼
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Tewos Company</p>
                  <p className="text-[10px] text-indigo-500 font-mono">Software Intern</p>
                </div>
              </div>

              {/* Badge: Education */}
              <div className="absolute -bottom-4 -left-3 glass rounded-xl px-3.5 py-2 shadow-xl border border-white/10 flex items-center gap-2 animate-float [animation-delay:3s]">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-sm font-bold text-emerald-400">
                  🎓
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Haramaya University</p>
                  <p className="text-[10px] text-emerald-500 font-mono">B.Sc. IT (2023–Present)</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Infinite Tech Stack Marquee Strip */}
      <div className="mt-14 w-full">
        <Marquee items={profile.stackStrip} />
      </div>
    </section>
  )
}
