import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./Pages/Home/Home";
import DynamicFooter from "./components/DynamicFooter";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
// import Projects from "./Pages/Projects";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <DynamicFooter />
    </>
  );
}
