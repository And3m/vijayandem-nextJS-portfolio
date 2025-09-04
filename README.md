# Modern Business Analyst Portfolio Template

A comprehensive, modern portfolio website built with Next.js 15, perfect for business analysts, data visualization specialists, and professionals in analytics. This template demonstrates cutting-edge web development practices while showcasing professional experience and skills.

## 🚀 Key Features

### 🎨 **User Experience & Design**
- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4
- **Responsive Design**: Optimized for all devices and screen sizes with mobile-first approach
- **Interactive Animations**: Smooth animations and transitions using Framer Motion
- **Light/Dark Mode**: Seamless theme switching with system preference detection
- **Professional UI**: Clean, modern interface with subtle animations and micro-interactions

### 💼 **Professional Showcase**
- **Tech Stack Visualization**: Interactive 3D cloud of technologies with hover effects and tooltips
- **Comprehensive Experience**: Detailed work history with achievements and key projects
- **Project Portfolio**: Advanced carousel showcasing projects and work samples
- **Resume Integration**: Modal-based resume viewing and direct PDF download functionality
- **Professional Branding**: Cohesive brand identity and messaging

### 🤖 **AI Integration & Modern Features**
- **Ask AI Button**: Multi-platform AI integration allowing visitors to ask questions about the portfolio
- **LLM-Optimized Content**: Special endpoints for AI models (llms.txt, structured markdown routes)
- **Contact Form**: Full-featured contact form with server-side email processing via Nodemailer
- **Analytics Integration**: Vercel Analytics for visitor tracking and insights
- **SEO Optimized**: Advanced SEO with structured data and comprehensive meta tags

### 🔒 **Security & Performance**
- **Environment Variable Validation**: Robust server-side validation and error handling
- **SMTP Verification**: Real-time email service verification before sending
- **Security Best Practices**: Proper credential handling and sensitive data protection
- **Optimized Performance**: Code splitting, lazy loading, and build optimization

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom design system
- **Animations**: Framer Motion 12 for smooth transitions
- **UI Components**: Radix UI primitives (Dialog, Dropdown, Tabs, Tooltip, etc.)
- **Icons**: Lucide React with 500+ professional icons
- **Carousel**: Embla Carousel for project showcases
- **3D Effects**: React Icon Cloud for tech stack visualization

### **Backend & APIs**
- **Email Service**: Nodemailer with Gmail SMTP integration
- **API Routes**: Next.js 15 serverless functions
- **Environment Management**: Robust env validation and error handling
- **LLM Integration**: Custom endpoints for AI model consumption

### **Development & Tools**
- **Linting**: ESLint 9 with Next.js configuration
- **Type Safety**: Strict TypeScript configuration
- **Build System**: Next.js optimized builds with code splitting
- **Analytics**: Vercel Analytics integration
- **Version Control**: Git with semantic commit messages

### **Deployment & Infrastructure**
- **Platform**: Vercel with automatic deployments
- **Domain**: Custom domain with SSL support
- **Environment**: Production/Preview environment separation
- **Monitoring**: Function logs and error tracking

## 🏃‍♂️ Getting Started

### Prerequisites

- **Node.js 18+** installed on your machine
- **npm or yarn** package manager
- **Git** for version control

### Local Development Setup

1. **Clone the repository:**
```bash
git clone <your-repository-url>
cd your-portfolio
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Environment Configuration:**
```bash
# Copy example environment file
cp .env.example .env.local

# Edit .env.local with your email configuration
```

4. **Configuration Setup:**
```bash
# Copy configuration templates
cp src/configs/config.example.tsx src/configs/config.tsx
cp src/configs/site.example.ts src/configs/site.ts

# Customize these files with your information
```

5. **Add your assets:**
   - Add your profile image to `public/hero/profile.jpg`
   - Add your resume to `public/resume.pdf`
   - Update project images in `public/projects/`

6. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

7. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The page will auto-reload as you make changes

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 📧 Email Configuration

For the contact form to work, you'll need to set up Gmail SMTP:

1. **Enable 2FA on your Gmail account**
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Update .env.local**:
   ```
   SMTP_EMAIL=your-email@gmail.com
   SMTP_PASSWORD=your-16-character-app-password
   CONTACT_EMAIL=your-email@gmail.com
   ```

See [SETUP.md](./SETUP.md) for detailed configuration instructions.

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (root)/            # Main application routes
│   │   ├── (llm)/             # AI/LLM optimized endpoints
│   │   ├── api/               # API routes
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable React components
│   ├── configs/               # Configuration files
│   ├── lib/                   # Utility functions
│   ├── sections/              # Page sections and layouts
│   └── types/                 # TypeScript definitions
├── public/                    # Static assets
│   ├── branding/             # Logo and brand assets
│   ├── hero/                 # Profile images
│   └── projects/             # Project screenshots
├── SETUP.md                  # Configuration guide
└── README.md                 # This file
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically!

### Other Platforms
The project is compatible with:
- Netlify
- Railway
- AWS Amplify
- Any Next.js hosting platform

See [VERCEL_SETUP.md](./VERCEL_SETUP.md) for detailed deployment instructions.

## 🎨 Customization

### Personal Information
Edit `src/configs/config.tsx`:
- Update profile information
- Add your experience/work history
- Customize social media links
- Modify skills and technologies

### Site Metadata
Edit `src/configs/site.ts`:
- Update site title and description
- Modify SEO keywords
- Update the about me section

### Projects
Edit `src/configs/projects.ts`:
- Add your projects
- Include screenshots, descriptions, and tech stacks
- Add live demo and GitHub links

### Styling
The project uses Tailwind CSS. Customize:
- `src/app/globals.css` for global styles
- Component-specific styles in their respective files

## 🔧 Key Features Deep Dive

### 🤖 **AI Integration**
The portfolio includes a sophisticated "Ask AI" button that allows visitors to inquire about professional experience, projects, or skills through multiple AI platforms.

### 📧 **Contact System**
Professional-grade contact form with robust backend processing and email integration.

### 📊 **Analytics & SEO**
Built-in analytics and search engine optimization for maximum visibility.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Special thanks to:
- **Next.js Team**: For the amazing framework and documentation
- **Vercel**: For seamless deployment and hosting
- **Radix UI**: For accessible component primitives
- **Framer Motion**: For smooth animations and interactions
- **Tailwind CSS**: For utility-first styling approach

---

**Ready to build your professional portfolio? Follow the setup guide and customize it with your information!**