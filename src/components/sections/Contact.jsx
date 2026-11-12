import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader, Copy, Check, Eye, EyeOff, MessageSquare } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import { GithubIcon, LinkedinIcon, TelegramIcon, FacebookIcon, InstagramIcon } from '../ui/SocialIcons'
import { profile } from '../../data/portfolio'
import { showToast } from '../ui/Toast'
import SpotlightCard from '../ui/SpotlightCard'
import Reveal from '../ui/Reveal'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY'
const CONFIGURED = !EMAILJS_SERVICE_ID.startsWith('YOUR')

const socials = [
  { Icon: GithubIcon,    href: profile.social.github,    label: 'GitHub',    color: 'hover:text-white dark:hover:text-white' },
  { Icon: LinkedinIcon,  href: profile.social.linkedin,  label: 'LinkedIn',  color: 'hover:text-indigo-400' },
  { Icon: TelegramIcon,  href: profile.social.telegram,  label: 'Telegram',  color: 'hover:text-sky-400' },
  { Icon: FacebookIcon,  href: profile.social.facebook,  label: 'Facebook',  color: 'hover:text-blue-400' },
  { Icon: InstagramIcon, href: profile.social.instagram, label: 'Instagram', color: 'hover:text-pink-400' },
]

export default function Contact() {
  const [form, setForm]         = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors]     = useState({})
  const [status, setStatus]     = useState('idle')
  const [errMsg, setErrMsg]     = useState('')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [showPhone, setShowPhone]     = useState(false)

  // Listen for pre-selected service from Services section
  useEffect(() => {
    const handleServiceSelect = (e) => {
      const service = e.detail?.service
      if (service) {
        setForm((prev) => ({
          ...prev,
          subject: `Service Inquiry: ${service}`,
          message: `Hi Eyuel,\n\nI would like to discuss working together on ${service}. Here are the project requirements:\n`,
        }))
        showToast(`Inquiry template loaded for ${service}`, 'info')
      }
    }
    window.addEventListener('select-service', handleServiceSelect)
    return () => window.removeEventListener('select-service', handleServiceSelect)
  }, [])

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

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'At least 10 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    setErrMsg('')

    if (CONFIGURED) {
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name:  form.name.trim(),
            from_email: form.email.trim(),
            subject:    form.subject.trim() || 'Portfolio Inquiry',
            message:    form.message.trim(),
            reply_to:   form.email.trim(),
          },
          EMAILJS_PUBLIC_KEY
        )
        setStatus('success')
        showToast('Message transmitted successfully!', 'success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } catch (err) {
        console.error('EmailJS error:', err)
        setErrMsg('Failed to send. Please email me directly at ' + profile.email)
        setStatus('error')
        showToast('Failed to send. Please use direct email.', 'error')
        setTimeout(() => setStatus('idle'), 8000)
      }
    } else {
      // Fallback: mailto
      await new Promise((r) => setTimeout(r, 400))
      const sub  = encodeURIComponent(form.subject || 'Portfolio Inquiry')
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
      window.open(`mailto:${profile.email}?subject=${sub}&body=${body}`)
      setStatus('success')
      showToast('Opening default email client...', 'success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section id="contact" className="section-padding bg-transparent">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold glass text-indigo-600 dark:text-indigo-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Direct Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Let's Build Something <span className="text-gradient">Meaningful</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Interested in hiring for a software developer role, internship, or collaborating on a web/ERP project? Send a direct message.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* ── Left Column: Contact Cards & Channels (5 cols) ── */}
          <Reveal delay={100} className="lg:col-span-5 space-y-4">
            <SpotlightCard className="p-6 sm:p-7">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Direct Channels</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                Fastest response via email or Telegram
              </p>

              {/* Email Card */}
              <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center justify-between mb-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-slate-400">Email Address</p>
                    <a href={`mailto:${profile.email}`} className="text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-500 truncate block">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-500 transition-colors ml-2"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone Card (Protected with Reveal / Copy) */}
              <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center justify-between mb-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500 flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-slate-400">Direct Phone</p>
                    <p className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
                      {showPhone ? profile.phone : '+251 ••• ••• •••'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 ml-2">
                  <button
                    onClick={() => setShowPhone(!showPhone)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-500 transition-colors"
                    title={showPhone ? 'Hide phone' : 'Reveal phone'}
                  >
                    {showPhone ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                  <button
                    onClick={copyPhone}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-500 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400">Current Location & Zone</p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {profile.location} · {profile.timezone}
                  </p>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-5 mt-5 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-slate-400">Socials:</span>
                <div className="flex items-center gap-2">
                  {socials.map(({ Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 ${color} transition-colors`}
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                  <a
                    href={profile.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-900/50 hover:bg-sky-500 hover:text-white transition-all ml-1"
                  >
                    <MessageSquare size={13} /> Telegram
                  </a>
                </div>
              </div>
            </SpotlightCard>

            {/* Availability Callout */}
            <SpotlightCard className="p-5 border border-emerald-500/20 bg-emerald-500/[0.02]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-ring" />
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">
                  {profile.availability}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                Seeking opportunities in full-stack web, Laravel/PHP backends, ERP business software, and systems engineering.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* ── Right Column: Interactive Contact Form (7 cols) ── */}
          <Reveal delay={200} className="lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below or reach out directly at <span className="font-mono text-indigo-500">{profile.email}</span>
              </p>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 mb-6 animate-fade-up">
                  <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 font-medium">
                    Message transmitted! Eyuel will respond to your email promptly.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 mb-6 animate-fade-up">
                  <AlertCircle size={18} className="text-rose-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-rose-700 dark:text-rose-300">{errMsg}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`form-input text-xs ${errors.name ? 'border-rose-400 focus:ring-rose-400' : ''}`}
                    />
                    {errors.name && <p className="mt-1 text-[11px] text-rose-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`form-input text-xs ${errors.email ? 'border-rose-400 focus:ring-rose-400' : ''}`}
                    />
                    {errors.email && <p className="mt-1 text-[11px] text-rose-500">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject Line
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Junior Developer Role"
                    className="form-input text-xs"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, role requirements, or project scope..."
                    className={`form-input text-xs resize-none ${errors.message ? 'border-rose-400 focus:ring-rose-400' : ''}`}
                  />
                  {errors.message && <p className="mt-1 text-[11px] text-rose-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-xs sm:text-sm py-3 mt-2"
                >
                  {status === 'loading' ? (
                    <><Loader size={16} className="animate-spin" /> Transmitting...</>
                  ) : (
                    <><Send size={15} /> Transmit Message</>
                  )}
                </button>
              </form>
            </SpotlightCard>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
