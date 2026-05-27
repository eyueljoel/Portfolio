import { useEffect, Component } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useDarkMode } from './hooks/useDarkMode'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import CursorGlow from './components/layout/CursorGlow'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Services from './components/sections/Services'
import Stats from './components/sections/Stats'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'

// Silent error boundary — hides crashed sections instead of showing error UI
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error) {
    console.error('Section error:', error)
  }
  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

function PortfolioApp() {
  const [isDark, toggleDark] = useDarkMode()

  useEffect(() => {
    AOS.init({ duration: 650, easing: 'ease-out-cubic', once: true, offset: 40 })
  }, [])

  useEffect(() => {
    const t = setTimeout(() => AOS.refreshHard(), 50)
    return () => clearTimeout(t)
  }, [isDark])

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <ScrollProgress />
        <CursorGlow />
        <Navbar isDark={isDark} toggleDark={toggleDark} />
        <main>
          <ErrorBoundary><Hero /></ErrorBoundary>
          <ErrorBoundary><About /></ErrorBoundary>
          <ErrorBoundary><Skills /></ErrorBoundary>
          <ErrorBoundary><Projects /></ErrorBoundary>
          <ErrorBoundary><Experience /></ErrorBoundary>
          <ErrorBoundary><Services /></ErrorBoundary>
          <ErrorBoundary><Stats /></ErrorBoundary>
          <ErrorBoundary><Blog /></ErrorBoundary>
          <ErrorBoundary><Contact /></ErrorBoundary>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <PortfolioApp />
    </ErrorBoundary>
  )
}
