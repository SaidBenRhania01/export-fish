"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GlobeAltIcon, UsersIcon, ChartBarIcon, HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

//   const teamMembers = [
//     { name: "John Carter", role: "CEO", image: "/team/ceo.jpeg" },
//     { name: "Sophie Moore", role: "CFO", image: "/team/cfo.jpg" },
//     { name: "Alex Chen", role: "COO", image: "/team/coo.jpg" },
//     { name: "Maria Lopez", role: "CSO", image: "/team/cso.jpg" },
//   ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <Navbar/>
      {/* Hero Section */}
      <section className="relative py-28 bg-blue-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/ocean_bg.jpg"
            alt="About us"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Pioneering Sustainable Seafood
          </motion.h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            For over two decades, we&apos;ve connected ocean harvests to global markets with integrity and innovation.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/ocean.jpeg"
              alt="Company history"
              fill
              className="object-cover"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2001, we began as a small family-operated fishery. Today, we&apos;re a global leader in sustainable
              seafood exports, serving 150+ countries while maintaining our commitment to ocean conservation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">2001</div>
                <div className="text-gray-600">Established</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
                <div className="text-gray-600">Annual Shipments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GlobeAltIcon,
                title: "Sustainability",
                text: "MSC-certified fishing practices and ocean conservation"
              },
              {
                icon: UsersIcon,
                title: "Integrity",
                text: "Ethical business practices and transparency"
              },
              {
                icon: ChartBarIcon,
                title: "Excellence",
                text: "Quality assurance at every stage of operations"
              },
              {
                icon: HeartIcon,
                title: "Community",
                text: "Supporting coastal communities worldwide"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors"
                data-aos="zoom-in"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                data-aos="fade-up"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Sustainable Journey</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with us to deliver quality seafood while protecting marine ecosystems for future generations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
          >
            <Link href={"/contact"}>Become a Partner</Link>
          </motion.button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}