import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Carousel from "../pages/carousel";
import Accordion from "../pages/accordion";

export default function App() {
  return (
    <Routes>
      <Route path="/carousel" element={<Carousel />} />
      <Route path="/accor" element={<Accordion />} />
    </Routes>
  );
}
