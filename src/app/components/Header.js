"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-950 opacity-90 sticky top-0 z-50 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-white cursor-pointer">
            <span className="text-[#8c52ff]">A</span>rtistly
          </span>
        </Link>

        <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-50">
          <Link href="/" className="hover:text-[#8c52ff]">Home</Link>
          <Link href="/exploreArtists" className="hover:text-[#8c52ff]">Explore Artists</Link>
          <Link href="/onboard" className="hover:text-[#8c52ff]">Onboard</Link>
          <Link href="/contactUs" className="hover:text-[#8c52ff]">Contact</Link>
        </nav>

        <div className="sm:hidden">
          <button className="text-amber-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-gray-950 opacity-90 px-6 pb-4 text-sm font-medium text-gray-50 space-y-3">
          <Link href="/" className="block hover:text-amber-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/exploreArtists" className="block hover:text-amber-600" onClick={() => setIsOpen(false)}>Explore Artists</Link>
          <Link href="/onboard" className="block hover:text-amber-600" onClick={() => setIsOpen(false)}>Onboard</Link>
          <Link href="/contact" className="block hover:text-amber-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}