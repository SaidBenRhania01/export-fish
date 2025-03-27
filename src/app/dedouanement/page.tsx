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

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-white">
        <Image
          src="/images/ocean-care.jpeg"
          alt="Ocean Care"
          fill
          className="object-cover z-0 opacity-80"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-blue-100/50 z-10" />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg"
          >
            Maritime Excellence
          </motion.h1>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: "Precision Logistics",
                description: "Advanced tracking systems ensuring seamless global operations",
                bgColor: "bg-blue-700",
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Global Network",
                description: "150+ ports worldwide with real-time monitoring",
                bgColor: "bg-teal-700",
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Certified Safety",
                description: "ISO 9001 certified quality management systems",
                bgColor: "bg-blue-700",
              },
            ].map((feature, index) => (
              <div key={index} className="rounded-xl bg-gray-50 p-6 shadow-md hover:shadow-xl transition-all">
                <div className={`mb-4 h-12 w-12 rounded-full ${feature.bgColor} flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-blue-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section with Image */}
      <section className="py-20 bg-gradient-to-r from-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-700">
              <Image
                src="/images/ocean22.jpeg"
                alt="Cargo inspection"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Sustainable Maritime Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Leveraging cutting-edge technology to deliver environmentally conscious logistics services.
                Our hybrid fleet reduces emissions by 40% compared to industry standards.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-bold text-teal-600">25+</div>
                  <div className="mt-1 text-gray-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">98.7%</div>
                  <div className="mt-1 text-gray-500">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Statement */}
      <div className="py-20 bg-blue-900">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <blockquote className="text-3xl font-light italic">
            “In a world of constant motion, we deliver unwavering reliability across every ocean and border.”
          </blockquote>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-3 bg-white">
        {["ocean-care.jpeg", "ocean22.jpeg", "costums.jpeg"].map((img, index) => (
          <div key={index} className="group relative aspect-square overflow-hidden rounded-xl hover:scale-105 transition-transform duration-700">
            <Image
              src={`/images/${img}`}
              alt="Gallery Image"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Customs Clearance Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden rounded-2xl shadow-lg"
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
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Streamlined Customs Clearance
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Navigating complex customs regulations with precision and efficiency. Our experts handle all documentation, tariffs, and compliance requirements to ensure smooth border transitions.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-blue-900">Automated Documentation</h3>
                    <p className="text-gray-600">Digital processing with real-time tracking updates</p>
                  </div>
                </div>
                {/* Additional content can be added here */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
