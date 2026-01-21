import React from "react";
import { motion } from "framer-motion";
import { Sun, Book, Heart, Sparkles, Star } from "lucide-react";

import IMG1 from "../assets/baceweb.jpg";
import IMGM from "../assets/img2.jpg";
import IMGC from "../assets/img10.jpg";
import IMGSB from "../assets/img7.jpg";
import GaurPurnima from "../assets/Gaurpurnima.jpg";
import punyatithi from "../assets/punyatithi.jpg";
import srikrishnajanmastami from "../assets/janmastami.jpg";
import FreeClasses from "../assets/Activity1.jpg";

const programs = [
  { img: IMG1, title: "Mangla Aarti", icon: <Sun size={22} /> },
  { img: IMGM, title: "Gaura Aarti", icon: <Sparkles size={22} /> },
  { img: IMGSB, title: "Sunday BG Class", icon: <Book size={22} /> },
  { img: IMGC, title: "Village SB Class", icon: <Book size={22} /> },
  {
    img: GaurPurnima,
    title: "Gaura Purnima Program",
    icon: <Star size={22} />,
  },
  {
    img: punyatithi,
    title: "Mataji Punyatithi Program",
    icon: <Heart size={22} />,
  },
  {
    img: srikrishnajanmastami,
    title: "Shri Krishna Janmashtami",
    icon: <Sparkles size={22} />,
  },
  {
    img: FreeClasses,
    title: "Free Coaching Classes",
    icon: <Book size={22} />,
  },
];

const Program = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#fff7eb] to-[#ffe6c4]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        {/* Header */}
        <h2 className="text-4xl font-bold text-[#ff7b00] mb-10 drop-shadow-md text-center">
          🪔 RKGVK Programs 🪔
        </h2>

        {/* Grid of Programs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-6">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center text-center rounded-2xl shadow-lg bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden w-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6b195a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 w-full py-3 bg-gradient-to-r from-[#ff7b00] to-[#6b195a] text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-md">
                {item.icon}
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Program;
