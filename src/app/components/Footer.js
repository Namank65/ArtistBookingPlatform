import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-50 py-12 px-4 mt-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-gray-50 mb-2">Artistly</h2>
          <p className="text-sm text-gray-50">
            Your trusted platform to discover, connect, and book the best performing artists.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-50 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#8c52ff]">Home</Link></li>
            <li><Link href="/artists" className="hover:text-[#8c52ff]">Explore Artists</Link></li>
            <li><Link href="/onboard" className="hover:text-[#8c52ff]">Onboard as Artist</Link></li>
            <li><Link href="/contact" className="hover:text-[#8c52ff]">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-50 mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#8c52ff]">
              <FaFacebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#8c52ff]">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#8c52ff]">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#8c52ff]">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()} Artistly.com. All rights reserved.
      </div>
    </footer>
  );
}
