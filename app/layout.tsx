import type { Metadata } from "next";
import Link from "next/link";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "FrameVault - Photo Management App",
  description: "Organize and explore your photo collection with FrameVault.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.className} bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-gray-100 font-sans flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow flex justify-center items-center px-4 py-12">
          <div className="max-w-3xl text-center space-y-8">{children}</div>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-400 hover:text-purple-500">
          📸 FrameVault
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-lg text-gray-200 hover:text-indigo-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/photos" className="text-lg text-gray-200 hover:text-indigo-400">
              Photos
            </Link>
          </li>
          <li>
            <Link href="/user" className="text-lg text-gray-200 hover:text-indigo-400">
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
    <footer className="bg-gray-800 p-8 shadow-inner">
      <div className="container mx-auto text-center text-gray-300">
        <p>© {new Date().getFullYear()} FrameVault. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <Link href="/" className="hover:text-indigo-400">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-indigo-400">
            Terms of Service
          </Link>
          <Link href="/" className="hover:text-indigo-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
//1. link to social media 2. about page 3. manual log in
