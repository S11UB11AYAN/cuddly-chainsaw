import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clock from "./clock";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clock" element={<Clock />} />
      </Routes>
    </BrowserRouter>
  );
}
