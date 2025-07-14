"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-100 w-full max-w-max">
      <div className={`
        flex flex-col md:flex-row rounded-full shadow-lg overflow-hidden
        border border-gray-500 bg-black/50 backdrop-blur-md bg-opacity-90
        ${isOpen ? "rounded-t-lg" : "rounded-b-lg"}
      `}>
        {/* Top bar - visible on all screens */}
        <div className="flex md:items-center z-100">
          <Link href="/" onClick={closeMenu}>
            <div className="px-6 py-3 gap-2  md:border-l border-gray-800 text-white transition flex ">
              <span className="font-bold"> Theo T. M </span>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden ml-auto p-4 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg className="w-5 h-5 text-white" fill="#fff" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="#fff" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop links - hidden on mobile */}
        <div className="hidden md:flex">
          <NavLink href="/services" text="Services" />
          <NavLink href="/portfolio" text="Portfolio" />
          <NavLink href="/contact" text="Contact" />
          <NavLink href="/resume" text="Resume" />
        </div>

        {/* Mobile menu - shown when open */}
        {isOpen && (
          <div className="flex flex-col md:hidden">
            <MobileNavLink href="/services" text="Services" onClick={closeMenu} />
            <MobileNavLink href="/portfolio" text="Portfolio" onClick={closeMenu} />
            <MobileNavLink href="/contact" text="Contact" onClick={closeMenu} />
            <MobileNavLink href="/resume" text="Resume" onClick={closeMenu} />
          </div>
        )}
      </div>
    </nav>
  );
}

// Component for desktop navigation links
function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href}>
      <div className="px-6 py-3 transition   text-white">
        {text}
      </div>
    </Link>
  );
}

// Component for mobile navigation links
function MobileNavLink({ href, text, onClick }: { 
  href: string; 
  text: string;
  onClick: () => void;
}) {
  return (
    <Link href={href} onClick={onClick}>
      <div className="px-6 py-4 hover:bg-black transition border-t border-gray-200 text-white text-center">
        {text}
      </div>
    </Link>
  );
}