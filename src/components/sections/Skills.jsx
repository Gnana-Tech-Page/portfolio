import { useEffect, useRef, useState } from 'react'
import { Cloud, Code, Container, GitBranch, Activity, Database, Terminal } from 'lucide-react'
import { skills } from '../../data/resume'
import './Skills.css'

const iconMap = {
  Cloud, Code, Container, GitBranch, Activity, Database, Terminal
}

export default function Skills() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
  const [animatedSkills, setAnimatedSkills] = useState({})

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

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        const newAnimated = {}
        skills[activeCategory].items.forEach((skill, index) => {
          setTimeout(() => {
            setAnimatedSkills(prev => ({ ...prev, [skill.name]: true }))
          }, index * 100)
        })
      }, 300)
      return () => clearTimeout(timeout)
    } else {
      setAnimatedSkills({})
    }
  }, [isVisible, activeCategory])

  const handleCategoryChange = (index) => {
    setActiveCategory(index)
    setAnimatedSkills({})
  }

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Comprehensive technical proficiency across cloud, DevOps, and infrastructure domains</p>
        </div>

        <div className={`skills-tabs ${isVisible ? 'visible' : ''}`}>
          {skills.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Cloud
            return (
              <button
                key={index}
                className={`skill-tab ${activeCategory === index ? 'active' : ''}`}
                onClick={() => handleCategoryChange(index)}
              >
                <IconComponent size={20} />
                {category.category}
              </button>
            )
          })}
        </div>

        <div className="skills-grid">
          {skills[activeCategory].items.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card ${animatedSkills[skill.name] ? 'animated' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: animatedSkills[skill.name] ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}