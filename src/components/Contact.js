import React from 'react'
import Layout from './Layout/Layout'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <Layout>
      <div className="m-16">

        <section className="text-gray-600 body-font relative">
          <div className="container px-2 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameborder="0"
                title="Loca"
                marginheight="0"
                marginwidth="0"
                scrolling="yes"

                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Jai%20Pal%20Pur,%20Uttar%20Pradesh%20222202&ie=UTF8&t=&z=14&iwloc=B&output=embed&ll=25.678644,82.1810659"

              ></iframe>



              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md z-0">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1">Jaipalpur ( Chaka ), Mungra Badshahpur, Jaunpur PIN CODE - 222202 </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <p ><Link className='cursor-pointer' to="mailto:radhakrishnagramvikaskendra@gmail.com">radhakrishnagramvikaskendra@gmail.com</Link></p>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed"><Link to="tel:+91-7042109297">+91-7042109297</Link> </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <p className="leading-relaxed mb-5 text-gray-600 text-xl">WE ARE HAPPY TO HEAR FROM YOU</p>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">Contact</label>
                <input type="contact" id="contact" name="contact" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-[#6b195a] border-0 py-2 px-6 focus:outline-none rounded text-lg">SEND</button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Contact