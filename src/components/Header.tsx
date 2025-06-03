"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from '../lib/motion'; // Menggunakan konfigurasi motion yang sama

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full py-4 sm:py-6 mb-8"
    >
      <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl border-b border-gray-800 pb-4 sm:pb-6">
        {/* Left: Placeholder "me" */}
        <div className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-lg sm:text-xl">
          About Me
        </div>

        {/* Right: Navigation Links */}
        <nav className="flex space-x-4 sm:space-x-6">
          <Link href="#journey" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
            Journey
          </Link>
          <Link href="#resume" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
            Resume
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
