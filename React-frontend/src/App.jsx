import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from "./pages/start";
import FormPage from "./pages/form";
import Review from "./pages/review";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start /> } />
        <Route path="/form" element={<FormPage /> } />
        <Route path="/review" element={<Review /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
