import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laxman Pawar - Full-Stack Developer | Web Development in India",
  description: "Professional full-stack web development services in Indore, Bhopal, Pune, Bangalore, Chennai, Mumbai, and Delhi. Expert in Next.js, React, Node.js, and TypeScript. Custom web solutions for businesses.",
  keywords: [
    "web developer",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "web development Indore",
    "web development Bhopal",
    "web development Pune",
    "web development Bangalore",
    "web development Chennai",
    "web development Mumbai",
    "web development Delhi",
    "freelance developer India",
    "custom web solutions",
    "e-commerce development",
    "SaaS development",
  ],
  authors: [{ name: "Laxman Pawar", url: "https://laxmanpawar.dev" }],
  creator: "Laxman Pawar",
  publisher: "Laxman Pawar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://laxmanpawar.dev",
    siteName: "Laxman Pawar - Full-Stack Developer",
    title: "Laxman Pawar - Full-Stack Developer | Web Development Services",
    description: "Professional full-stack web development services across India. Building scalable web solutions with modern technologies.",
    images: [
      {
        url: "https://laxmanpawar.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Laxman Pawar - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laxman Pawar - Full-Stack Developer",
    description: "Professional full-stack web development services in India",
    creator: "@laxmanpawar",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://laxmanpawar.dev",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Laxman Pawar - Full-Stack Developer",
              url: "https://laxmanpawar.dev",
              logo: "https://laxmanpawar.dev/logo.png",
              description: "Professional full-stack web development services across major Indian cities",
              sameAs: [
                "https://linkedin.com/in/laxmanpawar",
                "https://github.com/laxmanpawar",
                "https://twitter.com/laxmanpawar",
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Indore",
                  "url": "https://laxmanpawar.dev/cities/indore"
                },
                {
                  "@type": "City",
                  name: "Bhopal",
                  "url": "https://laxmanpawar.dev/cities/bhopal"
                },
                {
                  "@type": "City",
                  name: "Pune",
                  "url": "https://laxmanpawar.dev/cities/pune"
                },
                {
                  "@type": "City",
                  name: "Bangalore",
                  "url": "https://laxmanpawar.dev/cities/bangalore"
                },
                {
                  "@type": "City",
                  name: "Chennai",
                  "url": "https://laxmanpawar.dev/cities/chennai"
                },
                {
                  "@type": "City",
                  name: "Mumbai",
                  "url": "https://laxmanpawar.dev/cities/mumbai"
                },
                {
                  "@type": "City",
                  name: "Delhi",
                  "url": "https://laxmanpawar.dev/cities/delhi"
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Madhya Pradesh",
                addressLocality: "Indore",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Professional Services",
                email: "contact@laxmanpawar.dev",
                availableLanguage: ["en", "hi"],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
