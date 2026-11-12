import { useEffect } from 'react'
import { X, Clock, Calendar, Tag, BookOpen } from 'lucide-react'

export default function ArticleModal({ article, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  if (!article) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col transform transition-all duration-200 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50">
          <div className="space-y-2 pr-4">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
              {article.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug">
              {article.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
            aria-label="Close article"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 text-gray-600 dark:text-gray-400 italic text-xs">
            {article.excerpt}
          </div>

          <div className="prose dark:prose-invert max-w-none text-sm space-y-3 whitespace-pre-line font-sans">
            {article.content || 'Article content is being drafted.'}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 flex-wrap">
            <Tag size={13} className="text-gray-400" />
            {article.tags.map((t) => (
              <span key={t} className="text-xs font-medium px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 flex items-center justify-between">
          <span className="text-xs text-gray-400 flex items-center gap-1.5">
            <BookOpen size={14} className="text-blue-500" /> By Eyuel Cherenet
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

