"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { GlobeAltIcon, TruckIcon, ScaleIcon, CheckBadgeIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
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

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ocean_bg.jpg"
              alt="Ocean harvest"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-600/40" />
          </div>
          
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Ocean to Table,<br />
                <span className="text-blue-300">Globally Delivered</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
                Connecting premium seafood sources with global markets through sustainable practices and cutting-edge logistics
              </p>
              <div className="flex gap-4 justify-center">
                <Link 
                  href="/products"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Products
                </Link>
                <Link 
                  href="/about"
                  className="border-2 border-white hover:border-blue-300 text-white hover:text-blue-300 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <ArrowDownIcon className="h-8 w-8 text-white" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6" data-aos="fade-up">
              <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Global Partners</div>
            </div>
            <div className="p-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-5xl font-bold text-blue-600 mb-2">40K+</div>
              <div className="text-gray-600">Annual Shipments</div>
            </div>
            <div className="p-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Quality Assurance</div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
                Why Choose Us?
              </h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Delivering excellence through every step of the seafood supply chain
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: GlobeAltIcon,
                  title: "Global Network",
                  text: "150+ countries served with optimized logistics routes"
                },
                {
                  icon: ScaleIcon,
                  title: "Quality Certified",
                  text: "ISO 22000, HACCP, and BRC Global Standards"
                },
                {
                  icon: TruckIcon,
                  title: "Cold Chain Mastery",
                  text: "Real-time temperature monitoring & control"
                },
                {
                  icon: CheckBadgeIcon,
                  title: "Sustainable Sourcing",
                  text: "MSC & ASC certified responsible fishing"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
                Premium Seafood Selection
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Discover our carefully curated range of ocean-fresh products
              </p>
            </div>

           
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg" data-aos="flip-up" data-aos-delay="0">
                <Image
                  src="/images/fresh_fish/calamar.jpeg"
                  alt="Calamar"
                  width={600}
                  height={400}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Calamar</h3>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl shadow-lg" data-aos="flip-up" data-aos-delay="150">
                <Image
                  src="/images/fresh_fish/Crevettes.jpeg"
                  alt="Crevette"
                  width={600}
                  height={400}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Crevette</h3>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl shadow-lg" data-aos="flip-up" data-aos-delay="300">
                <Image
                  src="/images/fresh_fish/Sardine.jpeg"
                  alt="Sardine"
                  width={600}
                  height={400}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Sardine</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Parallax */}
        {/* <section className="relative py-32 bg-fixed bg-cover bg-center" style={{backgroundImage: "url('/images/fish-net.jpg')"}}>
          <div className="absolute inset-0 bg-blue-900/80" />
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
                Trusted & Certified
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 items-center">
              {['msc', 'asc', 'iso', 'brc'].map((cert, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={`/certifications/${cert}.png`}
                    alt={cert.toUpperCase()}
                    width={200}
                    height={200}
                    className="object-contain h-24 mx-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12" data-aos="zoom-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Ocean Source?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied partners worldwide in delivering premium seafood to your market
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
                >
                  Request Quote
                </Link>
                {/* <Link 
                  href="/sustainability"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
                >
                  Sustainability Pledge
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Global Partners Trust Us
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div 
                  key={index}
                  className="p-8 bg-gray-50 rounded-xl border border-gray-200"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">JD</span>
                    </div>
                    <div>
                      <div className="font-semibold">John Doe</div>
                      <div className="text-sm text-gray-500">Procurement Manager</div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    &apos;The consistency in quality and reliability of delivery has made them our primary seafood partner for over 5 years.&apos;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}