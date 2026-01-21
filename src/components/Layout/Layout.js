import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Donation from "../Donation.js"
;const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <main className='min-h-[80vh]'>
        {children}
      </main>
      <Donation/>
      <Footer />
    </div>
  )
}

export default Layout