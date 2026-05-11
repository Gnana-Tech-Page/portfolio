import { useEffect, useRef, useState } from 'react'
import { Award, Users, Globe, Cpu } from 'lucide-react'
import { profileData } from '../../data/resume'
import './About.css'

const stats = [
  { icon: Award, value: '23+', label: 'Years Experience' },
  { icon: Users, value: '48', label: 'Landing Zones' },
  { icon: Globe, value: '3', label: 'Cloud Platforms' },
  { icon: Cpu, value: '100+', label: 'CI/CD Pipelines' }
]

export default function About() {
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
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A results-oriented IT leader with extensive experience in enterprise cloud transformation</p>
        </div>

        <div className="about-content">
          <div className={`about-main ${isVisible ? 'visible' : ''}`}>
            <p>
              I am a results-oriented IT leader with <strong>23+ years of experience</strong> delivering enterprise-scale cloud transformation, Azure platform engineering, Infrastructure as Code, Kubernetes, DevOps automation, and multi-cloud solutions. Throughout my career, I have successfully led and architected numerous high-impact projects for Fortune 500 companies and government entities.
            </p>
            <p>
              My expertise spans across <strong>Azure Cloud Engineering & Architecture</strong>, including deep experience with Enterprise Landing Zones using Microsoft Cloud Adoption Framework. I have extensive knowledge in <strong>multi-cloud environments</strong> covering Azure, AWS, and GCP, with strong proficiency in <strong>Infrastructure as Code using Terraform and Bicep</strong>.
            </p>
            <p>
              As a passionate advocate for <strong>AKS & Kubernetes platform engineering</strong>, I have designed and implemented container orchestration solutions that handle enterprise-scale workloads. My DevOps background includes comprehensive <strong>CI/CD modernization</strong> with tools like Azure DevOps, GitHub Actions, and GitLab, enabling rapid and reliable software delivery.
            </p>
            <p>
              I excel in <strong>cloud migration</strong> initiatives, having led complex migrations of hundreds of servers while ensuring business continuity. My approach combines technical excellence with strong <strong>leadership and mentoring</strong> capabilities, and I am committed to implementing <strong>governance and security</strong> best practices in every engagement.
            </p>
          </div>

          <div className={`about-stats ${isVisible ? 'visible' : ''}`}>
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 100}ms` }}>
                <stat.icon size={32} className="stat-icon" />
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`about-highlights ${isVisible ? 'visible' : ''}`}>
          <h3>Core Expertise</h3>
          <div className="highlight-grid">
            {[
              'Azure Cloud Architecture & Engineering',
              'Enterprise Landing Zone Design (CAF)',
              'Infrastructure as Code (Terraform, Bicep)',
              'Kubernetes & AKS Platform Engineering',
              'Multi-Cloud Solutions (Azure, AWS, GCP)',
              'CI/CD Pipeline Modernization',
              'Cloud Migration & Modernization',
              'Observability & Monitoring Solutions'
            ].map((item, index) => (
              <div key={index} className="highlight-item">
                <span className="highlight-dot"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}