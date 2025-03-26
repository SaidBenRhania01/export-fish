import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Shipment() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-purple-100">
      {/* Navbar at top */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Services */}
          {[
            { id: 1, img: "/images/service4.jpg", title: "Delivered Directly", description: "Enjoy fresh seafood delivered directly to your home! Our home delivery service ensures fast and safe transportation, keeping your fish fresh and ready to cook." },
            { id: 2, img: "/images/ocean-care2.jpeg", title: "Carefully Prepared", description: "Our fish are carefully prepared for export. Fresh fish are kept at optimal temperatures to maintain their freshness, while dried fish undergo advanced drying techniques for long-term preservation." },
            { id: 3, img: "/images/service33.jpg", title: "Fresh & Dried Fish", description: "We specialize in exporting fresh and dried fish worldwide, ensuring top quality and compliance with international health standards." },
            { id: 4, img: "/images/air.jpeg", title: "Reliable Shipping Services", description: "We offer reliable shipping services by sea, air, and land, ensuring that our fish products reach their destinations quickly and in perfect condition." },
            { id: 5, img: "/images/img1.jpg", title: "Customs Clearance Procedures", description: "We handle all customs clearance procedures to guarantee smooth transit through borders, complying with both local and international regulations." },
            { id: 6, img: "/images/fish.jpg", title: "High-Quality Seafood", description: "Our services include bulk fish exports for wholesalers, supermarkets, and restaurants, ensuring a steady supply of high-quality seafood." }
          ].map(service => (
            <div key={service.id} className="relative rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 bg-white overflow-hidden">
              {/* Image container */}
              <div className="relative w-full h-64">
                <Image
                  src={service.img}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-3xl font-extrabold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-lg text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
