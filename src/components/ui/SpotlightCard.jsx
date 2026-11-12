import { useCallback } from 'react'

export default function SpotlightCard({ as: Tag = 'div', className = '', children, ...rest }) {
  const onMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }, [])

  return (
    <Tag
      onMouseMove={onMove}
      className={`spotlight glass rounded-2xl p-6 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

