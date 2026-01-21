import React, { useState } from "react";
import Layout from "./Layout/Layout";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrPrevious, GrNext } from "react-icons/gr";
import { categories } from "./Data";

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = categories
    .filter(
      (cat) =>
        cat.year === selectedYear &&
        (selectedCategory === "All" || cat.name === selectedCategory)
    )
    .flatMap((cat) => cat.images);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.indexOf(selectedImage);
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = filteredImages.length - 1;
    if (newIndex >= filteredImages.length) newIndex = 0;
    setSelectedImage(filteredImages[newIndex]);
  };

  const categoryNames = Array.from(
    new Set(
      categories
        .filter((cat) => cat.year === selectedYear)
        .map((cat) => cat.name)
    )
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-[#fff5e6] via-[#fff1dc] to-[#ffe6cc] px-6 py-12">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#6b195a]">
          📸 <span className="text-[#f56a01]">Event Gallery</span>
        </h2>

        {/* Year Dropdown */}
        <div className="flex justify-center mb-6">
          <div className="relative inline-block w-48">
            <select
              value={selectedYear}
              onChange={(e) => {
                const newYear = e.target.value;
                const categoryExists = categories.some(
                  (cat) => cat.year === newYear && cat.name === selectedCategory
                );
                setSelectedYear(newYear);
                setSelectedCategory(categoryExists ? selectedCategory : "All");
                closeImage();
              }}
              className="appearance-none w-full bg-gradient-to-r from-[#6b195a] via-[#8b1e6f] to-[#f56a01]
                 text-white font-semibold px-6 py-3 rounded-full shadow-lg border-2 border-[#ffd27f] 
                 focus:outline-none focus:ring-4 focus:ring-[#ffd27f]/50 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
            {/* Custom Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-5 h-5 text-[#ffd27f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-5 py-2 rounded-full font-semibold shadow-md transition-all ${
              selectedCategory === "All"
                ? "bg-gradient-to-r from-[#6b195a] to-[#f56a01] text-white shadow-lg scale-105"
                : "bg-white text-[#6b195a] border border-[#f56a01] hover:bg-[#fef3e6]"
            }`}
          >
            All
          </button>

          {categoryNames.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold transition-all shadow-md ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#6b195a] to-[#f56a01] text-white shadow-lg scale-105"
                  : "bg-white text-[#6b195a] border border-[#f56a01] hover:bg-[#fff6ec]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white transition-transform duration-300 hover:scale-105 border border-[#f56a01]/20"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-56 object-cover cursor-pointer transition-transform duration-500 hover:scale-110"
                onClick={() => openImage(image)}
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm transition-all duration-300">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-[#f56a01]/70"
              />
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-white text-4xl bg-black/40 hover:bg-black/70 rounded-full p-1 transition-all"
                onClick={closeImage}
              >
                <AiOutlineCloseCircle className="text-[#ffd27f]" />
              </button>
              {/* Next Button */}
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-5xl p-2 bg-black/30 hover:bg-black/60 rounded-l-md"
                onClick={() => navigateImage(1)}
              >
                <GrNext className="text-[#ffd27f]" />
              </button>
              {/* Previous Button */}
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-5xl p-2 bg-black/30 hover:bg-black/60 rounded-r-md"
                onClick={() => navigateImage(-1)}
              >
                <GrPrevious className="text-[#ffd27f]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
