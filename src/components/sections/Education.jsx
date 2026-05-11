import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Calendar } from 'lucide-react'
import { education } from '../../data/resume'
import './Education.css'

export default function Education() {
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
    <section id="education" className="section education" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic foundation supporting continuous learning and growth</p>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`education-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="education-icon">
                <GraduationCap size={32} />
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-description">{edu.description}</p>
                <div className="education-year">
                  <Calendar size={14} />
                  {edu.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}