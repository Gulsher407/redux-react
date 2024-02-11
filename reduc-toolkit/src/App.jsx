import React from "react";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/edit/:id" element={<Update />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
