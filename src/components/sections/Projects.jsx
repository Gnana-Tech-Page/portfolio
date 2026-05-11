import { useEffect, useRef, useState } from 'react'
import { Cloud, Container, Code, GitBranch, Server, Network, ArrowUpCircle, Activity, ExternalLink } from 'lucide-react'
import { projects } from '../../data/resume'
import './Projects.css'

const iconMap = {
  Cloud, Container, Code, GitBranch, Server, Network, ArrowUpCircle, Activity
}

export default function Projects() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Enterprise-scale solutions delivering measurable business impact</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon] || Cloud
            return (
              <div
                key={project.id}
                className={`project-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <IconComponent size={28} />
                  </div>
                  <span className="project-category">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-impact">
                  <span className="impact-label">Impact:</span>
                  <span className="impact-value">{project.impact}</span>
                </div>

                <div className="project-achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}