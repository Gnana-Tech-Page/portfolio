export const profileData = {
  name: "Gnanasekar A",
  title: "DevOps Architect | Cloud Infrastructure Specialist",
  headline: "DevOps Architect | Cloud Infrastructure Specialist | Kubernetes & Terraform Expert",
  summary: "Results-oriented IT leader with 23+ years of experience delivering enterprise-scale cloud transformation, Azure platform engineering, Infrastructure as Code, Kubernetes, DevOps automation, and multi-cloud solutions.",
  profileImage: null, // Will use placeholder
  email: "gnanasekar.a@email.com",
  linkedin: "https://www.linkedin.com/in/gnanatech/",
  github: "https://github.com/Gnana-Tech-Page",
  resumeDownload: "/Gnanasekar_A_Resume.pdf"
};

export const skills = [
  {
    category: "Cloud Platforms",
    icon: "Cloud",
    items: [
      { name: "Azure", level: 95 },
      { name: "AWS", level: 80 },
      { name: "GCP", level: 70 }
    ]
  },
  {
    category: "Infrastructure as Code",
    icon: "Code",
    items: [
      { name: "Terraform", level: 95 },
      { name: "Bicep", level: 90 },
      { name: "ARM Templates", level: 85 }
    ]
  },
  {
    category: "Containers & Orchestration",
    icon: "Container",
    items: [
      { name: "Kubernetes", level: 95 },
      { name: "AKS", level: 95 },
      { name: "Docker", level: 90 },
      { name: "Helm", level: 85 },
      { name: "OpenShift", level: 75 }
    ]
  },
  {
    category: "DevOps & Automation",
    icon: "GitBranch",
    items: [
      { name: "Azure DevOps", level: 95 },
      { name: "GitHub Actions", level: 90 },
      { name: "GitLab CI/CD", level: 85 },
      { name: "Jenkins", level: 80 },
      { name: "YAML Pipelines", level: 95 }
    ]
  },
  {
    category: "Monitoring & Observability",
    icon: "Activity",
    items: [
      { name: "ELK Stack", level: 85 },
      { name: "Dynatrace", level: 80 },
      { name: "Azure Monitor", level: 90 },
      { name: "Log Analytics", level: 90 },
      { name: "Grafana", level: 85 },
      { name: "Prometheus", level: 80 }
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 75 },
      { name: "Oracle RAC", level: 80 },
      { name: "Cassandra", level: 70 }
    ]
  },
  {
    category: "Scripting & Automation",
    icon: "Terminal",
    items: [
      { name: "PowerShell", level: 90 },
      { name: "Azure CLI", level: 95 },
      { name: "Python", level: 80 },
      { name: "gcloud CLI", level: 70 }
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: "IBM / Kyndryl",
    role: "Senior DevOps Architect",
    period: "2021 - Present",
    location: "UAE",
    logo: "IBM",
    client: "ADAA-UAEAA (Abu Dhabi Accountability Authority)",
    description: "Led enterprise-scale Azure cloud transformation initiatives for government entities in UAE, implementing comprehensive cloud infrastructure solutions.",
    achievements: [
      "Architected 48 Application Landing Zones using Azure Cloud Adoption Framework",
      "Implemented AKS clusters for 200+ application workloads with enterprise-grade security",
      "Delivered managed database services for PostgreSQL, MySQL, MongoDB, and Oracle RAC",
      "Established comprehensive monitoring & alerting framework using Azure Monitor and Log Analytics",
      "Implemented Azure Managed HSM for cryptographic key management",
      "Deployed DoH (DNS over HTTPS) infrastructure for enhanced security",
      "Executed Azure Migrate assessments and workload migrations",
      "Implemented Confidential Compute solutions for sensitive workloads",
      "Established Hub-and-Spoke network topology with sovereignty considerations",
      "Ensured compliance with UAE data residency and regulatory requirements"
    ],
    technologies: ["Azure", "AKS", "Terraform", "Bicep", "Kubernetes", "Azure Monitor", "Log Analytics", "PostgreSQL", "MySQL", "MongoDB", "Oracle RAC", "Azure DevOps", "GitHub Actions"]
  },
  {
    id: 2,
    company: "IBM / Kyndryl",
    role: "Cloud Infrastructure Lead",
    period: "2020 - 2021",
    location: "UAE",
    logo: "IBM",
    client: "AIQ (Abu Dhabi AI Company)",
    description: "Spearheaded DevOps transformation and GitLab migration for AIQ, a leading AI company in Abu Dhabi.",
    achievements: [
      "Led Azure DevOps to GitLab migration, transitioning 50+ repositories",
      "Deployed GitLab Runners on AKS for scalable CI/CD pipelines",
      "Developed Terraform and Bicep automation frameworks",
      "Implemented comprehensive Infrastructure as Code practices",
      "Established on-premise Azure DevOps implementation for hybrid scenarios",
      "Configured secure CI/CD pipelines with automated testing and deployment"
    ],
    technologies: ["Azure", "AKS", "GitLab", "GitLab CI/CD", "Terraform", "Bicep", "Azure DevOps", "Kubernetes", "Docker"]
  },
  {
    id: 3,
    company: "IBM / Kyndryl",
    role: "Senior Cloud Architect",
    period: "2019 - 2020",
    location: "UAE",
    logo: "IBM",
    client: "G42",
    description: "Designed and implemented enterprise cloud architecture for G42, an AI and cloud computing company.",
    achievements: [
      "Deployed Enterprise Landing Zone following Microsoft CAF methodology",
      "Implemented Hub-Spoke network architecture for enterprise connectivity",
      "Developed Terraform-based deployment templates for rapid provisioning",
      "Ensured compliance with UAE sovereign cloud requirements",
      "Integrated security controls and governance frameworks"
    ],
    technologies: ["Azure", "Terraform", "CAF", "Hub-Spoke", "Security", "Governance"]
  },
  {
    id: 4,
    company: "IBM / Kyndryl",
    role: "DevOps Lead",
    period: "2018 - 2019",
    location: "UAE",
    logo: "IBM",
    client: "Zero CIO",
    description: "Led observability and monitoring transformation for Zero CIO enterprise clients.",
    achievements: [
      "Implemented Dynatrace observability platform for enterprise monitoring",
      "Deployed Azure Red Hat OpenShift (ARO) clusters",
      "Integrated ARO monitoring with centralized observability stack",
      "Implemented Palo Alto integration for network security",
      "Developed AKS automation frameworks using IaC",
      "Deployed Azure Defender and DDoS protection"
    ],
    technologies: ["Azure", "ARO", "Dynatrace", "AKS", "Palo Alto", "Azure Defender", "DDoS Protection", "Terraform"]
  },
  {
    id: 5,
    company: "Dell Technologies",
    role: "Senior Infrastructure Engineer",
    period: "2015 - 2018",
    location: "India",
    logo: "Dell",
    description: "Led infrastructure transformation and cloud adoption initiatives for enterprise clients.",
    achievements: [
      "Architected cloud migration strategies for Fortune 500 clients",
      "Implemented VMware-based private cloud solutions",
      "Led hybrid cloud integration projects",
      "Developed automation scripts for infrastructure provisioning"
    ],
    technologies: ["VMware", "Azure", "AWS", "PowerShell", "Python", "Automation"]
  },
  {
    id: 6,
    company: "Hewlett-Packard",
    role: "Technical Lead",
    period: "2010 - 2015",
    location: "India",
    logo: "HP",
    description: "Led technical teams in delivering enterprise infrastructure solutions.",
    achievements: [
      "Managed large-scale infrastructure deployments",
      "Implemented data center automation solutions",
      "Led migration projects for enterprise clients",
      "Established best practices for system administration"
    ],
    technologies: ["Windows Server", "Linux", "Networking", "Storage", "Automation"]
  },
  {
    id: 7,
    company: "Maples ESM Technologies",
    role: "System Administrator",
    period: "2005 - 2010",
    location: "India",
    logo: "Maples",
    description: "Administered enterprise systems and infrastructure for IT services company.",
    achievements: [
      "Managed Windows and Linux server environments",
      "Implemented backup and disaster recovery solutions",
      "Supported enterprise application deployment",
      "Developed technical documentation and procedures"
    ],
    technologies: ["Windows Server", "Linux", "Networking", "Backup Solutions"]
  },
  {
    id: 8,
    company: "Magellan Solutions",
    role: "IT Support Specialist",
    period: "2003 - 2005",
    location: "India",
    logo: "Magellan",
    description: "Provided technical support and system administration for BPO company.",
    achievements: [
      "Provided Level 1/2 technical support",
      "Managed desktop and server infrastructure",
      "Implemented network security measures",
      "Supported business-critical applications"
    ],
    technologies: ["Windows", "Networking", "Help Desk", "System Administration"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Azure Landing Zone Deployment",
    category: "Cloud Architecture",
    description: "Enterprise-scale Azure Landing Zone implementation following Microsoft Cloud Adoption Framework, enabling rapid and secure cloud adoption for government entities.",
    technologies: ["Azure", "Terraform", "Bicep", "CAF", "Hub-Spoke"],
    impact: "48 Landing Zones deployed across UAE government entities",
    achievements: [
      "Zero-trust security architecture implementation",
      "Compliance with UAE data sovereignty requirements",
      "Automated policy enforcement using Azure Policy",
      "Multi-region disaster recovery setup"
    ],
    icon: "Cloud"
  },
  {
    id: 2,
    title: "Enterprise AKS Platform",
    category: "Container Platform",
    description: "Designed and deployed enterprise Kubernetes platform on Azure AKS for hosting 200+ mission-critical applications with high availability and security.",
    technologies: ["AKS", "Kubernetes", "Helm", "Azure Monitor", "Azure AD", "Key Vault"],
    impact: "200+ applications migrated to container platform",
    achievements: [
      "Zero-downtime deployment strategy",
      "Auto-scaling based on application metrics",
      "Centralized logging and monitoring",
      "Security baseline enforcement via OPA"
    ],
    icon: "Container"
  },
  {
    id: 3,
    title: "Terraform Automation Framework",
    category: "Infrastructure as Code",
    description: "Comprehensive Terraform framework enabling infrastructure provisioning across multiple cloud platforms with enterprise governance.",
    technologies: ["Terraform", "Terragrunt", "GitLab CI/CD", "Azure DevOps", "Python"],
    impact: "70% reduction in infrastructure provisioning time",
    achievements: [
      "Modular architecture for reusability",
      "Multi-environment support (dev/staging/prod)",
      "Automated testing with Terratest",
      "Policy-as-code integration with Sentinel"
    ],
    icon: "Code"
  },
  {
    id: 4,
    title: "GitLab Migration Program",
    category: "DevOps Transformation",
    description: "End-to-end migration of Azure DevOps to GitLab for AIQ, including repository migration, CI/CD pipeline transformation, and team training.",
    technologies: ["GitLab", "GitLab CI/CD", "AKS", "Terraform", "Azure DevOps"],
    impact: "50+ repositories migrated, 3x faster CI/CD",
    achievements: [
      "Zero data loss during migration",
      "Enhanced developer productivity",
      "Improved code review workflows",
      "Comprehensive training program delivered"
    ],
    icon: "GitBranch"
  },
  {
    id: 5,
    title: "Azure DevOps On-Premise Setup",
    category: "DevOps Platform",
    description: "Designed and implemented on-premise Azure DevOps Server deployment for hybrid enterprise environments requiring data residency.",
    technologies: ["Azure DevOps Server", "SQL Server", "IIS", "Active Directory", "SSL/TLS"],
    impact: "Secure DevOps platform for sensitive workloads",
    achievements: [
      "High availability configuration",
      "Disaster recovery implementation",
      "Integration with existing LDAP/AD",
      "Custom extension development"
    ],
    icon: "Server"
  },
  {
    id: 6,
    title: "Hub-Spoke Enterprise Architecture",
    category: "Network Architecture",
    description: "Enterprise network architecture design with Hub-Spoke topology implementing network virtualization and security controls.",
    technologies: ["Azure Virtual Network", "VPN Gateway", "ExpressRoute", "Azure Firewall", "NSG"],
    impact: "Secure connectivity for 1000+ users",
    achievements: [
      "Micro-segmentation implementation",
      "Centralized network monitoring",
      "Automated failover mechanisms",
      "Compliance with security standards"
    ],
    icon: "Network"
  },
  {
    id: 7,
    title: "Cloud Migration & Modernization",
    category: "Cloud Migration",
    description: "Large-scale cloud migration program moving legacy applications to Azure with modernization using containers and microservices.",
    technologies: ["Azure Migrate", "Site Recovery", "Containers", "AKS", "Data Factory"],
    impact: "500+ servers migrated, 40% cost reduction",
    achievements: [
      "Phased migration approach",
      "Zero-downtime cutover strategy",
      "Application modernization roadmap",
      "Post-migration optimization"
    ],
    icon: "ArrowUpCircle"
  },
  {
    id: 8,
    title: "Observability Platform",
    category: "Monitoring",
    description: "Comprehensive observability platform using Dynatrace and ELK Stack for enterprise-wide monitoring and analytics.",
    technologies: ["Dynatrace", "ELK Stack", "Grafana", "Prometheus", "Azure Monitor"],
    impact: "99.9% uptime achieved across platforms",
    achievements: [
      "Real-time monitoring dashboards",
      "Proactive alerting and incident management",
      "Performance optimization insights",
      "Cost optimization recommendations"
    ],
    icon: "Activity"
  }
];

export const metrics = [
  { value: 23, suffix: "+", label: "Years Experience" },
  { value: 48, suffix: "", label: "Landing Zones Delivered" },
  { value: 200, suffix: "+", label: "Managed Databases" },
  { value: 100, suffix: "+", label: "CI/CD Pipelines" },
  { value: 500, suffix: "+", label: "Servers Migrated" },
  { value: 1000, suffix: "+", label: "Users Impacted" }
];

export const certifications = [
  {
    id: 1,
    name: "IBM Certified Professional Data Science",
    issuer: "IBM",
    year: "2023",
    icon: "IBM"
  },
  {
    id: 2,
    name: "Oracle 11g Certified Professional",
    issuer: "Oracle",
    year: "2018",
    icon: "Oracle"
  },
  {
    id: 3,
    name: "Oracle 10g Certified Professional",
    issuer: "Oracle",
    year: "2015",
    icon: "Oracle"
  },
  {
    id: 4,
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    year: "2022",
    icon: "Kubernetes"
  }
];

export const toolchain = [
  { name: "Azure", color: "#0078d4" },
  { name: "AWS", color: "#ff9900" },
  { name: "Terraform", color: "#7b42bc" },
  { name: "Kubernetes", color: "#326ce5" },
  { name: "Docker", color: "#2496ed" },
  { name: "GitHub", color: "#24292e" },
  { name: "GitLab", color: "#fc6d26" },
  { name: "Azure DevOps", color: "#0078d4" },
  { name: "Linux", color: "#fcc624" },
  { name: "ELK", color: "#005571" },
  { name: "Dynatrace", color: "#6d42bc" },
  { name: "Prometheus", color: "#e6522c" },
  { name: "Grafana", color: "#f46800" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Redis", color: "#dc382d" }
];

export const education = [
  {
    id: 1,
    degree: "MS in Information Systems and Applications",
    institution: "University",
    year: "2015",
    description: "Advanced studies in information systems, cloud computing, and enterprise architecture."
  },
  {
    id: 2,
    degree: "Bachelor of Arts",
    institution: "Bharathidasan University",
    year: "2003",
    description: "Undergraduate degree providing strong foundation in analytical and communication skills."
  }
];

export const typingSkills = [
  "Azure",
  "Terraform",
  "Kubernetes",
  "DevOps",
  "AKS",
  "Cloud Architecture"
];