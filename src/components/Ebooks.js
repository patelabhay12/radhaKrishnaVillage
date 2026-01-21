import React, { useState } from "react";
import Layout from "./Layout/Layout";
import Atmsat from "../assets/आत्म साक्षात्कार का विज्ञान.pdf";
import KRISHNA from "../assets/कृष्ण की ओर On the way to Krishna.pdf";
import KRISHNAKADAM from "../assets/कृष्ण भवना मृत में पहला कदम.pdf";
import PUNARJANAM from "../assets/पुनरागमन.pdf";

const Ebooks = () => {
  const [pdfList] = useState([
    { name: "आत्म साक्षात्कार का विज्ञान", url: Atmsat },
    { name: "कृष्ण की ओर On the way to Krishna", url: KRISHNA },
    { name: "कृष्ण भवना मृत में पहला कदम", url: KRISHNAKADAM },
    { name: "पुनरागमन", url: PUNARJANAM },
  ]);

  const handleDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-[#fff5e6] via-[#fff1dc] to-[#ffe6cc] py-12 px-4">
        {/* Header */}
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#6b195a] via-[#8b1e6f] to-[#f56a01] text-white py-4 px-8 rounded-3xl shadow-lg">
            Srila Prabhupada E-Books
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-2xl shadow-xl border border-[#f56a01]/50">
            <thead>
              <tr className="bg-gradient-to-r from-[#6b195a] to-[#f56a01] text-white text-lg font-semibold">
                <th className="py-3 px-6 text-left">Document Name</th>
                <th className="py-3 px-6 text-center">View</th>
                <th className="py-3 px-6 text-center">Download</th>
              </tr>
            </thead>
            <tbody>
              {pdfList.map((pdf, index) => (
                <tr
                  key={index}
                  className="border-b border-[#f56a01]/20 hover:bg-[#fff0e0] transition-all duration-300"
                >
                  <td className="py-4 px-6 font-medium text-[#6b195a]">
                    {pdf.name}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button
                      className="bg-gradient-to-r from-[#6b195a] to-[#f56a01] text-white font-bold py-2 px-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      onClick={() => handleView(pdf.url)}
                    >
                      View
                    </button>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button
                      className="bg-gradient-to-r from-[#f56a01] to-[#6b195a] text-white font-bold py-2 px-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      onClick={() => handleDownload(pdf.url, pdf.name)}
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Ebooks;
