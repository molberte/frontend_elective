import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//module image + add to declarations
import './App.css'

import { About } from './src/pages/About'
import { Contact } from './src/pages/Contact'
import { Home } from './src/pages/Home'
import { Quiz } from './src/pages/Quiz'

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
