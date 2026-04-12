"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Properties", href: "#properties" },
    { name: "Digital Assets", href: "#digital-assets" },
    { name: "Stake & Earn", href: "#stake-and-earn" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-6 md:space-x-12">
          {/* Brand Identity / Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10">
              <Image 
                src="/logo.png" 
                alt="Stake Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter group-hover:text-[#e8860c] transition-colors duration-300">
              Sta<span className="text-[#e8860c]">k</span>e
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href="#"
                className="text-xs lg:text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            href="#"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#e8860c] hover:bg-[#d4790b] rounded-full transition-colors duration-300 shadow-[0_0_15px_rgba(232,134,12,0.3)] hover:shadow-[0_0_20px_rgba(232,134,12,0.5)]"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl py-6 px-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href="#"
                className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-4 flex flex-col space-y-4">
              <Link
                href="#"
                className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="#"
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#e8860c] rounded-lg transition-colors duration-300 shadow-[0_0_15px_rgba(232,134,12,0.2)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
