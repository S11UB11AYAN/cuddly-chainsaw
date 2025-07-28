import { Route, Routes } from "react-router-dom";
import Accordion from "./components/Accordion/Accordion";

export default function App(){
  return(
    <Routes>
      <Route path="/accordion" element={<Accordion/>}/>
    </Routes>
  )
}