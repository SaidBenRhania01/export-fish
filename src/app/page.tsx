"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { GlobeAltIcon, TruckIcon, ScaleIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Premium <span className="text-blue-600">Seafood Export</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Delivering the finest, sustainably sourced seafood worldwide with unmatched quality, freshness, and reliable logistics.
            </p>
            <div className="mb-16 overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <Image 
                src="/images/ocean.jpeg"
                alt="Fresh fish harvest"
                width={1600}
                height={900}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GlobeAltIcon,
                title: "Worldwide Export",
                text: "Door-to-door delivery to 50+ countries"
              },
              {
                icon: TruckIcon,
                title: "Fast Logistics",
                text: "Temperature-controlled shipping"
              },
              {
                icon: ScaleIcon,
                title: "Quality Assurance",
                text: "ISO-certified processing facilities"
              },
              {
                icon: CheckBadgeIcon,
                title: "Certified Sustainable",
                text: "MSC-certified fishing practices"
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-blue-600 p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Discover Our Premium Seafood Selection!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Explore our high-quality, sustainably sourced seafood products tailored for global markets.
            </p>
            <Link 
              href="/products" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 transform hover:bg-blue-50 hover:scale-105"
            >
              Our Products
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
