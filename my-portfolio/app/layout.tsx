import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richard Chukwuchekwa | Full Stack TypeScript Engineer",
  description:
    "Full Stack TypeScript Engineer specializing in Next.js, Node.js, and scalable web applications. Experienced in building real-time systems, backend APIs, and deploying production platforms on DigitalOcean, Vercel, and Render.",
  keywords: [
    "Full Stack TypeScript Developer",
    "Next.js Developer",
    "Node.js Engineer",
    "React Native Developer",
    "MongoDB Developer",
    "JavaScript Engineer",
    "Remote Full Stack Developer",
    "Software Engineer Nigeria",
  ],
  openGraph: {
    title: "Richard Chukwuemeka | Full Stack TypeScript Engineer",
    description:
      "Full Stack TypeScript Engineer specializing in Next.js, Node.js, and scalable backend systems.",
    url: "https://portfolio-nine-lovat-86.vercel.app/",
    siteName: "Richard Chukwuchekwa Portfolio",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.className} bg-gradient-to-b from-black via-zinc-900 to-black text-white`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 max-w-6xl mx-auto px-6 py-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
