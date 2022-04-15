import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//module image + add to declarations
import './App.css'
import { NavBar } from './src/components/NavBar'
import { Footer } from './src/components/Footer'
import { About } from './src/pages/About'
import { Contact } from './src/pages/Contact'
import { Home } from './src/pages/Home'
import { Quiz } from './src/pages/Quiz'

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
