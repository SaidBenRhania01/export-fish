import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Production() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-cyan-100 to-blue-50 text-gray-900">
      <Navbar />

      {/* Section 1: Dried Fish */}
      <div className="container mx-auto py-20 px-6 md:px-16 bg-white/90 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition duration-500 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-teal-500">
          Preparing for Dried Fish
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {["/images/dried.jpg", "/images/dried2.jpg"].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition duration-700 ease-in-out">
              <Image src={src} alt={`Drying Process ${index + 1}`} width={1400} height={800} className="object-cover w-full h-full rounded-xl shadow-md" />
            </div>
          ))}
        </div>

        <div className="mt-14 text-lg leading-relaxed max-w-3xl mx-auto text-gray-700 font-sans">
          <p>
            <span className="font-semibold text-blue-700 text-xl">Dried Fish:</span> Fish undergoes a meticulous cleaning process before being dried using either natural sunlight or advanced mechanical drying techniques. This process preserves the fish’s nutritional integrity, prolongs its shelf life, and mitigates bacterial growth.
          </p>
        </div>
      </div>

      {/* Section 2: Fresh and Chilled Fish */}
      <div className="container mx-auto py-20 px-6 md:px-16 bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition duration-500 ease-in-out mt-16">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-blue-700">
          Preparing for Fresh and Chilled Fish
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {["/images/fresh.png", "/images/service8.jpg"].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition duration-700 ease-in-out">
              <Image src={src} alt={`Fresh Fish Storage ${index + 1}`} width={1400} height={800} className="object-cover w-full h-full rounded-xl shadow-md" />
            </div>
          ))}
        </div>

        <div className="mt-14 text-lg leading-relaxed max-w-3xl mx-auto text-gray-700 font-sans">
          <p>
            <span className="font-semibold text-teal-700 text-xl">Fresh and Chilled Fish:</span> Our fish is meticulously stored at optimal temperatures throughout the entire supply chain, ensuring maximum freshness and premium quality.
          </p>
        </div>
      </div>

      {/* Section 3: Smoked Fish */}
      <div className="container mx-auto py-20 px-6 md:px-16 bg-white/90 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition duration-500 ease-in-out mt-16">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
          Preparing for Smoked Fish
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {["/images/smoked1.jpg", "/images/smoked2.png"].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition duration-700 ease-in-out">
              <Image src={src} alt={`Smoked Fish Process ${index + 1}`} width={1400} height={800} className="object-cover w-full h-full rounded-xl shadow-md" />
            </div>
          ))}
        </div>

        <div className="mt-14 text-lg leading-relaxed max-w-3xl mx-auto text-gray-700 font-sans">
          <p>
            <span className="font-semibold text-orange-700 text-xl">Smoked Fish:</span> Our carefully selected fish undergoes a traditional smoking process using premium wood, enhancing its rich flavor and extending shelf life. This technique locks in natural oils, resulting in a deep, savory taste.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
