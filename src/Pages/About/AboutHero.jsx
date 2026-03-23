import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center 
      min-h-[60vh] lg:min-h-[70vh] px-6 py-40 text-center overflow-hidden relative"
    >
      {/* Contenedor Principal */}
      <div
        data-aos="fade-up"
        className="max-w-4xl z-10 flex flex-col items-center"
      >
        {/* Badge de Identidad - AZOTH Style */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium mb-8 tracking-[0.2em] uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          The Studio Mission
        </div>

        {/* Título de la Sección */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Turning <span className="text-blue-500">Vision</span> Into <br />
          Functional Reality
        </h2>

        {/* Bio Corporativa / Subtítulo */}
        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mb-10 font-light">
          AZOTH is an engineering-first studio driven by the fusion of
          <span className="text-white font-medium"> clean code </span>
          and <span className="text-white font-medium"> innovative design</span>
          . We bridge the gap between complex ideas and scalable digital
          ecosystems.
        </p>

        {/* Separador Decorativo */}
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-10"></div>

        {/* Redes Sociales Corporativas */}
        <div className="flex gap-8 text-2xl">
          <a
            href="https://www.linkedin.com/in/wilson-mauricio-rodriguez-rodriguez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            title="LinkedIn Corporate Profile"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/Wison-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            title="Studio Repository"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>

      {/* Efecto de Luces de Fondo (Sutil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-0 pointer-events-none"></div>
    </section>
  );
};

export default AboutHero;
