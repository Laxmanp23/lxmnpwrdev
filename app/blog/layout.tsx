import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Web Development Tips, Tutorials, and Best Practices',
  description: 'Read articles and tutorials about web development, Next.js, React, Node.js, and web development best practices. Learn from real-world examples and expert insights.',
  keywords: [
    'web development blog',
    'Next.js tutorials',
    'React tips',
    'Node.js guide',
    'web development best practices',
    'programming tutorials',
    'developer blog',
    'full-stack development',
    'TypeScript guide',
    'API development',
  ],
  openGraph: {
    title: 'Blog | Web Development Tips and Tutorials',
    description: 'Read articles and tutorials about web development and programming',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Web Development Tips and Tutorials',
    description: 'Articles and tutorials on web development and programming',
  }
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}