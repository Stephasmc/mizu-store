import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

//IMPORT LAYOUT COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//IMPORT PAGE COMPONENTS
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
