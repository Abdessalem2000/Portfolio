# [Your Name] - Full Stack Developer Portfolio

A clean, modern, and minimal portfolio website built with Next.js and Tailwind CSS.

## Features

- 🚀 **Next.js 15** with TypeScript
- 🎨 **Tailwind CSS** for styling
- 🌙 **Dark/Light mode** toggle
- 📱 **Fully responsive** design (mobile-first)
- 🔍 **SEO optimized** with proper meta tags
- ⚡ **Production-ready** structure
- 🎯 **Clean typography** with Inter font

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Styling**: Tailwind CSS with custom dark mode support
- **Icons**: SVG icons (no external dependencies)
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx
│       │   └── Footer.tsx
│       └── sections/
│           ├── Hero.tsx
│           ├── About.tsx
│           ├── TechStack.tsx
│           ├── FeaturedProject.tsx
│           ├── OtherProjects.tsx
│           └── Contact.tsx
├── public/
│   ├── robots.txt
│   └── sitemap.xml

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abdessalem2000/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   MONGODB_URI=mongodb+srv://your-connection-string
   JWT_SECRET=your-jwt-secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts
## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The app is ready for deployment on:
- Netlify
- AWS Amplify
- Any static hosting service

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Portfolio: [your-domain.com]
- Email: [your-email@example.com]
- LinkedIn: [linkedin-profile]
- GitHub: [github-username]
