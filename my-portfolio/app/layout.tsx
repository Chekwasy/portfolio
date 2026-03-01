import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richard Chukwuchekwa | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in Next.js, React Native, Node.js, and cloud deployments. Experienced in building scalable applications with integrated payments and backend systems.",
  keywords: [
    "Full Stack Developer Nigeria",
    "Next.js Developer",
    "React Native Developer",
    "Node.js Engineer",
    "MongoDB Developer",
  ],
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
          <main className="flex-1 container mx-auto px-6 py-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
