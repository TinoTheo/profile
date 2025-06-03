"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex rounded-full shadow-lg overflow-hidden border border-gray-300 bg-white backdrop-blur-md bg-opacity-90">
        <Link href="/">
          <div className="px-6 py-3 flex items-center gap-2 hover:bg-gray-100 border-l border-gray-200 text-gray-600  transition">
            <span className="font-bold ">Theo T. M</span>
          </div>
        </Link>

        <Link href="/services">
          <div className="px-6 py-3 hover:bg-gray-100 transition border-l border-gray-200 text-gray-600">
            Services
          </div>
        </Link>

        <Link href="/portfolio">
          <div className="px-6 py-3 hover:bg-gray-100 transition border-l border-gray-200 text-gray-600">
            Portfolio
          </div>
        </Link>

        <Link href="/contact">
          <div className="px-6 py-3 hover:bg-gray-100 transition border-l border-gray-200 text-gray-600">
            Contact
          </div>
        </Link>

        <Link href="/resume">
          <div className="px-6 py-3 hover:bg-gray-100 transition border-l border-gray-200 text-gray-600">
            Resume
          </div>
        </Link>
      </div>
    </nav>

)
};