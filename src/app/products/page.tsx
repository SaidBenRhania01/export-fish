'use client'

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Bouzroug", category: "frozen", price: 40, image: "/images/fresh_fish/bouzroug.jpeg", proteinPer100g: 20, caloriesPer100g: 100 },
  { id: 2, name: "Calamar", category: "frozen", price: 90, image: "/images/fresh_fish/calamar.jpeg", proteinPer100g: 18, caloriesPer100g: 95 },
  { id: 3, name: "Crevettes", category: "frozen", price: 70, image: "/images/fresh_fish/Crevettes.jpeg", proteinPer100g: 24, caloriesPer100g: 80 },
  { id: 4, name: "Dorade", category: "frozen", price: 50, image: "/images/fresh_fish/Dorade.jpeg", proteinPer100g: 23, caloriesPer100g: 110 },
  { id: 5, name: "Dried Mackerel", category: "dried", price: 20, image: "/images/dried_fish/DriedMackarel.jpg", proteinPer100g: 30, caloriesPer100g: 150 },
  { id: 6, name: "Dried Sardine", category: "dried", price: 15, image: "/images/dried_fish/DriedSardine.png", proteinPer100g: 25, caloriesPer100g: 120 },
  { id: 7, name: "Mackerel", category: "frozen", price: 10, image: "/images/fresh_fish/Mackerel.jpg", proteinPer100g: 22, caloriesPer100g: 135 },
  { id: 8, name: "Merlin", category: "frozen", price: 80, image: "/images/fresh_fish/Merlin.jpeg", proteinPer100g: 26, caloriesPer100g: 110 },
  { id: 9, name: "Pageot", category: "frozen", price: 100, image: "/images/fresh_fish/Pageot.jpeg", proteinPer100g: 21, caloriesPer100g: 115 },
  { id: 10, name: "Raie", category: "frozen", price: 35, image: "/images/fresh_fish/raie.jpeg", proteinPer100g: 28, caloriesPer100g: 90 },
  { id: 11, name: "Sardine", category: "frozen", price: 10, image: "/images/fresh_fish/Sardine.jpeg", proteinPer100g: 20, caloriesPer100g: 140 },
  { id: 12, name: "Sole", category: "frozen", price: 60, image: "/images/fresh_fish/Sole.jpeg", proteinPer100g: 30, caloriesPer100g: 110 },
  { id: 13, name: "Sabre", category: "frozen", price: 50, image: "/images/fresh_fish/Sabre.png", proteinPer100g: 25, caloriesPer100g: 120 },
  { id: 14, name: "Dried Crevette", category: "dried", price: 90, image: "/images/dried_fish/DriedCrevette.jpg", proteinPer100g: 32, caloriesPer100g: 170 },
  { id: 15, name: "Bacalao", category: "dried", price: 80, image: "/images/dried_fish/Bacalao.png", proteinPer100g: 35, caloriesPer100g: 150 },
  { id: 16, name: "Dried Anchovies", category: "dried", price: 25, image: "/images/dried_fish/DriedAnchovies.jpg", proteinPer100g: 40, caloriesPer100g: 160 },
  { id: 17, name: "Dried Calamar", category: "dried", price: 100, image: "/images/dried_fish/DriedCalamar.jpg", proteinPer100g: 28, caloriesPer100g: 130 },
  { id: 18, name: "Dried Sole", category: "dried", price: 100, image: "/images/dried_fish/DriedSole.png", proteinPer100g: 35, caloriesPer100g: 200 },
  { id: 19, name: "Anchovies", category: "frozen", price: 15, image: "/images/fresh_fish/Anchovies.jpg", proteinPer100g: 22, caloriesPer100g: 120 },
  { id: 20, name: "Smoked Salmon", category: "smoked", price: 300, image: "/images/smoked_fish/Salamon.jpg", proteinPer100g: 25, caloriesPer100g: 200 },
  { id: 21, name: "Smoked Anchovies", category: "smoked", price: 30, image: "/images/smoked_fish/SmokedAnchovies.png", proteinPer100g: 30, caloriesPer100g: 180 },
  { id: 22, name: "Smoked Mackerel", category: "smoked", price: 25, image: "/images/smoked_fish/SmokedMackerel.jpg", proteinPer100g: 28, caloriesPer100g: 160 },
  { id: 23, name: "Smoked Sardine", category: "smoked", price: 25, image: "/images/smoked_fish/SmokedSardine.png", proteinPer100g: 24, caloriesPer100g: 140 },
];


export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(300);

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || product.category === category) &&
      product.price <= price
    );
  });

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "frozen":
        return "Frozen Fish";
      case "dried":
        return "Dried Fish";
      case "smoked":
        return "Smoked Fish";
      default:
        return "Unknown";
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-teal-700 to-blue-800 py-10">
        <div className="p-6 max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Our Exquisite Seafood Selection
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/3 p-3 rounded-lg bg-teal-600 border border-teal-500 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              title="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full md:w-1/4 p-3 rounded-lg bg-teal-600 border border-teal-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="frozen">Frozen Fish</option>
              <option value="dried">Dried Fish</option>
              <option value="smoked">Smoked Fish</option>
            </select>
            <div className="w-full md:w-1/4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">Max Price:</span>
                <span className="text-yellow-300 font-semibold">{price} DH</span>
              </div>
              <input
                title="Price"
                type="range"
                min="0"
                max="300"
                step="5"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-teal-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div key={product.id} whileHover={{ scale: 1.03 }}>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden p-4">
                  <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">{product.name}</h2>
                  <p className="text-md text-teal-300 mt-1">
                    Category: <span className="font-medium">{getCategoryLabel(product.category)}</span>
                  </p>
                  <p className="text-xl font-bold text-yellow-300 mt-2">{product.price} Dh/Kg</p>
                  <p className="text-md text-teal-200 mt-2">
                    Protein: {product.proteinPer100g}g | Calories: {product.caloriesPer100g} kcal
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
