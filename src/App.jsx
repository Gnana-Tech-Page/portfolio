import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Metrics from './components/sections/Metrics'
import Certifications from './components/sections/Certifications'
import Toolchain from './components/sections/Toolchain'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import BackToTop from './components/ui/BackToTop'
import LoadingScreen from './components/ui/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className={isLoading ? 'hidden' : ''}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Metrics />
          <Certifications />
          <Toolchain />
          <Education />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App