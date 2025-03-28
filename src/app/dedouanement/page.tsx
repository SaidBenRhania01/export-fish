"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import {
  FiAnchor,
  FiGlobe,
  FiShield,
  FiClock,
  FiCheckCircle,
  FiMessageSquare,
} from "react-icons/fi";

export default function Dedouanement() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-b from-blue-900 to-indigo-900">
        <Image
          src="/images/ocean-care.jpeg"
          alt="Ocean Care"
          fill
          className="object-cover opacity-40"
          priority
          quality={100}
        />
        <div className="relative z-20 flex h-full items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Maritime Excellence
              </span>
              <br />
              in Global Seafood Logistics
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light">
              Navigating international waters of seafood export with precision and regulatory expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: <FiAnchor className="w-8 h-8 text-white" />,
                title: "Precision Logistics",
                description: "Blockchain-tracked shipments from ocean to destination",
                bg: "bg-teal-600"
              },
              {
                icon: <FiGlobe className="w-8 h-8 text-white" />,
                title: "Global Compliance",
                description: "150+ countries with localized customs expertise",
                bg: "bg-blue-600"
              },
              {
                icon: <FiShield className="w-8 h-8 text-white" />,
                title: "Quality Assurance",
                description: "HACCP-certified cold chain management",
                bg: "bg-teal-600"
              },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${feature.bg} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="p-8 relative">
                  <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/ocean22.jpeg"
                alt="Cargo inspection"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                quality={90}
              />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-500 font-semibold mb-4">SUSTAINABLE LOGISTICS</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Eco-Conscious Maritime Solutions
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Our hybrid fleet utilizes AI-optimized routing to reduce emissions by 45% while maintaining 
                  industry-leading delivery speeds.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "25+", label: "Years Expertise" },
                    { value: "98.7%", label: "On-Time Delivery" },
                    { value: "40%", label: "Emission Reduction" },
                    { value: "150+", label: "Global Ports" }
                  ].map((stat, index) => (
                    <div key={index} className="p-4 bg-blue-50 rounded-xl text-center">
                      <div className="text-2xl font-bold text-teal-600">{stat.value}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-Width Statement - Enhanced */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/ocean-care.jpeg"
            alt="Background texture"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-4xl px-4 text-center relative">
          <FiMessageSquare className="text-4xl text-teal-400 mx-auto mb-8" />
          <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed">
            “In the relentless current of global trade, we anchor reliability - delivering perfection across 
            every nautical mile of your seafood supply chain.”
          </blockquote>
        </div>
      </section>

      {/* Image Gallery - Enhanced */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-gray-100">
        {["ocean-care.jpeg", "ocean22.jpeg", "costums.jpeg"].map((img, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="group relative aspect-square overflow-hidden"
          >
            <Image
              src={`/images/${img}`}
              alt="Gallery Image"
              fill
              className="object-cover transform transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-medium text-lg">
                {img.replace('.jpeg', '').replace('-', ' ')}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Customs Clearance Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-500 font-semibold mb-4">CUSTOMS EXPERTISE</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Seamless Border Transition
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full Compliance Assurance</h3>
                    <p className="text-gray-600">
                      Automated documentation processing with real-time regulatory updates across 50+ jurisdictions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiClock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Clearance Monitoring</h3>
                    <p className="text-gray-600">
                      Live shipment status updates with predictive delay prevention systems
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative aspect-video rounded-3xl shadow-2xl overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/clearance.jpeg"
                alt="Customs Clearance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                quality={90}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
