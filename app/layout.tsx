import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FrameVault - Photo Management App",
  description: "Organize and explore your photo collection with FrameVault.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1f1f1f] text-[#c5c8c6] min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow flex justify-center items-center p-6">
          <div className="prose text-center space-y-8">{children}</div>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar bg-[#2b2b2b] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#61dafb] hover:text-[#40c0eb]">
          📸 FrameVault
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-lg text-[#c5c8c6] hover:text-[#61dafb]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/photos" className="text-lg text-[#c5c8c6] hover:text-[#61dafb]">
              Photos
            </Link>
          </li>
          <li>
            <Link href="/user" className="text-lg text-[#c5c8c6] hover:text-[#61dafb]">
              Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-[#8a8d91] p-6">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} FrameVault. All rights reserved.</p>
        <div className="mt-4">
          <Link href="/" className="mx-2 hover:text-[#61dafb]">
            Privacy Policy
          </Link>
          <Link href="/" className="mx-2 hover:text-[#61dafb]">
            Terms of Service
          </Link>
          <Link href="/" className="mx-2 hover:text-[#61dafb]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
