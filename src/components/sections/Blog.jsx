import { ArrowRight, Clock } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { blogPosts } from '../../data/portfolio'

const cm = {
  blue:   { g: 'from-blue-500 to-blue-600',     tag: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' },
  purple: { g: 'from-purple-500 to-purple-600', tag: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' },
  indigo: { g: 'from-indigo-500 to-indigo-600', tag: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' },
}
const emoji = { Networking: '📡', Programming: '💻', 'Web Dev': '🌐' }

function FadeIn({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {children}
    </div>
  )
}

export default function Blog() {
  const { ref: headerRef, inView: headerVisible } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Sharing knowledge and insights about technology, networking, and software development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => {
            const c = cm[post.color] || cm.blue
            return (
              <FadeIn key={post.id} delay={i * 100}>
                <article className="card group h-full flex flex-col hover:border-blue-200 dark:hover:border-blue-700 cursor-pointer">
                  {/* Cover */}
                  <div className={`h-32 rounded-xl bg-gradient-to-br ${c.g} mb-4 flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {emoji[post.category] || '📝'}
                    </span>
                    <span className="absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map(t => (
                      <span key={t} className={`px-2 py-0.5 rounded-md text-xs font-medium ${c.tag}`}>{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all mt-auto">
                    Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={300}>
          <div className="text-center mt-8">
            <button className="btn-secondary text-sm">View All Articles <ArrowRight size={14} /></button>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
