import { useState } from 'react'
import { Flex, Text, Button } from "@radix-ui/themes";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Learn from './components/Learn';
import Home from './components/Home';
import MainPage from './pages/MainPage';
import About from './components/About';

function App() {
  const HomePage = () => (
    <div>
      <Home />
      <Learn />
      <About/>
    </div>
  );

  return (
    <BrowserRouter>
      <Navbar />
      <div className='mt-[10vh]'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
