import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Production() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-teal-200 text-gray-900">
      <Navbar />

      {/* Section 1: Dried Fish */}
      <div className="container mx-auto py-20 px-6 md:px-16 bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
          Preparing for Dried Fish
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition duration-700 ease-in-out">
            <Image
              src="/images/dried.jpg"
              alt="Drying Process 1"
              width={1400}
              height={800}
              className="object-cover w-full h-full rounded-xl shadow-md"
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition duration-700 ease-in-out">
            <Image
              src="/images/dried2.jpg"
              alt="Drying Process 2"
              width={1400}
              height={800}
              className="object-cover w-full h-full rounded-xl shadow-md"
            />
          </div>
        </div>

        <div className="mt-14 text-lg leading-relaxed max-w-3xl mx-auto text-gray-700 font-sans">
          <p>
            <span className="font-semibold text-indigo-600 text-xl">Dried Fish:</span> Fish undergoes a meticulous cleaning process before being dried using either natural sunlight or advanced mechanical drying techniques. This process preserves the fish’s nutritional integrity, prolongs its shelf life, and mitigates bacterial growth. Dried fish is lightweight, easily transportable, and commonly used in a wide array of culinary dishes, from gourmet meals to everyday snacks.
          </p>
        </div>
      </div>

      {/* Section 2: Fresh and Chilled Fish */}
      <div className="container mx-auto py-20 px-6 md:px-16 bg-gradient-to-r from-teal-50 via-blue-50 to-indigo-50 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out mt-16">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-500">
          Preparing for Fresh and Chilled Fish
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition duration-700 ease-in-out">
            <Image
              src="/images/fresh.png"
              alt="Fresh Fish Storage 1"
              width={1400}
              height={800}
              className="object-cover w-full h-full rounded-xl shadow-md"
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition duration-700 ease-in-out">
            <Image
              src="/images/service8.jpg"
              alt="Fresh Fish Storage 2"
              width={1400}
              height={800}
              className="object-cover w-full h-full rounded-xl shadow-md"
            />
          </div>
        </div>

        <div className="mt-14 text-lg leading-relaxed max-w-3xl mx-auto text-gray-700 font-sans">
          <p>
            <span className="font-semibold text-teal-600 text-xl">Fresh and Chilled Fish:</span> Our fish is meticulously stored at optimal temperatures throughout the entire supply chain, starting from the moment it&apos;s caught. Advanced refrigeration techniques and storage systems ensure maximum freshness and preserve the fish’s nutritional value. By maintaining a consistent low temperature, we minimize bacterial growth, oxidation, and degradation, guaranteeing that only premium-quality products reach you.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
