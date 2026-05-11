import { useEffect, useRef, useState } from 'react'
import './Toolchain.css'

const toolchainLogos = {
  Azure: { color: '#0078d4', text: 'Az' },
  AWS: { color: '#ff9900', text: 'AWS' },
  Terraform: { color: '#7b42bc', text: 'TF' },
  Kubernetes: { color: '#326ce5', text: 'K8s' },
  Docker: { color: '#2496ed', text: 'Doc' },
  GitHub: { color: '#24292e', text: 'GH' },
  GitLab: { color: '#fc6d26', text: 'GL' },
  'Azure DevOps': { color: '#0078d4', text: 'ADO' },
  Linux: { color: '#fcc624', text: 'Lin' },
  ELK: { color: '#005571', text: 'ELK' },
  Dynatrace: { color: '#6d42bc', text: 'Dyn' },
  Prometheus: { color: '#e6522c', text: 'Pro' },
  Grafana: { color: '#f46800', text: 'Gra' },
  PostgreSQL: { color: '#336791', text: 'PG' },
  MongoDB: { color: '#47a248', text: 'Mon' },
  Redis: { color: '#dc382d', text: 'Red' }
}

export default function Toolchain() {
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

  const tools = [
    'Azure', 'AWS', 'Terraform', 'Kubernetes', 'Docker', 'GitHub',
    'GitLab', 'Azure DevOps', 'Linux', 'ELK', 'Dynatrace', 'Prometheus',
    'Grafana', 'PostgreSQL', 'MongoDB', 'Redis'
  ]

  return (
    <section id="toolchain" className="section toolchain" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Technology Toolchain</h2>
          <p className="section-subtitle">Enterprise-grade tools powering modern DevOps and cloud operations</p>
        </div>

        <div className="toolchain-grid">
          {tools.map((tool, index) => {
            const logo = toolchainLogos[tool] || { color: '#0078d4', text: tool.substring(0, 3) }
            return (
              <div
                key={tool}
                className={`tool-item ${isVisible ? 'visible' : ''}`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  '--tool-color': logo.color
                }}
              >
                <div className="tool-icon" style={{ backgroundColor: logo.color }}>
                  {logo.text}
                </div>
                <span className="tool-name">{tool}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}