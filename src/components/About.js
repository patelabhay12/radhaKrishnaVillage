import React from "react";
import Layout from "./Layout/Layout";
import IMG1 from "../assets/ChakaBace.jpg";
import img2 from "../assets/prabhupada.jpeg";
import GuruMaharaj from "../assets/Guru Maharaj.jpg";
import Program from "./Program";

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-[#fff8f0] via-[#fff3e0] to-[#ffe6cc] text-gray-900">
        {/* Header */}
        <div className="flex justify-center items-center text-center text-3xl font-bold rounded-3xl bg-gradient-to-r from-[#6b195a] to-[#f56a01] m-10 shadow-lg">
          <p className="p-4 text-white tracking-wide">About Us</p>
        </div>

        {/* Welcome Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-6 lg:px-16 py-10">
          <div className="overflow-hidden rounded-2xl shadow-xl max-w-full lg:max-w-[30vw]">
            <img
              src={IMG1}
              alt="Temple Photo"
              className="hover:scale-105 transition-transform duration-700 w-full h-auto object-cover rounded-2xl"
            />
          </div>

          <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-10 shadow-md border-l-4 border-[#f56a01]">
            <h2 className="text-2xl sm:text-3xl text-[#6b195a] font-bold mb-4 text-center lg:text-left">
              Welcome to{" "}
              <span className="text-[#f56a01]">
                Radha Krishna Gram Vikas Kendra
              </span>
            </h2>
            <p className="text-base sm:text-lg leading-7 text-gray-800">
              <span className="font-bold text-[#6b195a]">
                Radha Krishna Gram Vikas Kendra
              </span>{" "}
              is a non-profit initiative founded by Alumni and Working
              Professionals from prestigious institutions like IIT, NIET & MBBS.
              Our mission is to nurture{" "}
              <span className="font-semibold text-[#f56a01]">
                culture, values, and Krishna Consciousness
              </span>{" "}
              among children and their parents, promoting a society rooted in
              love, peace, and spiritual well-being.
            </p>
          </div>
        </div>

        {/* Srila Prabhupada Section */}
        <section className="px-6 lg:px-20 py-10 bg-gradient-to-r from-[#6b195a] via-[#8b1e6f] to-[#f56a01] text-white rounded-t-3xl shadow-lg mt-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            About Srila Prabhupada
          </h2>
          <div className="flex flex-col items-center gap-8">
            <img
              src={img2}
              alt="Srila Prabhupada"
              className="rounded-2xl max-w-[90vw] md:max-w-[70%] lg:max-w-[50%] shadow-2xl border-2 border-[#ffd27f]"
            />
            <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-inner max-w-5xl">
              <p className="text-base sm:text-lg leading-8 text-justify">
                <span className="text-[#ffd27f] font-semibold">
                  His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
                </span>{" "}
                appeared in 1896 in Calcutta, India. He was the beloved disciple
                of{" "}
                <span className="text-[#ffd27f]">
                  Srila Bhaktisiddhanta Sarasvati Gosvami
                </span>{" "}
                and was inspired to spread Vedic knowledge in English. His
                determination led to the founding of the{" "}
                <span className="text-[#ffd27f]">
                  International Society for Krishna Consciousness (ISKCON)
                </span>{" "}
                in 1966, establishing a spiritual revolution across the globe.
                <br />
                <br />
                Srila Prabhupada’s books, teachings, and translations have
                enlightened millions and remain a guiding force in modern
                spiritual life. His tireless dedication to Krishna Consciousness
                created temples, communities, and schools that continue to
                uplift souls worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Guru Maharaj Section */}
        <section className="px-6 lg:px-20 py-12 bg-gradient-to-r from-[#fef3e6] via-[#fff1dc] to-[#fffaf0] text-gray-900 rounded-b-3xl">
          <h2 className="text-3xl font-bold text-center text-[#6b195a] mb-8">
            About <span className="text-[#f56a01]">Srila Bhagavadpad</span>
          </h2>
          <div className="flex flex-col items-center gap-8">
            <img
              src={GuruMaharaj}
              alt="Gopal Krishna Goswami Maharaj"
              className="rounded-2xl max-w-[90vw] md:max-w-[70%] lg:max-w-[45%] shadow-2xl border-2 border-[#f56a01]"
            />
            <div className="bg-white/80 p-6 md:p-10 rounded-2xl shadow-md max-w-5xl border-l-4 border-[#6b195a]">
              <p className="text-base sm:text-lg leading-8 text-justify text-gray-800">
                <span className="text-[#6b195a] font-semibold">
                  His Holiness Gopal Krishna Goswami Maharaj
                </span>{" "}
                was born on the auspicious day of Annada Ekadashi, August 14,
                1944, in New Delhi. A scholar of global repute, he studied at
                Delhi University, Sorbonne University (Paris), and McGill
                University (Montreal). Despite his worldly success, Maharaj’s
                heart yearned for spiritual truth.
                <br />
                <br />
                His life changed upon meeting{" "}
                <span className="text-[#f56a01] font-semibold">
                  His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
                </span>
                , whose compassion and teachings transformed him into a lifelong
                servant of Lord Krishna. Srila Prabhupada entrusted him with
                expanding the preaching and book distribution mission across
                India and even in the Soviet Union.
                <br />
                <br />
                Today, Maharaj continues to inspire millions through his
                devotion, leadership, and humble service in the line of our
                great acharyas.
              </p>
            </div>
          </div>
        </section>

        {/* Program Section */}
        <div className="pt-10">
          <Program />
        </div>
      </div>
    </Layout>
  );
};

export default About;
