import { useState, useEffect } from 'react'
import { Download, Mail, FolderOpen, ChevronDown } from 'lucide-react'
import { profileData, typingSkills } from '../../data/resume'
import Particles from '../ui/Particles'
import './Hero.css'

export default function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentSkill = typingSkills[currentSkillIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentSkill.length) {
          setDisplayText(currentSkill.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentSkillIndex((prev) => (prev + 1) % typingSkills.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentSkillIndex])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <Particles />
      <div className="hero-bg-decoration">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <div className="hero-image-border"></div>
            <div className="hero-image">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQFZF5JQNcYbUw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713529388964?e=1747267200&v=beta&t=2z4N3rP6zW1vJmJdNk3lR4cR7R9j5gX6vL9vY2pK3sU"
                alt={profileData.name}
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profileData.name)}&size=400&background=0078d4&color=fff&bold=true`
                }}
              />
            </div>
          </div>

          <h1 className="hero-name">{profileData.name}</h1>

          <h2 className="hero-title">
            <span className="hero-title-static">{profileData.title}</span>
          </h2>

          <div className="hero-typing">
            <span className="typing-label">Expertise:</span>
            <span className="typing-text">
              {displayText}
              <span className="typing-cursor">|</span>
            </span>
          </div>

          <p className="hero-summary">{profileData.summary}</p>

          <div className="hero-buttons">
            <a href={profileData.resumeDownload} className="btn btn-primary" download>
              <Download size={18} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              Contact Me
            </a>
            <a href="#projects" className="btn btn-ghost">
              <FolderOpen size={18} />
              View Projects
            </a>
          </div>
        </div>
      </div>

      <button className="hero-scroll-indicator" onClick={scrollToAbout} aria-label="Scroll down">
        <ChevronDown size={24} />
      </button>
    </section>
  )
}