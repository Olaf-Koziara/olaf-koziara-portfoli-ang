# Olaf Koziara - Portfolio Website

A modern, performant portfolio website showcasing web development projects and expertise. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Features

- ⚡ **Lightning Fast**: Built with Next.js 15 and Turbopack for optimal performance
- 🎨 **Modern Design**: Clean, professional UI with smooth animations using Motion
- 🌍 **Internationalization**: Multi-language support with i18next
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ♿ **Accessible**: WCAG compliant with semantic HTML
- 🔍 **SEO Optimized**: Structured data, meta tags, and sitemap generation
- 🎭 **Custom UI Library**: Powered by React-Zero-UI for consistent components
- 🖱️ **Interactive Elements**: Custom cursor effects and smooth scrolling
- 📊 **Analytics Ready**: Integrated with Vercel Analytics and Microsoft Clarity
- 🧪 **E2E Testing**: Comprehensive test coverage with Playwright

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: [Next.js 15.5](https://nextjs.org/) with App Router
- **UI Library**: [React 19.1](https://react.dev/)
- **Language**: [TypeScript 5.8](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.1](https://tailwindcss.com/)

### Key Libraries
- **Animations**: [Motion](https://motion.dev/) (Framer Motion successor)
- **Internationalization**: i18next, react-i18next
- **UI Components**: @react-zero-ui/core, @react-zero-ui/icon-sprite
- **Analytics**: Vercel Analytics, Microsoft Clarity
- **Testing**: Playwright

### Development Tools
- **Linting**: ESLint with Next.js, Prettier plugins
- **Formatting**: Prettier with Tailwind plugin
- **Git Hooks**: Husky for pre-commit checks
- **Type Checking**: TypeScript strict mode

## 📋 Prerequisites

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher

## 🚦 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Olaf-Koziara/olaf-koziara-portfoli-ang.git
   cd olaf-koziara-portfoli-ang
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env.local
   ```
   Configure any necessary environment variables in `.env.local`

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
```

This will:
1. Run the `zero-icons` prebuild script
2. Create an optimized production build in `.next/`

### Running Production Build Locally

```bash
npm run start
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build production-ready application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |
| `npm run type-check` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm test` | Run Playwright end-to-end tests |
| `npm run test:ui` | Run Playwright tests with UI mode |
| `npm run clean` | Remove build artifacts and dependencies |
| `npm run reset` | Clean and reinstall all dependencies |

## 📁 Project Structure

```
olaf-koziara-portfoli-ang/
├── app/                        # Next.js app directory
│   ├── (site)/                # Site route group
│   │   ├── page.tsx          # Home page
│   │   └── projects/         # Projects pages
│   ├── components/           # React components
│   ├── data/                 # Static data and content
│   ├── hooks/                # Custom React hooks
│   ├── i18n/                 # Internationalization configs
│   ├── images/               # Image assets
│   ├── ui/                   # UI components
│   ├── utils/                # Utility functions
│   ├── layout.tsx            # Root layout
│   └── globalsV2.css         # Global styles
├── config/                    # Configuration files
│   ├── siteConfig.ts         # Site metadata and settings
│   └── schemas.ts            # Structured data schemas
├── e2e/                       # End-to-end tests
├── public/                    # Static assets
│   ├── assets/               # Images and media
│   ├── icons.svg             # Icon sprite
│   └── ...
├── scripts/                   # Build and utility scripts
├── .husky/                    # Git hooks
├── .vscode/                   # VS Code settings
├── .zero-ui/                  # Generated Zero-UI files
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── playwright.config.ts      # Playwright configuration
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## ⚙️ Configuration

### Site Configuration

Edit `config/siteConfig.ts` to update:
- Site metadata (title, description, keywords)
- Contact information (email, phone, social links)
- Navigation slugs and external links

### Next.js Configuration

The `next.config.ts` file includes:
- View transitions (experimental)
- Image optimization for external domains
- Bundle analyzer (commented out, can be enabled)

### Internationalization

Language detection and translations are configured in `app/i18n/`:
- Automatic browser language detection
- Fallback to English
- Translation files for supported languages

## 🎨 Customization

### Styling

The project uses Tailwind CSS with custom configuration. Global styles are in `app/globalsV2.css`.

### Fonts

Custom fonts are loaded in `app/layout.tsx`:
- **Switzer Variable**: Primary font with weights 300-700

### Colors & Theme

Tailwind configuration can be extended in the PostCSS config or through CSS variables.

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in headed mode
npx playwright test --headed
```

### Test Configuration

Playwright is configured in `playwright.config.ts` with:
- Multiple browser support (Chromium, Firefox, WebKit)
- Mobile viewport testing
- Screenshot and video on failure

## 🚀 Deployment

### Vercel (Recommended)

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Olaf-Koziara/olaf-koziara-portfoli-ang)

### Other Platforms

The project can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Self-hosted with Docker

## 📊 Performance

This portfolio is built with performance in mind:
- Server-side rendering (SSR) and static site generation (SSG)
- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle size
- Efficient CSS with Tailwind purging

## 🔒 Security

- Environment variables for sensitive data
- No secrets committed to repository
- Content Security Policy headers
- HTTPS enforced in production

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Quality

This project maintains high code quality through:
- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with Next.js and Prettier rules
- **Prettier**: Automatic code formatting
- **Husky**: Pre-commit hooks for linting and formatting
- **Playwright**: End-to-end testing

## 📄 License

This project is private and proprietary. All rights reserved.

## 👤 Contact

**Olaf Koziara**
- Email: olaf.koziara@gmail.com
- Phone: +48 792 344 951
- LinkedIn: [Olaf Koziara](https://www.linkedin.com/in/olaf-koziara-0b7b47164/)
- GitHub: [@Olaf-Koziara](https://github.com/Olaf-Koziara)
- Website: [austinserb.com](https://www.austinserb.com)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [React-Zero-UI](https://github.com/react-zero-ui)
- Animations powered by [Motion](https://motion.dev/)
- Icons from custom SVG sprite
- Analytics by [Vercel](https://vercel.com/analytics)

---

**Made with ❤️ by Olaf Koziara**
