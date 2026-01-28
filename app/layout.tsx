import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}


export const metadata: Metadata = {
  title: "Docs - Nexonauts",
  description: "A developer's compendium of high-performance packages, battle-tested GitHub workflows, and architectural patterns.",
  applicationName: "Docs",
  keywords: [
    "Docs",
    "AI Tools",
    "Developer Portfolio",
    "Digital Marketplace",
    "Fashion AI",
    "Content Automation",
    "Thumbnail Generator",
    "Open Source Tools",
    "Web Utilities",
    "SaaS",
    "Next.js",
    "React",
    "nexonauts",
  ],
  authors: [{ name: "Kanak Kholwal", url: "https://kanakkholwal.eu.org" }],
  creator: "Kanak Kholwal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://docs.nexonauts.com"),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};