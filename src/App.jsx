import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./Pages/Home/Home";
import DynamicFooter from "./components/DynamicFooter";
import About from "./Pages/About/About";
// import Projects from "./Pages/Projects";
// import Contact from "./Pages/Contact";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <DynamicFooter />
    </>
  );
}
