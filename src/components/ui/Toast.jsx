import { useState, useEffect } from 'react'
import { CheckCircle2, AlertCircle, Info, Copy, X } from 'lucide-react'

// Global trigger function to show toast anywhere in the app
export function showToast(message, type = 'success', duration = 3000) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('portfolio-toast', { detail: { message, type, duration } }))
  }
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const handleToast = (e) => {
      const { message, type = 'success', duration = 3000 } = e.detail || {}
      const id = Date.now() + Math.random().toString(36).substring(2, 5)
      
      setToasts((prev) => [...prev, { id, message, type }])

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, duration)
    }

    window.addEventListener('portfolio-toast', handleToast)
    return () => window.removeEventListener('portfolio-toast', handleToast)
  }, [])

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 shadow-2xl backdrop-blur-md transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
        >
          <div className="flex items-center gap-3">
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />}
            {toast.type === 'copy' && <Copy className="w-5 h-5 text-blue-500 flex-shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-indigo-500 flex-shrink-0" />}
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{toast.message}</p>
          </div>
          <button
            onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            aria-label="Dismiss notification"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}

