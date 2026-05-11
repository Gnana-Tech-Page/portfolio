import { useState, useRef, useEffect } from 'react'
import { Mail, Linkedin, Github, Download, Send, MapPin, Phone } from 'lucide-react'
import { profileData } from '../../data/resume'
import './Contact.css'

export default function Contact() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Ready to discuss your next cloud transformation project? Let's connect.</p>
        </div>

        <div className="contact-grid">
          <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
            <h3>Contact Information</h3>
            <p>Open to opportunities in DevOps architecture, cloud infrastructure leadership, and enterprise transformation consulting.</p>

            <div className="contact-details">
              <a href={`mailto:${profileData.email}`} className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{profileData.email}</span>
                </div>
              </a>

              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <Linkedin size={20} />
                </div>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Connect with me</span>
                </div>
              </a>

              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <Github size={20} />
                </div>
                <div>
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">View my repositories</span>
                </div>
              </a>
            </div>

            <a href={profileData.resumeDownload} className="btn btn-primary" download>
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className={`contact-form-wrapper ${isVisible ? 'visible' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="btn-loading">Sending...</span>
                ) : submitted ? (
                  <>
                    <span className="success-icon">✓</span>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}