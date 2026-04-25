# Laxman Pawar - Full-Stack Portfolio Website

A modern, high-performance portfolio and freelancing website built with Next.js 14, TypeScript, Tailwind CSS, and Prisma ORM.

## 🌟 Features

### Public Website
- **Home Page**: Hero section with CTA, services overview, featured projects, and testimonials
- **About Page**: Professional background, skills, and experience
- **Services Page**: Comprehensive service offerings and packages
- **Portfolio Page**: Dynamic project showcase with filtering and details
- **Blog Page**: Full-featured blog with dynamic content management
- **Contact Page**: Contact form with message storage and optional email notifications

### Admin Dashboard
- **Authentication**: Secure JWT-based admin login
- **Dashboard**: Overview with key metrics
- **Project Management**: Create, edit, and delete portfolio projects
- **Blog Management**: Write and publish blog posts with rich text editor
- **Service Management**: Manage services and their details
- **Contact Management**: View and manage client inquiries

### Technical Features
- ✅ Server Components for better performance
- ✅ SEO optimized pages with meta tags
- ✅ Responsive design (mobile-first)
- ✅ Dark theme with neon/gradient accents
- ✅ Smooth animations (Framer Motion)
- ✅ Glassmorphism UI components
- ✅ REST API with Next.js route handlers
- ✅ Database ORM with Prisma
- ✅ Type-safe with TypeScript
- ✅ Production-ready deployment configuration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or higher
- npm or yarn
- MySQL or PostgreSQL database

### Installation

1. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Setup Environment Variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   DATABASE_URL="mysql://user:password@localhost:3306/laxmanpawar_db"
   
   # JWT Secret
   JWT_SECRET="your-super-secret-jwt-key-change-in-production"
   
   # API Configuration
   NEXT_PUBLIC_API_URL="http://localhost:3000"
   
   # Email Configuration (optional)
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASSWORD="your-app-password"
   ADMIN_EMAIL="admin@laxmanpawar.dev"
   ```

3. **Setup Database**
   
   Push the Prisma schema to your database:
   ```bash
   npm run db:push
   ```

4. **Seed Database with Initial Data**
   
   Populate the database with sample data and create admin user:
   ```bash
   npm run prisma:seed
   ```
   
   This creates:
   - Admin user: `admin@laxmanpawar.dev` / `Admin@123`
   - 4 sample services
   - 3 sample projects
   - 2 sample blog posts

5. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
/app
  /admin                    # Admin pages and dashboard
    /login                 # Admin login page
    /dashboard            # Dashboard overview
    /projects             # Project management
    /blogs                # Blog management
    /services             # Service management
    /contacts             # Contact messages
  /api                      # API routes
    /auth                 # Authentication endpoints
    /projects             # Project CRUD endpoints
    /blogs                # Blog CRUD endpoints
    /services             # Service CRUD endpoints
    /contacts             # Contact submission endpoint
  /blog                     # Public blog pages
  /about                    # About page
  /services                 # Services page
  /portfolio                # Portfolio page
  /contact                  # Contact page

/components                 # Reusable React components
  - Header.tsx             # Navigation header
  - Footer.tsx             # Footer component
  - Hero.tsx               # Hero section
  - Services.tsx           # Services display
  - Projects.tsx           # Projects showcase
  - ContactForm.tsx        # Contact form

/lib                        # Utility functions
  - auth.ts               # Authentication utilities
  - db.ts                 # Database client

/prisma
  - schema.prisma         # Database schema
  - seed.ts               # Database seeding script
```

## 🔐 Authentication & Security

- Passwords are hashed using bcryptjs
- JWT tokens for session management
- HTTP-only cookies for token storage
- Protected admin routes
- CORS-ready API endpoints

## 🎨 Design System

### Colors
- **Primary**: Purple (#a855f7)
- **Secondary**: Pink (#ec4899)
- **Background**: Black (#000000)
- **Text**: White (#ffffff)

### Components
- Glassmorphism cards
- Gradient accents
- Smooth transitions and animations
- Responsive grid layouts

## 📦 Database Schema

### Users
- id (string, primary key)
- email (string, unique)
- password (string, hashed)
- name (string)

### Projects
- id, title, description, image
- technologies, liveUrl, githubUrl
- featured, order

### Blogs
- id, title, slug, content, excerpt
- image, views, published

### Services
- id, title, description, icon, order

### Contacts
- id, name, email, message, status

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy!

### Other Platforms
- Heroku, Railway, Render, AWS, DigitalOcean, etc.
- Ensure Node.js 18+
- Set all environment variables
- Run: `npm run build && npm run start`

## 🛠️ Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run linter
npm run db:push          # Push schema to database
npm run prisma:seed      # Seed database
npm run studio           # Open Prisma Studio
```

## 📝 Customization

- Edit content through admin panel
- Modify styles in component files
- Update environment variables
- Add new routes in `/app` directory

## 🐛 Troubleshooting

1. **Database connection error**: Check DATABASE_URL in .env
2. **Authentication issues**: Clear browser cookies and re-login
3. **Build errors**: Delete `.next` folder and rebuild
4. **Port already in use**: Change port: `npm run dev -- -p 3001`

## 📧 Support

Contact: contact@laxmanpawar.dev

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
