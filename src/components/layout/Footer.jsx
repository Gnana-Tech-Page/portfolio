import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { profileData } from '../../data/resume'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">GA</span>
            <p className="footer-tagline">
              Built with <Heart size={14} className="heart-icon" /> passion for Cloud, DevOps & Automation
            </p>
          </div>

          <div className="footer-social">
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={`mailto:${profileData.email}`} className="social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <p className="footer-credits">DevOps Architect | Cloud Infrastructure Specialist</p>
        </div>
      </div>
    </footer>
  )
}