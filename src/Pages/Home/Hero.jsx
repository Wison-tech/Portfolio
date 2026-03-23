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

    // 1. Inicializar AOS inmediatamente
    AOS.init({
      duration: 800,
      once: false,
    });

    // 2. Retrasar la carga de Spline para que AOS termine sus animaciones
    // 1000ms es suficiente para que el texto ya haya entrado fluidamente
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
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl z-10 mt-[80%] md:mt-[50%] lg:mt-0"
      >
        {/* Tag Wilson Rodriguez */}
        <div
          className="relative w-[95%] sm:w-64 h-10
          bg-gradient-to-r from-[#132542] to-[#3B82F6]
          shadow-[0_0_15px_rgba(255,255,255,0.4)]
          rounded-full"
        >
          <div
            className="absolute inset-[3px]
            bg-black rounded-full flex items-center
            justify-center gap- text-white"
          >
            <i className="bx bx-diamond"></i>
           SOFTWARE ARCHITECTURE
          </div>
        </div>

        {/* Heading Principal */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl
          lg:text-6xl font-semibold tracking-wider my-5 text-white"
        >
          Enterprise Software Solutions
        </h1>

        <h5
          translate="no"
          className="my-5 text-1xl font-regular tracking-wider
          text-gray-400 max-w-[25rem] lg:max-w-[30rem]"
        >
          React · Flutter · Django · PostgreSQL · Docker
        </h5>

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
            className="border border-[#2a2a2a] py-2
            sm:py-3 px-6 sm:px-5 rounded-full sm:text-lg
            text-sm font-semibold tracking-wider transition-all 
            duration-300 bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white"
            href="https://github.com/Wison-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub <i className="bx bxl-github"></i>
          </a>

          <a
            className="border border-[#2a2a2a] py-2 
            sm:py-3 px-6 sm:px-7 rounded-full sm:text-lg
            text-sm font-semibold tracking-wider transition-all 
            duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="https://www.linkedin.com/in/wilson-mauricio-rodriguez-rodriguez"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Connect <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      {/* Contenedor del Visual (3D o Imagen) */}
      <div
        className="absolute top-[-15%] lg:top-[-20%] bottom-0 lg:left-[25%]
        sm:left-[-2%] h-full w-full lg:w-[70%] z-0 pointer-events-none"
      >
        {isMobile ? (
          /* Renderiza solo imagen en Celulares/Tablets */
          <div className=" absolute top-[-10%] w-full h-full flex p-7 items-center justify-center">
            <img
              src={splineImg}
              alt="Wilson Tech Visual"
              className="w-full max-w-[500px] h-auto object-contain opacity-60 mt-20"
              data-aos="fade-up"
            />
          </div>
        ) : (
          loadSpline && (
            /* Renderiza Spline solo en Desktop */
            <Spline
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="1500"
              className="absolute top-[20%] bottom-0 lg:left-[25%]
 sm:left-[-2%] h-full"
              scene="https://draft.spline.design/qvfJC-1LzYaY1Sfw/scene.splinecode"
            />
          )
        )}
      </div>
    </section>
  );
};

export default Hero;
