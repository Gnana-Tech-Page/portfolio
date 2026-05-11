import { useEffect, useRef, useState } from 'react'
import { Building2, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react'
import { experience } from '../../data/resume'
import './Experience.css'

export default function Experience() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">A track record of delivering enterprise-scale cloud transformation projects</p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="timeline-dot"></div>
              <div className={`timeline-card ${expandedId === exp.id ? 'expanded' : ''}`}>
                <div className="timeline-header" onClick={() => toggleExpand(exp.id)}>
                  <div className="timeline-meta">
                    <span className="timeline-company">{exp.company}</span>
                    {exp.client && <span className="timeline-client">| {exp.client}</span>}
                  </div>
                  <button className="timeline-toggle">
                    {expandedId === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                <div className="timeline-role">{exp.role}</div>

                <div className="timeline-info">
                  <span className="timeline-period">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="timeline-location">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <p className="timeline-description">{exp.description}</p>

                <div className={`timeline-details ${expandedId === exp.id ? 'open' : ''}`}>
                  <h4>Key Achievements:</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>

                  <div className="tech-stack">
                    <h4>Technologies:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}