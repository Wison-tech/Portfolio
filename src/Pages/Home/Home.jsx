import { Helmet } from 'react-helmet-async';
import Hero from "./Hero";
import Stack from "./Stack";
import Core from "./Core";
import Collage from "./Collage";

const Home = () => {
  return (
    <main>
      <Helmet>
        {/* Título: Mezcla tu nombre con la marca para mayor impacto SEO */}
        <title>AZOTH - Expert Digital Solutions</title>
        
        {/* Descripción: Enfocada en servicios y ubicación (Bogotá/Remoto) */}
        <meta name="description" content="Soluciones digitales expertas y desarrollo Full Stack. Especialista en React, Python y arquitecturas escalables. Transformando ideas en software de alto impacto." />
        
        {/* URL canónica */}
        <link rel="canonical" href="https://azoth-dev.vercel.app/" />

        {/* Open Graph (Lo que se ve en LinkedIn/WhatsApp) */}
        <meta property="og:title" content="AZOTH | Soluciones Digitales Expertas" />
        <meta property="og:description" content="Portafolio profesional de Wilson Rodriguez. Desarrollo Full Stack de aplicaciones web y móviles con tecnologías modernas." />
        <meta property="og:url" content="https://azoth-dev.vercel.app/" />
        <meta property="og:type" content="website" />
        
        {/* Imagen OG: Asegúrate de que el archivo en /public se llame exactamente así */}
        <meta property="og:image" content="https://azoth-dev.vercel.app/og-expert.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AZOTH Expert Digital Solutions Logo" />

        {/* Twitter Card para X/Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wilson Rodriguez | AZOTH" />
        <meta name="twitter:description" content="Desarrollo Full Stack y soluciones digitales expertas." />
        <meta name="twitter:image" content="https://azoth-dev.vercel.app/og-expert.png" />
      </Helmet>

      {/* Imagen de gradiente optimizada como decorativa */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="" 
        role="presentation"
        loading="lazy"
      />

      {/* Efecto de Blur (Decorativo) */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_22px_#005FFA] -rotate-[30deg] -z-10"></div>

      <Hero />
      <Stack />
      <Core />
      <Collage />
      
    </main>
  );
};

export default Home;