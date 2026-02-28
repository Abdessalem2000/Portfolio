import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kentache Abdessalem - Full Stack Developer Portfolio",
  description: "Full Stack Developer specializing in React, React Native, and Node.js with experience building modern web and mobile applications. Passionate about creating scalable SaaS solutions, e-commerce platforms, and automation tools.",
  keywords: ["Full Stack Developer", "Web Development", "React", "React Native", "Node.js", "TypeScript", "Redux", "Tailwind CSS", "PostgreSQL"],
  authors: [{ name: "Kentache Abdessalem" }],
  openGraph: {
    title: "Kentache Abdessalem - Full Stack Developer",
    description: "Full Stack Developer specializing in React, React Native, and Node.js with experience building modern web and mobile applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} font-sans antialiased bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
