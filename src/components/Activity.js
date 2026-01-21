import React from "react";
import Layout from "./Layout/Layout";
import IMG1 from "../assets/Activity1.jpg";

const activities = [
  { title: "Free Computer Classes", img: IMG1 },
  { title: "Free English Speaking Course", img: IMG1 },
  { title: "Free Bhagavad Gita Classes", img: IMG1 },
  {
    title: "Free All Subject (Math, Science, Social Science, English) Classes",
    img: IMG1,
  },
];

const Activity = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-[#fff5e6] via-[#fff1dc] to-[#ffe6cc] py-12 px-6">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#6b195a] via-[#8b1e6f] to-[#f56a01] text-white py-4 px-8 rounded-3xl shadow-xl mb-12">
          Activities
        </h2>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Image with overlay */}
              <img
                src={activity.img}
                alt={activity.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Card title */}
              <div className="absolute bottom-4 w-full text-center px-3">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400 drop-shadow-lg">
                  {activity.title}
                </h3>
              </div>

              {/* Optional decorative icon */}
              <div className="absolute top-3 right-3 text-yellow-300 text-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                🌸
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Activity;
