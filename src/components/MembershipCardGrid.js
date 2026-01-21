import React from 'react';
import IMG1 from "../assets/img2.jpg";

const DonorSection = () => {
    const donors = [
        { id: 1, name: 'Abhay Patel', image: IMG1 },
        { id: 2, name: 'Hare Krishna Mantra', image: IMG1 },
        { id: 3, name: 'Anil Kumar', image: IMG1 },
        { id: 4, name: 'Ravi Kumar', image: IMG1 },
        { id: 5, name: 'Prasant Kumar', image: IMG1 },
        { id: 6, name: 'Aman Kumar', image: IMG1 },
    ];

    return (
        <div className="py-12 sm:py-16 bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    Our Donors
                </h2>

                {/* Donors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
                    {donors.map((donor) => (
                        <div
                            key={donor.id}
                            className="group relative overflow-hidden rounded-2xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-auto aspect-[4/5] overflow-hidden">
                                <img
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    src={donor.image}
                                    alt={donor.name}
                                    loading="lazy"
                                />

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -rotate-45 -translate-x-[100%] group-hover:translate-x-[100%]" />
                            </div>

                            {/* Name Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-white text-lg sm:text-xl font-semibold text-center">
                                    {donor.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section Decoration */}
                <div className="mt-10 sm:mt-12 text-center">
                    <a
                        href="https://chat.whatsapp.com/EAob3SvLrMRB9VYm48iPtf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="px-6 sm:px-8 py-3 sm:py-2 bg-white rounded-full shadow-md text-purple-600 font-semibold hover:bg-purple-100 transition">
                            Join Our Community
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonorSection;
