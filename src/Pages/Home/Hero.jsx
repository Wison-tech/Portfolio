import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";
import splineImg from "../../assets/img/spline_robot.webp";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    // Inicializar animaciones
    AOS.init({
      duration: 800,
      once: true, // Mejorar performance: animar solo una vez
    });

    // Retrasar Spline para priorizar el texto (LCP)
    const timer = setTimeout(() => {
      setLoadSpline(true);
    }, 1500);

    return () => {
      window.removeEventListener("resize", checkDevice);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      className="flex lg:mt-20 flex-col lg:flex-row
      items-center justify-between 
      min-h-[calc(90vh-6rem)]
      px-6 sm:px-10 lg:px-20 relative overflow-x-hidden"
    >
      {/* Columna de Texto */}
      <div
        data-aos="fade-right"
        className="max-w-xl z-10 mt-[80%] md:mt-[50%] lg:mt-0"
      >
        {/* Tag Wilson Rodriguez */}
        <div
          className="relative w-[95%] sm:w-48 h-10
          bg-gradient-to-r from-[#132542] to-[#3B82F6]
          shadow-[0_0_15px_rgba(255,255,255,0.4)]
          rounded-full"
        >
          <div
            className="absolute inset-[3px]
            bg-black rounded-full flex items-center
            justify-center gap-1 text-white"
          >
            <i className="bx bx-diamond" aria-hidden="true"></i>
            Wilson Rodriguez
          </div>
        </div>

        {/* Heading Principal (H1) */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl
          lg:text-6xl font-semibold tracking-wider my-5 text-white"
        >
          Full Stack Developer
        </h1>

        {/* Heading Secundario (H2 para SEO) */}
        <h2
          translate="no"
          className="my-5 text-xl font-medium tracking-wider
          text-gray-400 max-w-[25rem] lg:max-w-[30rem]"
        >
          React · Flutter · Django · PostgreSQL · Docker
        </h2>

        {/* Descripción */}
        <p
          className="text-base sm:text-lg tracking-wider
          text-gray-400 max-w-[25rem] lg:max-w-[30rem]"
        >
          Building modern web and mobile solutions with React, Flutter, and
          Django. Focused on scalable backend architectures and seamless user
          experiences.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-wrap mt-12 items-center justify-center gap-4 lg:justify-start md:justify-start">
          <a
            aria-label="View Wilson Rodriguez GitHub Profile"
            className="border border-[#2a2a2a] py-2
            sm:py-3 px-6 sm:px-5 rounded-full sm:text-lg
            text-sm font-semibold tracking-wider transition-all 
            duration-300 bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white flex items-center gap-2"
            href="https://github.com/Wison-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub <i className="bx bxl-github" aria-hidden="true"></i>
          </a>

          <a
            aria-label="Connect with Wilson Rodriguez on LinkedIn"
            className="border border-[#2a2a2a] py-2 
            sm:py-3 px-6 sm:px-7 rounded-full sm:text-lg
            text-sm font-semibold tracking-wider transition-all 
            duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white flex items-center gap-2"
            href="https://www.linkedin.com/in/wilson-mauricio-rodriguez-rodriguez"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Connect{" "}
            <i className="bx bx-link-external" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* Contenedor del Visual */}
      <div
        className="absolute top-[-15%] lg:top-[-20%] bottom-0 lg:left-[25%]
        sm:left-[-2%] h-full w-full lg:w-[70%] z-0 pointer-events-none"
      >
        {isMobile ? (
          <div className="absolute top-[-10%] w-full h-full flex p-7 items-center justify-center">
            <img
              src={splineImg}
              alt="Visual representation of tech stack"
              width="500"
              height="500"
              fetchpriority="high" // Prioridad alta para mejorar LCP
              className="w-full max-w-[500px] h-auto object-contain opacity-60 mt-20"
              // Eliminado data-aos aquí para que la imagen cargue sin esperar al script de animaciones
            />
          </div>
        ) : (
          loadSpline && (
            <Spline
              className="absolute top-[20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
              scene="https://draft.spline.design/VKwS9DEkdnA-hAhR/scene.splinecode"
            />
          )
        )}
      </div>
    </section>
  );
};

export default Hero;
