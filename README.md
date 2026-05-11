# Gnanasekar A - DevOps Architect Portfolio

A premium, enterprise-grade portfolio website showcasing 23+ years of DevOps and Cloud Infrastructure expertise. Built with React and Vite for optimal performance and GitHub Pages deployment.

## Features

- **Modern Design** - Enterprise-grade premium design with glassmorphism cards and elegant gradients
- **Dark/Light Mode** - Seamless theme toggle with persistent user preference
- **Responsive** - Fully responsive design for all devices
- **Animations** - Smooth scroll reveal animations, typing effects, and particle backgrounds
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Fast Loading** - Optimized build with Vite
- **GitHub Pages Ready** - Static deployment configuration

## Tech Stack

- React 18
- Vite 5
- Lucide React (icons)
- Framer Motion
- CSS Variables (no framework)

## Sections

1. **Hero** - Profile, typing animation, CTAs
2. **About** - Professional summary with stats
3. **Skills** - Categorized technical skills with progress bars
4. **Experience** - Expandable timeline with achievements
5. **Projects** - Featured project cards with impact metrics
6. **Metrics** - Animated counter statistics
7. **Certifications** - Professional certifications
8. **Toolchain** - Technology icon grid
9. **Education** - Academic background
10. **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Gnana-Tech-Page/gnanasekar-portfolio.git
cd gnanasekar-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## GitHub Pages Deployment

### Method 1: GitHub Actions (Recommended)

1. Fork this repository
2. Go to **Settings > Pages**
3. Under "Source", select **GitHub Actions**
4. Push any change to trigger the workflow

The workflow will automatically build and deploy to GitHub Pages.

### Method 2: Manual Deploy

```bash
# Build the project
npm run build

# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

Before deploying, update `vite.config.js` if deploying to a custom domain:

```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

### Custom Domain

1. Add your custom domain to `public/CNAME`
2. Configure DNS:
   - Add A record pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, or `185.199.111.153`
   - Add CNAME record for `www` pointing to your username.github.io

## Project Structure

```
├── public/
│   ├── favicon.svg
│   └── CNAME (optional, for custom domain)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Metrics.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Toolchain.jsx
│   │   │   ├── Education.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── BackToTop.jsx
│   │       ├── LoadingScreen.jsx
│   │       └── Particles.jsx
│   ├── data/
│   │   └── resume.js
│   ├── styles/
│   │   ├── variables.css
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Customization

### Update Profile Information

Edit `src/data/resume.js` to update:
- Profile data (name, email, social links)
- Skills and proficiency levels
- Experience and achievements
- Projects and metrics
- Certifications

### Update Profile Image

Replace the LinkedIn profile photo URL in `Hero.jsx` with your own image URL or place an image in `public/` and reference it.

### Update Colors

Edit `src/styles/variables.css` to customize the color palette.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this template for your own portfolio.

## Contact

- **LinkedIn**: [Gnanasekar A](https://www.linkedin.com/in/gnanatech/)
- **GitHub**: [Gnana-Tech-Page](https://github.com/Gnana-Tech-Page)

---

*Built with passion for Cloud, DevOps & Automation*