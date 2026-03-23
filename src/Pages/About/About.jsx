import { Helmet } from "react-helmet-async"; // Herramienta SEO para React
import AboutHero from "./AboutHero";
import AboutDetails from "./AboutDetails";
import ProfessionalPath from "./ProfessionalPath";
import Services from "./Services";

const About = () => {
  return (
    <>
      {/* SEO Dinámico para React */}
      <Helmet>
        <title>Sobre Azoth | Experto en Software e IA en Colombia</title>
        <meta name="description" content="Trayectoria profesional de Azoth. Especialista en desarrollo Fullstack (Laravel/React) e Inteligencia Artificial aplicada en Colombia." />
        <link rel="canonical" href="https://tu-dominio.com/about" />
        
        {/* Open Graph para que al compartir en WhatsApp/LinkedIn se vea profesional */}
        <meta property="og:title" content="Sobre Azoth | Software & AI Specialist" />
        <meta property="og:description" content="Conoce la experiencia y los servicios tecnológicos de Azoth." />
        <meta property="og:image" content="/gradient.png" />
      </Helmet>

      <main className="relative w-full min-h-screen overflow-x-clip">
        {/* Imagen de fondo optimizada */}
        <img
          className="absolute top-0 right-0 opacity-60 -z-10 select-none pointer-events-none"
          src="/gradient.png"
          alt="Azoth Brand Background"
          loading="eager"
          width={1200}
          height={800}
        />

        {/* Efecto de brillo visual */}
        <div 
          className="h-0 w-[20rem] md:w-[40rem] absolute top-[10%] md:top-[20%] right-[-10%] md:right-[-5%] shadow-[0_0_900px_22px_#005FFA] -rotate-[30deg] -z-10"
          aria-hidden="true"
        ></div>
        
        {/* Estructura de contenido semántica */}
        <article className="relative z-10">
          <AboutHero />
          
          <section id="professional-details">
            <AboutDetails />
          </section>

          <section id="path">
            <ProfessionalPath />
          </section>

          <section id="services-list">
            <Services />
          </section>
        </article>
      </main>
    </>
  );
};

export default About;