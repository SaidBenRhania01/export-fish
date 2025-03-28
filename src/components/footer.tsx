"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin, FaArrowUp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-24 pb-12 text-white overflow-hidden shadow-2xl">
      {/* Enhanced Wave Design */}
      <div className="absolute top-0 left-0 w-full overflow-hidden transform -translate-y-1">
        <svg
          className="relative block w-full h-32"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="url(#wave)" d="M0 0H1440V200H0z"/>
          <defs>
            {/* <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(30, 58, 138, 1)"/>
              <stop offset="100%" stopColor="rgba(49, 46, 129, 1)"/>
            </linearGradient> */}
          </defs>
          <path d="M0 100C300 0 500 200 900 100S1500 0 1800 100" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <Image 
                src="/images/logo.png" 
                alt="LOGISTOCEAN Logo" 
                width={80} 
                height={80}
                className="filter brightness-0 invert"
              />
              <span className="text-2xl font-bold tracking-wide">LogistOcean</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Global seafood logistics experts connecting oceans to markets with sustainable excellence.
            </p>
          </motion.div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-semibold uppercase tracking-wider text-blue-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/products" className="hover:text-blue-400 transition-colors">Products</Link></li>
                <li><Link href="/sustainability" className="hover:text-blue-400 transition-colors">Sustainability</Link></li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="font-semibold uppercase tracking-wider text-blue-300">Operations</h4>
              <ul className="space-y-2">
                <li><Link href="/production" className="hover:text-blue-400 transition-colors">Production</Link></li>
                <li><Link href="/shipment" className="hover:text-blue-400 transition-colors">Shipment Solutions</Link></li>
                <li><Link href="/quality" className="hover:text-blue-400 transition-colors">Quality Control</Link></li>
                <li><Link href="/certifications" className="hover:text-blue-400 transition-colors">Certifications</Link></li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="font-semibold uppercase tracking-wider text-blue-300">Connect</h4>
              <div className="flex space-x-4">
                <Link 
                  href="#" 
                  className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </Link>
                <Link 
                  href="#" 
                  className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link 
                  href="#" 
                  className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </Link>
              </div>
              
              <div className="pt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="flex-shrink-0" />
                  <span>Islane, 80000 Agadir, Morocco</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt className="flex-shrink-0" />
                  <a href="tel:+49123456789" className="hover:text-blue-400">+49 123 456 789</a>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="flex-shrink-0" />
                  <a href="mailto:contact@logistocean.com" className="hover:text-blue-400">contact@logistocean.com</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Copyright Section */}
        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {new Date().getFullYear()} LogistOcean. All rights reserved.
              <Link href="/privacy" className="ml-4 hover:text-blue-400">Privacy Policy</Link>
              <Link href="/terms" className="ml-4 hover:text-blue-400">Terms of Service</Link>
            </div>
            
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <motion.button
     
        className="fixed bottom-8 right-8 z-50 p-3 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors shadow-xl backdrop-blur-sm"
        aria-label="Back to top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}