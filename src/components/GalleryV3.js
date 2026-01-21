import React, { useState } from "react";
import Layout from "./Layout/Layout";

const tabs = [
  { label: "App", id: "app" },
  { label: "Messages", id: "message" },
  { label: "Settings", id: "settings" },
  { label: "Holi", id: "holi" },
  { label: "Katha", id: "katha" },
];

const years = [2024, 2025];

const images = {
  app: {
    2024: [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3",
    ],
    2025: [
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0",
      "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    ],
  },
  message: {
    2024: [
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
      "https://images.unsplash.com/photo-1620064916958-605375619af8",
    ],
    2025: [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3",
    ],
  },
  settings: {
    2024: [
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0",
      "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    ],
    2025: [
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
      "https://images.unsplash.com/photo-1620064916958-605375619af8",
    ],
  },
  holi: {
    2024: [
      "https://via.placeholder.com/600x400?text=Holi+2024+1",
      "https://via.placeholder.com/600x400?text=Holi+2024+2",
    ],
    2025: [
      "https://via.placeholder.com/600x400?text=Holi+2025+1",
      "https://via.placeholder.com/600x400?text=Holi+2025+2",
    ],
  },
  katha: {
    2024: [
      "https://via.placeholder.com/600x400?text=Katha+2024+1",
      "https://via.placeholder.com/600x400?text=Katha+2024+2",
    ],
    2025: [
      "https://via.placeholder.com/600x400?text=Katha+2025+1",
      "https://via.placeholder.com/600x400?text=Katha+2025+2",
    ],
  },
};

const GalleryV3 = () => {
  const [activeTab, setActiveTab] = useState("app");
  const [selectedYear, setSelectedYear] = useState(2024);

  return (
    <Layout>
      <div className="w-full">
        <div className="relative right-0">
          {/* Tabs */}
          <ul className="relative flex flex-col lg:flex-row px-1.5 py-1.5 m-11 list-none rounded-md bg-slate-100">
            {tabs.map((tab) => (
              <li key={tab.id} className="z-30 flex-auto text-center">
                <button
                  className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
                    activeTab === tab.id
                      ? "text-blue-600 font-semibold"
                      : "text-slate-700"
                  }`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="ml-1">{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Content */}
          <div className="p-5">
            <div className="flex justify-end mb-4">
              {/* Year Dropdown */}
              <select
                className="p-2 border rounded-md text-sm"
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Images */}
            <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max">
              {(images[activeTab]?.[selectedYear] || []).map((src, index) => (
                <div key={index}>
                  <img
                    className="w-full h-40 max-w-full rounded-lg object-cover"
                    src={src}
                    alt={`image-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryV3;
