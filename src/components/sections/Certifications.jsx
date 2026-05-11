import { useEffect, useRef, useState } from 'react'
import { Award, CheckCircle } from 'lucide-react'
import { certifications } from '../../data/resume'
import './Certifications.css'

export default function Certifications() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section id="certifications" className="section certifications" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Professional Certifications</h2>
          <p className="section-subtitle">Industry-recognized credentials validating technical expertise</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`certification-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="cert-badge">
                <Award size={32} />
              </div>
              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-divider">|</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
              <CheckCircle size={20} className="cert-check" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}