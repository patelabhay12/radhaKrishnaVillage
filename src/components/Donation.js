import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartHandshake, Banknote, Smartphone, Gift } from "lucide-react";
import QRCODE from "../assets/QRCode.jpg";

const Donation = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#6b195a] via-[#8e276d] to-[#ff7b00] py-20 text-white overflow-hidden">
      {/* Soft glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Help with a Contribution of Your Choice
        </h2>
        <p className="text-lg text-orange-100 max-w-2xl mb-14">
          Your kind donation supports our spiritual and community initiatives —
          every contribution makes a difference. 🙏
        </p>

        {/* Donation Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Bank Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl text-left border border-white/20"
          >
            <div className="flex items-center gap-3 mb-5">
              <Banknote size={28} className="text-[#ffd27f]" />
              <h3 className="text-2xl font-semibold text-[#ffd27f]">
                Contribute via Bank (NEFT / RTGS)
              </h3>
            </div>

            <div className="text-base md:text-lg leading-8 text-orange-100">
              <p>
                <span className="font-semibold text-white">BANK NAME:</span>{" "}
                Punjab National Bank
              </p>
              <p>
                <span className="font-semibold text-white">ACCOUNT NAME:</span>{" "}
                Radha Krishna Gram Vikas Kendra
              </p>
              <p>
                <span className="font-semibold text-white">
                  ACCOUNT NUMBER:
                </span>{" "}
                8561002100004221
              </p>
              <p>
                <span className="font-semibold text-white">IFSC CODE:</span>{" "}
                PUNB0856100
              </p>
            </div>
          </motion.div>

          {/* QR Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl text-center border border-white/20 flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-2 mb-3">
              <Smartphone size={26} className="text-[#ffd27f]" />
              <h3 className="text-2xl font-semibold text-[#ffd27f]">
                Donate via QR Code / UPI
              </h3>
            </div>

            <img
              src={QRCODE}
              alt="QR CODE"
              className="h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 object-contain rounded-2xl border-4 border-[#ffd27f]/50 shadow-2xl mb-4 hover:scale-105 transition-transform duration-500"
            />

            <p className="font-semibold text-white text-lg mb-4">
              UPI ID: <span className="text-[#ffd27f]">7985980413m@pnb</span>
            </p>

            <Link
              to="https://tinyurl.com/22c9sfu6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff7b00] to-[#6b195a] px-6 py-3 rounded-full font-bold text-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Gift size={20} /> Pay Now
            </Link>
          </motion.div>
        </div>

        {/* Bottom Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <HeartHandshake size={50} className="text-[#ffd27f]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Donation;
