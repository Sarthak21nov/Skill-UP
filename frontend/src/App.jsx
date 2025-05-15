import { useState } from 'react'
import { Flex, Text, Button } from "@radix-ui/themes";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Learn from './pages/Learn';
import Home from './components/Home';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div className='mt-[10vh]'>
        <Home/>
      </div>
      <Routes>
        <Route path='/learn' element={<Learn/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
