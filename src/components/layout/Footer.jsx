import { Code2, Heart, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon, FacebookIcon, InstagramIcon } from '../ui/SocialIcons'
import { personalInfo } from '../../data/portfolio'

const quickLinks = [
  { href:'#home',label:'Home' },{ href:'#about',label:'About' },
  { href:'#skills',label:'Skills' },{ href:'#projects',label:'Projects' },
  { href:'#experience',label:'Experience' },{ href:'#contact',label:'Contact' },
]
const socials = [
  { Icon:GithubIcon,    href:personalInfo.social.github,    label:'GitHub',    hover:'hover:text-white' },
  { Icon:LinkedinIcon,  href:personalInfo.social.linkedin,  label:'LinkedIn',  hover:'hover:text-blue-400' },
  { Icon:TelegramIcon,  href:personalInfo.social.telegram,  label:'Telegram',  hover:'hover:text-sky-400' },
  { Icon:FacebookIcon,  href:personalInfo.social.facebook,  label:'Facebook',  hover:'hover:text-blue-500' },
  { Icon:InstagramIcon, href:personalInfo.social.instagram, label:'Instagram', hover:'hover:text-pink-400' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Code2 size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">Eyuel<span className="gradient-text">.</span></span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              IT Student & aspiring Software Developer passionate about building elegant solutions to complex problems.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label, hover }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 ${hover} hover:bg-gray-700 transition-all hover:-translate-y-0.5`}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-500"><span className="text-gray-400">Email: </span>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-400 transition-colors">{personalInfo.email}</a>
              </p>
              <p className="text-gray-500"><span className="text-gray-400">Location: </span>{personalInfo.location}</p>
              <p className="text-gray-500"><span className="text-gray-400">Status: </span><span className="text-green-400">{personalInfo.availability}</span></p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 flex items-center gap-1">
            © {new Date().getFullYear()} Eyuel Cherenet. Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind CSS
          </p>
          <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-colors group">
            Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
