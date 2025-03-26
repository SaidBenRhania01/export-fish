"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Dedouanement() {
  return (
    <>
      <Navbar />

      {/* Hero Section with Animated Gradient */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/80 to-indigo-500/30" />
        <Image
          src="/images/ocean-care.jpeg"
          alt="Ocean Care"
          fill
          className="object-cover z-0"
          priority
          quality={80}
        />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-blue-300 md:text-7xl lg:text-8xl"
          >
            Maritime Excellence
          </motion.h1>
        </div>
      </div>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-6 h-12 w-12 rounded-lg bg-blue-600 p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-blue-900">Precision Logistics</h3>
              <p className="text-slate-600">Advanced tracking systems ensuring seamless global operations</p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-6 h-12 w-12 rounded-lg bg-indigo-600 p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-blue-900">Global Network</h3>
              <p className="text-slate-600">150+ ports worldwide with real-time monitoring</p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-6 h-12 w-12 rounded-lg bg-indigo-600 p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-blue-900">Certified Safety</h3>
              <p className="text-slate-600">ISO 9001 certified quality management systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Image */}
      <section className="py-24 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/ocean22.jpeg"
                alt="Cargo inspection"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-900 md:text-5xl">
                Sustainable Maritime Solutions
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Leveraging cutting-edge technology to deliver environmentally conscious
                logistics services. Our hybrid fleet reduces emissions by 40% compared
                to industry standards.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-indigo-600">25+</div>
                  <div className="mt-2 text-slate-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">98.7%</div>
                  <div className="mt-2 text-slate-500">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Statement */}
      <div className="bg-blue-600 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
          <blockquote className="text-3xl font-light italic md:text-4xl">
            “In a world of constant motion, we deliver unwavering reliability across
            every ocean and border.”
          </blockquote>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3 bg-gray-200">
        <div className="group relative aspect-square overflow-hidden rounded-xl">
          <Image
            src="/images/ocean-care.jpeg"
            alt="Container ship"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="group relative aspect-square overflow-hidden rounded-xl">
          <Image
            src="/images/ocean22.jpeg"
            alt="Port operations"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="group relative aspect-square overflow-hidden rounded-xl">
          <Image
            src="/images/costums.jpeg"
            alt="Cargo inspection"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      {/* Customs Clearance Section */}
<section className="py-24 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl"
      >
        <Image
          src="/images/clearance.jpeg"
          alt="Customs Clearance"
          fill
          className="object-cover"
          quality={85}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-blue-900 md:text-5xl">
          Streamlined Customs Clearance
        </h2>
        <p className="mt-6 text-lg text-slate-600">
          Navigating complex customs regulations with precision and efficiency. Our experts handle all documentation, 
          tariffs, and compliance requirements to ensure smooth border transitions.
        </p>
        
        <div className="mt-8 space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Automated Documentation</h3>
              <p className="mt-1 text-gray-600">Digital processing with real-time tracking updates</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Global Compliance</h3>
              <p className="mt-1 text-gray-600">Up-to-date knowledge of 150+ countries' regulations</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Expedited Processing</h3>
              <p className="mt-1 text-gray-600">Average clearance time 38% faster than industry standard</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      <Footer />
    </>
  );
}
