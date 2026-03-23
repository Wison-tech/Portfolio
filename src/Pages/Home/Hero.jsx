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

    AOS.init({
      duration: 800,
      once: false,
    });

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
        {/* Badge de Protocolo / Área */}
        <div
          className="relative w-[95%] sm:w-72 h-10
          bg-gradient-to-r from-[#132542] to-[#3B82F6]
          shadow-[0_0_15px_rgba(59,130,246,0.3)]
          rounded-full"
        >
          <div
            className="absolute inset-[1px]
            bg-black rounded-full flex items-center
            justify-center gap-2 text-white font-mono text-[11px] tracking-[0.2em]"
          >
            <i className="bx bx-shield-quarter text-blue-500"></i>
            SYSTEMS ARCHITECTURE
          </div>
        </div>

        {/* Heading Principal: Impacto Corporativo */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl
          lg:text-7xl font-black tracking-tighter my-6 text-white leading-none uppercase italic"
        >
          Advanced Engineering
         
        </h1>

        <h5
          translate="no"
          className="my-5 text-sm font-mono tracking-[0.3em]
          text-blue-500/80 max-w-[25rem] lg:max-w-[30rem] uppercase"
        >
          Scalable · Robust · Intelligent
        </h5>

        {/* Descripción: Enfoque en soluciones, no en tareas */}
        <p
          className="text-base sm:text-lg tracking-wide
          text-gray-400 max-w-[25rem] lg:max-w-[35rem] leading-relaxed font-light"
        >
          Specialized in deploying high-performance digital ecosystems. From
          complex backend infrastructures to intuitive multi-platform
          interfaces, we stabilize your technological node.
        </p>

        {/* Botones de Acción: Más profesionales */}
        <div className="flex flex-wrap mt-12 items-center justify-center gap-5 lg:justify-start md:justify-start">
          <a
            className="group relative overflow-hidden border border-blue-500/30 py-3 px-8 rounded-lg 
            text-sm font-bold tracking-[0.2em] transition-all 
            duration-300 bg-blue-600/10 hover:bg-blue-600/20 text-white flex items-center gap-2"
            href="https://github.com/Wison-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            SOURCE_CODE{" "}
            <i className="bx bxl-github group-hover:rotate-12 transition-transform"></i>
          </a>

          <a
            className="border border-white/10 py-3 px-8 rounded-lg
            text-sm font-bold tracking-[0.2em] transition-all 
            duration-300 hover:bg-white hover:text-black bg-transparent text-white flex items-center gap-2"
            href="https://www.linkedin.com/in/wilson-mauricio-rodriguez-rodriguez"
            target="_blank"
            rel="noopener noreferrer"
          >
            NETWORK_ID <i className="bx bx-terminal"></i>
          </a>
        </div>
      </div>

      {/* Visual Container */}
      <div
        className="absolute top-[-15%] lg:top-[-20%] bottom-0 lg:left-[25%]
        sm:left-[-2%] h-full w-full lg:w-[70%] z-0 pointer-events-none"
      >
        {isMobile ? (
          <div className="absolute top-[-10%] w-full h-full flex p-7 items-center justify-center">
            <img
              src={splineImg}
              alt="Azoth Visual System"
              className="w-full max-w-[500px] h-auto object-contain opacity-40 mt-20 grayscale hover:grayscale-0 transition-all duration-700"
              data-aos="fade-up"
            />
          </div>
        ) : (
          loadSpline && (
            <Spline
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="1500"
              className="absolute top-[20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
              scene="https://draft.spline.design/qvfJC-1LzYaY1Sfw/scene.splinecode"
            />
          )
        )}
      </div>
    </section>
  );
};

export default Hero;
