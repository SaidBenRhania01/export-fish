"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('./map'), {
  ssr: false
})
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Fix leaflet marker icons
export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-28">
        <div className="absolute inset-0">
        
        </div>
        <div className="container mx-auto px-4 relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Let&apos;s Connect
          </motion.h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Whether you&apos;re looking to partner with us or have questions about
            our services, our team is ready to assist.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8" data-aos="fade-right">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <MapPinIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Headquarters
                      </h3>
                      <p className="text-gray-600">
                        123 Ocean Drive
                        <br />
                        Marine City, MC 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <PhoneIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Phone Numbers
                      </h3>
                      <p className="text-gray-600">
                        Sales:{" "}
                        <a
                          href="tel:+11234567890"
                          className="text-blue-600 hover:underline"
                        >
                          +1 (123) 456-7890
                        </a>
                        <br />
                        Support:{" "}
                        <a
                          href="tel:+19876543210"
                          className="text-blue-600 hover:underline"
                        >
                          +1 (987) 654-3210
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:info@seafoodexport.com"
                          className="text-blue-600 hover:underline"
                        >
                          info@seafoodexport.com
                        </a>
                        <br />
                        <a
                          href="mailto:sales@seafoodexport.com"
                          className="text-blue-600 hover:underline"
                        >
                          sales@seafoodexport.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <ClockIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Mon-Fri: 8:00 AM - 6:00 PM EST
                        <br />
                        Sat: 9:00 AM - 2:00 PM EST
                        <br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Global Offices
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Oslo, Norway", "Tokyo, Japan", "Sydney, Australia", "Dubai, UAE"].map(
                    (office, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">{office}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form & Map */}
            <div className="space-y-8" data-aos="fade-left">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Send a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option>Sales Inquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>Technical Support</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>

              <div className="h-96 rounded-2xl shadow-lg overflow-hidden">
  <Map position={[51.505, -0.09]} />
</div>
            </div>
          </div>
        </div>
      </section>

     
      <Footer />
    </div>
  );
}
