const { PrismaClient } = require('@prisma/client');
const bcryptjs = require('bcryptjs');

const prisma = new PrismaClient();

async function hashPassword(password) {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
}

async function main() {
  try {
    console.log('Seeding database...');

    // Create admin user
    const adminPassword = await hashPassword('Admin@123');
    const user = await prisma.user.upsert({
      where: { email: 'admin@laxmanpawar.dev' },
      update: {},
      create: {
        email: 'admin@laxmanpawar.dev',
        password: adminPassword,
        name: 'Laxman Pawar',
      },
    });
    console.log('✓ Admin user created:', user.email);

    // Create services
    const services = await Promise.all([
      prisma.service.upsert({
        where: { id: 'svc-1' },
        update: {},
        create: {
          id: 'svc-1',
          title: 'Website Development',
          description: 'Modern, responsive websites with excellent performance and SEO optimization for your online presence.',
          icon: '🌐',
          order: 1,
        },
      }),
      prisma.service.upsert({
        where: { id: 'svc-2' },
        update: {},
        create: {
          id: 'svc-2',
          title: 'Web Application Development',
          description: 'Interactive web applications with rich user interfaces and real-time functionality.',
          icon: '⚡',
          order: 2,
        },
      }),
      prisma.service.upsert({
        where: { id: 'svc-3' },
        update: {},
        create: {
          id: 'svc-3',
          title: 'Backend APIs',
          description: 'Scalable REST and GraphQL APIs with secure authentication and database optimization.',
          icon: '🔗',
          order: 3,
        },
      }),
      prisma.service.upsert({
        where: { id: 'svc-4' },
        update: {},
        create: {
          id: 'svc-4',
          title: 'Full-stack Solutions',
          description: 'Complete end-to-end development from frontend UI to backend infrastructure.',
          icon: '🏗️',
          order: 4,
        },
      }),
    ]);
    console.log(`✓ Created ${services.length} services`);

    // Create sample projects
    const projects = await Promise.all([
      prisma.project.upsert({
        where: { id: 'proj-1' },
        update: {},
        create: {
          id: 'proj-1',
          title: 'E-Commerce Platform',
          description: 'Full-stack e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard.',
          image: 'https://images.unsplash.com/photo-1460925895917-adf4e6d6a4b2?w=500&h=300&fit=crop',
          technologies: 'Next.js, TypeScript, Stripe, Prisma, PostgreSQL',
          liveUrl: 'https://example-ecommerce.com',
          githubUrl: 'https://github.com/example',
          featured: true,
          order: 1,
        },
      }),
      prisma.project.upsert({
        where: { id: 'proj-2' },
        update: {},
        create: {
          id: 'proj-2',
          title: 'SaaS Analytics Dashboard',
          description: 'Real-time analytics dashboard with data visualization, user management, and advanced reporting features.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
          technologies: 'React, Node.js, MongoDB, Chart.js, Docker',
          liveUrl: 'https://example-analytics.com',
          githubUrl: 'https://github.com/example',
          featured: true,
          order: 2,
        },
      }),
      prisma.project.upsert({
        where: { id: 'proj-3' },
        update: {},
        create: {
          id: 'proj-3',
          title: 'Mobile App Backend API',
          description: 'RESTful API with authentication, real-time notifications, and cloud storage integration for mobile applications.',
          image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
          technologies: 'Node.js, Express, PostgreSQL, AWS, Firebase',
          liveUrl: 'https://api.example.com',
          githubUrl: 'https://github.com/example',
          featured: true,
          order: 3,
        },
      }),
    ]);
    console.log(`✓ Created ${projects.length} projects`);

    // Create sample blog posts
    const blogs = await Promise.all([
      prisma.blog.upsert({
        where: { slug: 'getting-started-with-nextjs' },
        update: {},
        create: {
          slug: 'getting-started-with-nextjs',
          title: 'Getting Started with Next.js 14',
          excerpt: 'Learn how to build modern web applications with Next.js 14 and the App Router.',
          content: `Next.js 14 introduces the App Router, a powerful new way to build web applications.

## Key Features

- Server Components by default
- Simplified routing with the app directory
- Built-in performance optimizations
- Enhanced security

## Getting Started

npm install next@latest

This will set you up with the latest version of Next.js.`,
          image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
          published: true,
          views: 150,
        },
      }),
      prisma.blog.upsert({
        where: { slug: 'mastering-typescript' },
        update: {},
        create: {
          slug: 'mastering-typescript',
          title: 'Mastering TypeScript: Advanced Tips and Tricks',
          excerpt: 'Deep dive into TypeScript advanced features and best practices for scalable applications.',
          content: `TypeScript is a powerful tool for building scalable JavaScript applications.

## Advanced Concepts

- Generics
- Union and Intersection Types
- Utility Types
- Advanced Type Guards

## Best Practices

Always use strict mode and leverage the type system to its full potential.`,
          image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504d0?w=500&h=300&fit=crop',
          published: true,
          views: 89,
        },
      }),
    ]);
    console.log(`✓ Created ${blogs.length} blog posts`);

    console.log('\n✨ Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
