import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Connecting ocean harvests to global markets with unmatched quality and reliability
            </p>
            
            <div className="mb-16 shadow-2xl rounded-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={index} className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-3 text-gray-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="bg-blue-600 rounded-2xl p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Expand Your Market?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your seafood export needs
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}