import { useEffect, useState } from 'react'
import { X, ExternalLink, Star, Terminal, Check, Copy, Layers, Cpu } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { showToast } from './Toast'

export default function ProjectModal({ project, onClose }) {
  const [copied, setCopied] = useState(false)

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

  if (!project) return null

  const copyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet)
      setCopied(true)
      showToast('Code snippet copied to clipboard!', 'copy')
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col transform transition-all duration-200 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 uppercase tracking-wider">
                {project.category}
              </span>
              {project.featured && (
                <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800">
                  <Star size={11} className="fill-yellow-500 text-yellow-500" /> Featured
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Detailed Overview */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
              Project Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                <Layers size={14} className="text-blue-500" /> Key Architectural Highlights
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 text-xs text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code or Config Snippet */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center gap-2">
                  <Terminal size={14} className="text-purple-500" /> Implementation Preview
                </h3>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  {copied ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
              <div className="rounded-xl bg-gray-950 border border-gray-800 p-4 font-mono text-xs text-gray-300 overflow-x-auto shadow-inner leading-relaxed">
                <pre>{project.codeSnippet}</pre>
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 flex items-center gap-2">
              <Cpu size={14} className="text-emerald-500" /> Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-gray-400">
            Source code hosted on GitHub under Eyuel Cherenet
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition-all shadow-sm"
            >
              <GithubIcon size={16} /> View on GitHub
            </a>
            {project.demo && project.demo !== '#' ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md transition-all"
              >
                <ExternalLink size={15} /> Live Application
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

