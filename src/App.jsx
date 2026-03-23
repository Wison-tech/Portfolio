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
        <title>
          Wilson Rodriguez |Software Architecture & Digital Solutions
        </title>
        <meta
          name="google-site-verification"
          content="7MYpcBhTP4rNk6Sdokv6579T_t8LjrTjckD76CCjaqQ"
        />

        <meta
          name="description"
          content="Expert digital solutions and full-stack development. Specialist in React, Python, and scalable architectures. Transforming ideas into high-impact software."
        />

        {/* URL canónica */}
        <link rel="canonical" href="https://azoth-dev.vercel.app/" />

        {/* Open Graph (Lo que se ve en LinkedIn/WhatsApp) */}
        <meta property="og:title" content="AZOTH | Expert Digital Solutions" />
        <meta
          property="og:description"
          content="Azoth's professional. Full Stack development of web and mobile applications using modern technologies."
        />
        <meta property="og:url" content="https://azoth-dev.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Imagen OG: Asegúrate de que el archivo en /public se llame exactamente así */}
        <meta
          property="og:image"
          content="https://azoth-dev.vercel.app/og-expert.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="AZOTH Expert Digital Solutions Logo"
        />

        {/* Twitter Card para X/Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AZOTH" />
        <meta
          name="twitter:description"
          content="Full Stack development and expert digital solutions."
        />
        <meta
          name="twitter:image"
          content="https://azoth-dev.vercel.app/og-expert.png"
        />
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
