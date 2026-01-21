import React, { useState } from 'react'
import Layout from './Layout/Layout'
import data from './Images';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { categories } from './Data';
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = data.indexOf(selectedImage);
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = data.length - 1;
    } else if (newIndex >= data.length) {
      newIndex = 0;
    }
    console.log(data[newIndex]);
    setSelectedImage(data[newIndex]);
  };



  const getFilteredImages = () => {
    if (selectedCategory === 'All') {
      return categories.flatMap(category => category.images);
    }
    return categories.find(cat => cat.name === selectedCategory)?.images || [];
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Event Gallery</h2>

        {/* Category Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'All'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full ${selectedCategory === category.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
                } transition-colors`}
            >
              {category.name}
            </button>
          ))}
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {getFilteredImages().map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                onClick={() => openImage(image)}
              />
            </div>
          ))}

          {selectedImage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 pt-56">
              <div className="relative">
                <img
                  src={selectedImage.IMG}
                  alt="Fullscreen Image"
                  className="max-h-[100vh] max-w-[100vw]"
                />
                <button
                  className="absolute top-0 left-0 p-4 text-white text-4xl"
                  onClick={closeImage}
                >
                  <AiOutlineCloseCircle className='text-xl cursor-pointer font-bold' />
                </button>
                <button
                  className="absolute top-1/2 transform -translate-y-1/2 right-0 p-4 text-white"
                  onClick={() => navigateImage(1)}
                >
                  <GrNext className='text-3xl cursor-pointer' />
                </button>
                <button
                  className="absolute top-1/2 transform -translate-y-1/2 left-0 p-4 text-white"
                  onClick={() => navigateImage(-1)}
                >
                  <GrPrevious className='text-3xl cursor-pointer' />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );

  // return (
  //   <Layout>
  //     <div className='p-10 flex justify-center align-middle text-center text-2xl font-bold  '>
  //       <p className='shadow-2xl p-4  rounded-lg cursor-pointer bg-[#6b195a] text-white'>Welcome to the Gallery world of <span className='text-orange-600'> <i> <u> Radha Krishna Gram Vikash Kendra</u> </i>   </span> </p>
  //     </div>
  //     <div className="p-6 grid lg:grid-cols-3 gap-4 md:grid-cols-3">
  //       {
  //         data.map((image, index) => {
  //           return (

  //             <div className="relative aspect-w-1 aspect-h-1 overflow-hidden shadow-md rounded-lg">
  //               <img src={image.IMG} alt="Hare Krishna Image is Loading Please wait..." className=' inset-0 w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer'
  //                 onClick={() => openImage(image)}
  //               />
  //             </div>

  //           )
  //         })
  //       }

  //       {selectedImage && (
  //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 pt-56">
  //           <div className="relative">
  //             <img
  //               src={selectedImage.IMG}
  //               alt="Fullscreen Image"
  //               className="max-h-[100vh] max-w-[100vw]"
  //             />
  //             <button
  //               className="absolute top-0 left-0 p-4 text-white"
  //               onClick={closeImage}
  //             >
  //               <AiOutlineCloseCircle className='text-xl cursor-pointer font-bold' />
  //             </button>
  //             <button
  //               className="absolute top-1/2 transform -translate-y-1/2 right-0 p-4 text-white"
  //               onClick={() => navigateImage(1)}
  //             >
  //               <GrNext className='text-3xl cursor-pointer' />
  //             </button>
  //             <button
  //               className="absolute top-1/2 transform -translate-y-1/2 left-0 p-4 text-white"
  //               onClick={() => navigateImage(-1)}
  //             >
  //               <GrPrevious className='text-3xl cursor-pointer' />
  //             </button>
  //           </div>
  //         </div>
  //       )}

  //     </div>
  //   </Layout>
  // )
}
export default Gallery