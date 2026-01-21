import './App.css';
import About from './components/About';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Galleryv2 from './components/Galleryv2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activity from './components/Activity';
import Contact from './components/Contact';
import Ebooks from './components/Ebooks';
import ScrollToTop from './components/ScrollToTop';
import GalleryV3 from './components/GalleryV3';
import DonationPage2 from './components/DonationPage2.jsx';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Galleryv2/>} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/donation" element={<DonationPage2/>} />
          <Route path="/activities" element={<Activity />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
