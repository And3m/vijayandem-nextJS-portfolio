# Portfolio Setup Guide

This is a modern portfolio template built with Next.js 15, React 19, and Tailwind CSS. Follow these steps to customize it for your own use.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd your-portfolio
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your email configuration
   ```

3. **Configuration**
   ```bash
   cp src/configs/config.example.tsx src/configs/config.tsx
   cp src/configs/site.example.ts src/configs/site.ts
   # Customize these files with your information
   ```

4. **Add your profile image**
   - Add your profile image to `public/hero/profile.jpg`

5. **Run locally**
   ```bash
   npm run dev
   ```

## 📧 Email Configuration

For the contact form to work, you'll need to:

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

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The project is compatible with:
- Netlify
- Railway
- AWS Amplify
- Any Next.js hosting platform

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router
├── components/          # Reusable components
├── configs/            # Configuration files
├── lib/                # Utility functions
├── sections/           # Page sections
└── types/              # TypeScript types
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Nodemailer

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help setting up your portfolio, please create an issue in the repository.