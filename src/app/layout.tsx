import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaushikbhat.in"),
  title: {
    default: "Kaushik G Bhat — Frontend Engineer",
    template: "%s | Kaushik G Bhat",
  },
  description:
    "Software Engineer with 3+ years of experience specializing in React and Next.js. Building high-scale consumer UIs, design systems, and performant web applications.",
  keywords: [
    "Kaushik Bhat",
    "Kaushik G Bhat",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "UI Engineer Bengaluru",
    "Software Engineer Portfolio",
    "Web Performance Specialist",
  ],
  authors: [{ name: "Kaushik G Bhat", url: "https://kaushikbhat.in" }],
  creator: "Kaushik G Bhat",
  publisher: "Kaushik G Bhat",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kaushik G Bhat — Frontend Engineer",
    description:
      "Software Engineer specializing in React, Next.js, and modern frontend architectures. Building the future of the web.",
    url: "https://kaushikbhat.in",
    siteName: "Kaushik G Bhat Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaushik G Bhat — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushik G Bhat — Frontend Engineer",
    description:
      "Software Engineer specializing in React, Next.js, and modern frontend architectures.",
    creator: "@kaushikgbhat", // Assuming a handle or just name
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification-id", // User should replace this
  },
};

export const viewport = {
  themeColor: "#05050f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Kaushik G Bhat",
                url: "https://kaushikbhat.in",
                jobTitle: "Frontend Engineer",
                sameAs: [
                  "https://github.com/bhatkaushik",
                  "https://linkedin.com/in/kaushik-bhat-3368b1195/",
                ],
                description: "Software Engineer specializing in React, Next.js, and modern frontend architectures.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bengaluru",
                  addressRegion: "Karnataka",
                  addressCountry: "India",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Kaushik G Bhat Portfolio",
                url: "https://kaushikbhat.in",
                description: "Portfolio of Kaushik G Bhat, a Frontend Engineer specializing in React and Next.js.",
                publisher: {
                  "@type": "Person",
                  name: "Kaushik G Bhat"
                }
              }
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
