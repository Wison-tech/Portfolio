import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  });

  return (
    <main
      className="flex lg:mt-20 flex-col lg:flex-row
  items-center justify-between 
  min-h-[calc(90vh-6rem)]
  px-6 sm:px-10 lg:px-20">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl z-10 mt-[90%] 
    md:mt-[60%] lg:mt-0"
      >
        {/* Tag box-with gradient border*/}
        <div
          className="relative w-[95%] sm:w-48 h-10
        bg-gradient-to-r from-[#132542] to-[#3B82F6]
        shadow-[0_0_15px_rgba(255,255,255,0.4)]
        rounded-full"
        >
          <div
            className="absolute inset-[3px]
            bg-black rounded-full flex items-center
            justify-center gap-1"
          >
            <i class="bx bx-diamond"></i>
            Wilson Rodriguez
          </div>
        </div>
        {/* main heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl
        lg:text-6xl font-semibold tracking-wider my-5"
        >
          Full Stack Developer
        </h1>
        <h5
          className=" my-5 text-1xl font-regular tracking-wider
        text-gray-400 max-w-[25rem] lg:max-w-[30rem]"
        >
          React · Flutter · Django · PostgreSQL · Docker
        </h5>
        {/* Description */}
        <p
          className="text-base sm:text-lg tracking-wider
        text-gray-400 max-w-[25rem] lg:max-w-[30rem]"
        >
          Building modern web and mobile solutions with React, Flutter, and
          Django. Focused on scalable backend architectures and seamless user
          experiences.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-12 ">
          <a
            className=" border border-[#2a2a2a] py-2 
            sm:py-3 px-8 sm:px-5 rounded-full sm:text-lg
            text-sm font-semibold tracking-wider transition-all 
            duration-300 bg-[#2b2b2b] hover:bg-[#3a3a3a]"
            href="#"
          >
            View GitHub <i class="bx bxl-github"></i>
          </a>

          <a
            className=" border border-[#2a2a2a] py-2 
            sm:py-3 px-8 sm:px-7 rounded-full sm:text-lg
            text-sm font-semibold tracking-wider transition-all 
            duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="#"
          >
            Let's Connect{" "}
            <i
              class="bx 
                bx-link-external"
            ></i>
          </a>
        </div>
      </div>

      {/*3d model */}
      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="absolute top-[-20%] bottom-0 lg:left-[25%]
 sm:left-[-2%] h-full"
        scene="https://draft.spline.design/VKwS9DEkdnA-hAhR/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
