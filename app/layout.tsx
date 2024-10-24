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
      <body className={`${inter.className} bg-[#f7f9fc] text-[#333333] min-h-screen flex flex-col`}>
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
    <nav className="navbar bg-[#ffffff] p-4 shadow-md border-b border-[#e0e0e0]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#0070f3] hover:text-[#005bb5]">
          📸 FrameVault
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-lg text-[#333333] hover:text-[#0070f3]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/photos" className="text-lg text-[#333333] hover:text-[#0070f3]">
              Photos
            </Link>
          </li>
          <li>
            <Link href="/user" className="text-lg text-[#333333] hover:text-[#0070f3]">
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
    <footer className="bg-[#ffffff] text-[#666666] p-6 border-t border-[#e0e0e0]">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} FrameVault. All rights reserved.</p>
        <div className="mt-4">
          <Link href="/" className="mx-2 hover:text-[#0070f3]">
            Privacy Policy
          </Link>
          <Link href="/" className="mx-2 hover:text-[#0070f3]">
            Terms of Service
          </Link>
          <Link href="/" className="mx-2 hover:text-[#0070f3]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
