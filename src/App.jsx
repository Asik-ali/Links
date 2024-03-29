import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'; // Import other pages as needed
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import PriceCardMobile from './Components/PriceCard/PriceCardMobile';
import NiosMobile from './Components/PriceCard/NiosMobile';
import StateBoardMobile from './Components/PriceCard/StateBoardMobile';
import Admission from './Pages/Admission';
import Join from './Pages/Join';
import NiosSenior from './Components/PriceCard/NiosSenior';
import StateSenior from './Components/PriceCard/StateSenior';
import CbseSenior from './Components/PriceCard/CbseSenior';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/cbse" element={<PriceCardMobile />} />
        <Route path="/courses/state" element={<StateBoardMobile />} />
        <Route path="/courses/nios" element={<NiosMobile />} />
        <Route path="/cbsesenior" element={<CbseSenior />} />
        <Route path="/niossenior" element={<NiosSenior />} />
        <Route path="/statesenior" element={<StateSenior />} />
        <Route path="/admission" element={<Admission />} />

        <Route path="/carrers" element={<Join />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
