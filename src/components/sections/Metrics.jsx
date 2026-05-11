import { useEffect, useRef, useState } from 'react'
import { Award, Database, GitBranch, Server, Users } from 'lucide-react'
import { metrics } from '../../data/resume'
import './Metrics.css'

const iconMap = [Award, Database, GitBranch, Server, Users, Users]

export default function Metrics() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState(metrics.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      metrics.forEach((metric, index) => {
        const duration = 2000
        const steps = 60
        const increment = metric.value / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= metric.value) {
            setCounters(prev => {
              const newCounters = [...prev]
              newCounters[index] = metric.value
              return newCounters
            })
            clearInterval(timer)
          } else {
            setCounters(prev => {
              const newCounters = [...prev]
              newCounters[index] = Math.floor(current)
              return newCounters
            })
          }
        }, duration / steps)
      })
    }
  }, [isVisible])

  return (
    <section id="metrics" className="section metrics" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Achievements & Impact</h2>
          <p className="section-subtitle">Quantified results demonstrating technical excellence and business value delivery</p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => {
            const IconComponent = iconMap[index] || Award
            return (
              <div
                key={index}
                className={`metric-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="metric-icon">
                  <IconComponent size={32} />
                </div>
                <div className="metric-value">
                  <span className="metric-number">{counters[index]}</span>
                  <span className="metric-suffix">{metric.suffix}</span>
                </div>
                <div className="metric-label">{metric.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}