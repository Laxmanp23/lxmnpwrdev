export const metadata = {
  title: 'Blog | Laxman Pawar - Software Engineer',
  description: 'Read the latest insights, tutorials, and thoughts on web development, scalable systems, and the tech industry by Laxman Pawar.',
  keywords: 'Web Development, Software Engineering, React, Next.js, Tutorials, Programming Blog, Laxman Pawar',
  openGraph: {
    title: 'Laxman Pawar | Tech Blog',
    description: 'Insights, tutorials, and thoughts on web development and scalable systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laxman Pawar | Tech Blog',
    description: 'Insights, tutorials, and thoughts on web development and scalable systems.',
  }
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}