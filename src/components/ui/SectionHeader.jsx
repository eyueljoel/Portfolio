// No AOS here — headers must always be visible
export default function SectionHeader({ badge, title, highlight, subtitle }) {
  return (
    <div className="text-center mb-14">
      {badge && (
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
