import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import { GithubIcon, LinkedinIcon, TelegramIcon, FacebookIcon } from '../ui/SocialIcons'
import { personalInfo } from '../../data/portfolio'

// ─── EmailJS config ───────────────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and sign up (free)
// 2. Add Gmail service  →  copy Service ID  →  paste below
// 3. Create Email Template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    →  copy Template ID  →  paste below
// 4. Go to Account → API Keys  →  copy Public Key  →  paste below
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY'
const CONFIGURED = !EMAILJS_SERVICE_ID.startsWith('YOUR')

const socials = [
  { Icon: GithubIcon,   href: personalInfo.social.github,   label: 'GitHub',   color: 'hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900' },
  { Icon: LinkedinIcon, href: personalInfo.social.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
  { Icon: TelegramIcon, href: personalInfo.social.telegram, label: 'Telegram', color: 'hover:bg-sky-500 hover:text-white' },
  { Icon: FacebookIcon, href: personalInfo.social.facebook, label: 'Facebook', color: 'hover:bg-blue-700 hover:text-white' },
]

const contactInfo = [
  { Icon: Mail,   label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
  { Icon: Phone,  label: 'Phone',    value: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
  { Icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errMsg, setErrMsg] = useState('')

  // Use inView with very low threshold so it always triggers
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.01 })

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'At least 10 characters'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    setErrMsg('')

    if (CONFIGURED) {
      // ── Send via EmailJS → arrives in joelcherenet@gmail.com ──
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name:  form.name.trim(),
            from_email: form.email.trim(),
            subject:    form.subject.trim() || 'Portfolio Contact',
            message:    form.message.trim(),
            reply_to:   form.email.trim(),
          },
          EMAILJS_PUBLIC_KEY
        )
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } catch (err) {
        console.error('EmailJS error:', err)
        setErrMsg('Failed to send. Please email me directly at ' + personalInfo.email)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 8000)
      }
    } else {
      // ── Fallback: open mailto when EmailJS not configured ──
      await new Promise(r => setTimeout(r, 600))
      const sub  = encodeURIComponent(form.subject || 'Portfolio Contact')
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
      window.open(`mailto:${personalInfo.email}?subject=${sub}&body=${body}`)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-950">
      <div
        ref={sectionRef}
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ── Left — info ── */}
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm open to freelance projects, internship opportunities, and collaborations.
              Whether you need a website, network configuration, or programming help — let's talk!
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                    {href
                      ? <a href={href} className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{value}</a>
                      : <p className="text-sm font-semibold text-gray-900 dark:text-white">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className={`w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 ${color} transition-all hover:-translate-y-0.5`}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-green-700 dark:text-green-400">Available for opportunities</span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-500">Open to internships, freelance, and collaborations</p>
            </div>
          </div>

          {/* ── Right — form ── */}
          <div>
            <div className="card border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5">Send a Message</h3>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 mb-5">
                  <CheckCircle size={18} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                    Message sent! I'll get back to you soon.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 mb-5">
                  <AlertCircle size={18} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700 dark:text-red-400">{errMsg}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      className={`form-input ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`} />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className={`form-input ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`} />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                    placeholder="What's this about?" className="form-input" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    className={`form-input resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`} />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button type="submit" disabled={status === 'loading'}
                  className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                  {status === 'loading'
                    ? <><Loader size={16} className="animate-spin" />Sending...</>
                    : <><Send size={16} />Send Message</>
                  }
                </button>

                <p className="text-xs text-center text-gray-400 dark:text-gray-500">
                  {CONFIGURED
                    ? <>Sends directly to <span className="text-blue-500">{personalInfo.email}</span></>
                    : <>Or email directly: <a href={`mailto:${personalInfo.email}`} className="text-blue-500 hover:underline">{personalInfo.email}</a></>
                  }
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
