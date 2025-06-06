import { useState } from 'react'
import { Flex, Text, Button } from "@radix-ui/themes";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Learn from './components/Learn';
import Home from './components/Home';
import MainPage from './pages/MainPage';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App({ setThemeAppearance, themeAppearance }) {
  const HomePage = () => (
    <div className='mt-[10vh]'>
      <Navbar setThemeAppearance={setThemeAppearance} themeAppearance={themeAppearance} />
      <Home />
      <Learn />
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );

  return (
    <BrowserRouter>
      {/* <Navbar setThemeAppearance={setThemeAppearance} themeAppearance={themeAppearance} /> */}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<MainPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
