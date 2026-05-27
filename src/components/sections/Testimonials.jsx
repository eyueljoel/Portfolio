import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/portfolio'

const cm = { blue:'from-blue-500 to-blue-600', purple:'from-purple-500 to-purple-600', indigo:'from-indigo-500 to-indigo-600' }

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">What People <span className="gradient-text">Say</span></h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Feedback from professors, colleagues, and collaborators.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} data-aos="fade-up" data-aos-delay={i*120}>
              <div className="testimonial-card group h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({length:t.rating}).map((_,j) => <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <div className="mb-4"><Quote size={24} className="text-blue-200 dark:text-blue-800" /></div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${cm[t.color]||cm.blue} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{t.avatar}</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">{t.organization}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
