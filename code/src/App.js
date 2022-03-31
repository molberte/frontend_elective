import React from 'react';
import Quiz from './Quiz';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Main from "./Main"
import Crushes from "./Crushes"

const App = function () {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Main/>} />
        <Route path='/Main' element={<Main/>} />
        <Route path='/Crushes' element={<Crushes/>} />
        <Route path='/Quiz' element={<Quiz/>} />
      </Routes>
    </Router>
  );
};

export default App;