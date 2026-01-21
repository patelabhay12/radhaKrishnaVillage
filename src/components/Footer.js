import React from "react";
import {
  FaSearchLocation,
  FaWhatsapp,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#6b195a] via-[#7f2170] to-[#ff7b00] text-white relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none"></div>

      {/* Top Section */}
      <div className="relative z-10 px-6 lg:px-16 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* ABOUT */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-[#ffd27f] text-2xl font-bold mb-4">
            About Radha Krishna Gram Vikas Kendra
          </h3>
          <p className="text-orange-50 leading-7">
            Radha Krishna Gram Vikas Kendra is a society devoted to spreading
            education, culture, and the divine teachings of Srimad Bhagavad Gita
            under the guidance of the Brahma-Madhva-Gaudiya Sampradaya (ISKCON).
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-[#ffd27f] text-2xl font-bold mb-4">
            Connect With Us
          </h3>
          <div className="flex gap-8 mt-4">
            <Link
              to="https://chat.whatsapp.com/EAob3SvLrMRB9VYm48iPtf"
              target="_blank"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaWhatsapp className="text-4xl text-[#F56A01] hover:text-[#ffd27f]" />
            </Link>
            <Link
              to="https://t.me/+iaFiUK6gqso1YzU1"
              target="_blank"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaTelegram className="text-4xl text-[#F56A01] hover:text-[#ffd27f]" />
            </Link>
            <Link
              to="https://www.youtube.com/@ssgdnhk"
              target="_blank"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaYoutube className="text-4xl text-[#F56A01] hover:text-[#ffd27f]" />
            </Link>
          </div>
          <p className="mt-5 text-orange-100 font-medium italic">
            “Stay connected, stay blessed.”
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-[#ffd27f] text-2xl font-bold mb-4">Contact Us</h3>
          <div className="flex flex-col gap-5 text-left">
            <div className="flex gap-3 items-start">
              <FaSearchLocation className="text-2xl text-[#ffd27f]" />
              <p className="text-orange-100 leading-6">
                Jaipalpur (Chaka), Mungra Badshahpur, <br />
                Jaunpur, U.P — 222202
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <BsTelephoneFill className="text-xl text-[#ffd27f]" />
              <p className="text-orange-100">+91-7042109297, +91-7525858518</p>
            </div>
            <div className="flex gap-3 items-center">
              <MdEmail className="text-xl text-[#ffd27f]" />
              <Link
                to="mailto:radhakrishnagramvikaskendra@gmail.com"
                className="text-orange-100 hover:text-[#ffd27f] transition-colors"
              >
                radhakrishnagramvikaskendra@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/30 mx-10"></div>

      {/* Bottom Section */}
      <div className="relative z-10 py-5 bg-[#F56A01]/90 text-center">
        <p className="text-white text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Radha Krishna Gram Vikas Kendra</span>{" "}
          — All Rights Reserved.
        </p>
        <p className="text-white text-sm mt-2 italic tracking-wide">
          जय श्री कृष्णा 🙏 | Hare Krishna 🌸
        </p>
      </div>
    </footer>
  );
};

export default Footer;
