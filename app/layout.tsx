import type { Metadata } from "next";
import Link from "next/link";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
//redesign
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "300"
});

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
      <body className={`${merriweather.className} bg-[#f7f9fc] text-black min-h-screen flex flex-col font-semibold`}>
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
    <nav className="navbar bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#0070f3] hover:text-[#0056a3]">
          📸 FrameVault
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-lg text-black hover:text-[#0070f3]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/photos" className="text-lg text-black hover:text-[#0070f3]">
              Photos
            </Link>
          </li>
          <li>
            <Link href="/user" className="text-lg text-black hover:text-[#0070f3]">
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
    <footer className="bg-white text-black p-6">
      <div className="container mx-auto text-center font-semibold">
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
