import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Importante para SEO
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
      {/* Metadatos base que se aplicarán si una página no los define */}
      <Helmet>
        <title>Wilson Rodriguez | Full Stack Developer</title>
        <meta name="description" content="Desarrollador de software especializado en React, Python y Node.js. Mira mi portafolio de proyectos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://azoth-dev.vercel.app/" />
      </Helmet>

      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/contact" element={<Contact />} />
        
        {/* SEO Tip: En lugar de renderizar Home para rutas inexistentes, 
            es mejor una página 404, pero si prefieres Home, asegúrate de que no genere contenido duplicado */}
        <Route path="*" element={<Home />} />
      </Routes>

      <DynamicFooter />
    </>
  );
}