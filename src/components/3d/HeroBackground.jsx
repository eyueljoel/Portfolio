import { Component, lazy, Suspense, useEffect, useState } from 'react'
import Aurora from '../ui/Aurora'

// Safe dynamic import that falls back to null if three / R3F is not installed
const HeroScene = lazy(() =>
  import('./HeroScene').catch((err) => {
    console.warn('3D HeroScene not loaded, using CSS Aurora background fallback:', err)
    return { default: () => <Aurora /> }
  })
)

class SceneErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('3D HeroScene failed, using CSS Aurora background fallback:', error)
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}

function webglOK() {
  try {
    const c = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')))
  } catch {
    return false
  }
}

export default function HeroBackground({ labels, colors }) {
  const [mode, setMode] = useState('css') // 'css' | 'webgl'
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMode = () => {
      const reduce = preference.matches
      setReducedMotion(reduce)
      setMode(!reduce && webglOK() ? 'webgl' : 'css')
    }

    updateMode()
    preference.addEventListener('change', updateMode)
    return () => preference.removeEventListener('change', updateMode)
  }, [])

  if (mode === 'css') return <Aurora static={reducedMotion} />

  return (
    <SceneErrorBoundary fallback={<Aurora static={reducedMotion} />}>
      <Suspense fallback={<Aurora static={reducedMotion} />}>
        <HeroScene labels={labels} colors={colors} />
      </Suspense>
    </SceneErrorBoundary>
  )
}
