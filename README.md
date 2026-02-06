# [julianaijal.com](https://julianaijal.com/)

My personal website and blog, built with modern web technologies.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Google Analytics](https://img.shields.io/badge/Google%20Analytics-E37400?style=for-the-badge&logo=google%20analytics&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

[![Website Status](https://img.shields.io/website-up-down-green-red/https/julianaijal.com.svg)](https://julianaijal.com)
[![Last Commit](https://img.shields.io/github/last-commit/julianaijal/julianaijal.com)](https://github.com/julianaijal/julianaijal.com/commits)

[🌐 Visit Website](https://julianaijal.com) · [📝 Read Blog](https://julianaijal.com/articles) · [📫 Contact](mailto:hello@julianaijal.com)

## ✨ Features

- Modern, responsive design
- Dynamic article pages with rich content
- Optimized performance and SEO
- Analytics and insights tracking
- Automated deployments

## 🛠️ Built With

- **Core:** Next.js 15, React 19, TypeScript 5.7, SASS
- **Content:** Hygraph CMS (GraphQL API)
- **Analytics:** Vercel Analytics, Speed Insights, Google Analytics 4, Google Tag Manager
- **Performance:** Web Vitals monitoring, image optimization (AVIF/WebP)
- **Infrastructure:** Vercel Platform
- **Code Quality:** ESLint, TypeScript

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/julianaijal/julianaijal.com.git

# Navigate to project directory
cd julianaijal.com

# Install dependencies
npm install

# Set up environment variables (requires Hygraph CMS credentials)
cp .env.example .env.local  # Add HYGRAPH_API_KEY and HYGRAPH_AUTH_TOKEN

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production + generate sitemap
npm run start        # Start production server
npm run lint         # Run ESLint
npm run generate-sitemap # Generate sitemap
```

## 📝 Project Structure

```
/app                 # Next.js 15 App Router
  /_components       # UI components (Hero, NavBar, ArticleSlider, etc.)
  /_lib             # Core utilities (Schema.org, WebVitals)
  /articles         # Dynamic article routes with [slug]
  /hooks            # Custom React hooks
  /styles           # Global SASS stylesheets
  /utils            # API integration (Hygraph CMS)
/config             # Configuration files
/public             # Static assets
/scripts            # Build scripts (sitemap generation)
```

## 📈 Performance

The site is optimized for performance and SEO:

- Vercel Analytics and Speed Insights integration
- Web Vitals monitoring and performance tracking
- Server-side rendering with Next.js App Router
- Optimized images with AVIF/WebP formats
- Automated sitemap generation

## 🌐 Deployment

The site automatically deploys to Vercel when changes are pushed to the main branch. Each deployment includes:
- Next.js production build optimization
- Automated sitemap generation
- Web vitals monitoring

## 📫 Contact

hello @ julianaijal dot com