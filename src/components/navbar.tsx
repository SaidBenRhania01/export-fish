"use client"
import { useState } from "react";
import Link from "next/link";
import { FaFish, FaIndustry, FaShippingFast, FaClipboardCheck, FaBars, FaTimes, FaBox } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full relative">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl">
        <div className="container mx-auto flex items-center justify-between px-8 py-6">
          {/* Logo with extra decoration */}
          <div className="flex items-center transform hover:scale-105 transition duration-300">
            <img src="/images/logo.png" alt="LOGISTOCEAN" className="mr-3 h-12 animate-bounce" />
            <Link href="/" className="text-white font-extrabold text-2xl">
              LogistOcean
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-12">
            <li className="relative group">
              <FaIndustry className="inline-block mr-2 text-white" />
              <Link href="/production" className="text-white text-lg font-semibold">
                Production
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <FaShippingFast className="inline-block mr-2 text-white" />
              <Link href="/shipment" className="text-white text-lg font-semibold">
                Shipment Solutions
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <FaClipboardCheck className="inline-block mr-2 text-white" />
              <Link href="/dedouanement" className="text-white text-lg font-semibold">
                Customs Clearance
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            {/* New Products Link */}
            <li className="relative group">
              <FaBox className="inline-block mr-2 text-white" />
              <Link href="/products" className="text-white text-lg font-semibold">
                Products
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white text-4xl cursor-pointer" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl z-50">
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li className="flex items-center space-x-2">
              <FaIndustry className="text-white text-xl" />
              <Link href="/production" className="text-white text-lg font-semibold">
                Production
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaShippingFast className="text-white text-xl" />
              <Link href="/shipment" className="text-white text-lg font-semibold">
                Shipment Solutions
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaClipboardCheck className="text-white text-xl" />
              <Link href="/dedouanement" className="text-white text-lg font-semibold">
                Customs Clearance
              </Link>
            </li>
            {/* New Products Link */}
            <li className="flex items-center space-x-2">
              <FaBox className="text-white text-xl" />
              <Link href="/products" className="text-white text-lg font-semibold">
                Products
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
