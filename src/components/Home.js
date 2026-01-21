import React from "react";
import { motion } from "framer-motion";
import Layout from "./Layout/Layout";
import IMGHERO from "../assets/Home3.jpg";
import Program from "./Program";

const Home = () => {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={IMGHERO}
          alt="Temple Background"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#ff9d00]/30"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl text-[#ffd27f] tracking-wide">
            Welcome to RKGVK
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-100 max-w-2xl mx-auto">
            A Divine Space for Spiritual Awakening and Community Service
          </p>
          <div className="mt-8">
            <a
              href="#programs"
              className="bg-gradient-to-r from-[#ff7b00] to-[#6b195a] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Explore Programs
            </a>
          </div>
        </motion.div>
      </section>

      {/* PROGRAM SCHEDULE */}
      <section
        id="programs"
        className="py-20 px-6 bg-gradient-to-b from-[#fff8f0] to-[#ffe3c0]"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-10 text-[#ff7b00] drop-shadow-md">
            🪔 RKGVK Daily Schedule 🪔
          </h2>

          <div className="bg-white border border-orange-200 rounded-3xl shadow-xl p-10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
            <div className="flex flex-col gap-5 text-gray-800 text-lg font-medium">
              <div className="bg-gradient-to-r from-[#fff5e1] to-[#ffd9b5] rounded-xl p-4 shadow-inner">
                <p className="text-[#6b195a] font-semibold text-xl">🌅 Mangal Aroti</p>
                <p>4:30 am to 5:15 am</p>
              </div>
              <div className="bg-gradient-to-r from-[#fff5e1] to-[#ffd9b5] rounded-xl p-4 shadow-inner">
                <p className="text-[#6b195a] font-semibold text-xl">🌇 Gaura Aroti</p>
                <p>8:00 pm to 8:30 pm</p>
              </div>
              <div className="bg-gradient-to-r from-[#fff5e1] to-[#ffd9b5] rounded-xl p-4 shadow-inner">
                <p className="text-[#6b195a] font-semibold text-xl">
                  📖 Monday Bhagavad Gita Class
                </p>
                <p>8:00 pm to 9:00 pm</p>
              </div>
              <div className="bg-gradient-to-r from-[#fff5e1] to-[#ffd9b5] rounded-xl p-4 shadow-inner">
                <p className="text-[#6b195a] font-semibold text-xl">
                  🎓 Free Coaching Classes (Class 1–8)
                </p>
                <p>3:00 pm to 5:00 pm</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROGRAM COMPONENT */}
      <Program />
    </Layout>
  );
};

export default Home;
