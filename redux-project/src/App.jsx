import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './assets/Home';
import Create from './assets/Create';
import Edit from './assets/Edit';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/create" element={<Create />} />
      <Route exact path="/edit/:id"  element={<Edit />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
