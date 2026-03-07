import { useState } from "react";
import { Link } from "react-router-dom"; // Importamos Link para la navegación interna
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Clase común para los links de escritorio para mantener el código limpio
  const linkStyles = "text-base tracking-wider transition-colors hover:text-gray-300 z-50";

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center py-4 px-4 lg:px-20 bg-black/10 backdrop-blur-md border-b border-white/5">
      
      {/* LOGO - Ahora redirige al Home */}
      <Link
        to="/"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
      >
        AZOTH
      </Link>

      {/* DESKTOP NAVIGATION */}
      <nav className="hidden md:flex items-center gap-12">
        <Link
          to="/"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className={linkStyles}
        >
          Home
        </Link>
        <Link
          to="/about"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={linkStyles}
        >
          About me
        </Link>
        <Link
          to="/projects"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className={linkStyles}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className={linkStyles}
        >
          Contact me
        </Link>
      </nav>

      <button
        className="hidden md:block bg-[#a7a7a7] text-black 
        py-3 px-8 rounded-full border-none font-medium transition-all 
        duration-500 hover:bg-white cursor-pointer z-50"
      >
        Download Hv
      </button>

      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50 text-white"
      >
        <i className={isOpen ? "bx bx-x" : "bx bx-menu"}></i>
      </button>

      {/* Mobile menu - Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90
        backdrop-blur-xl z-40 flex flex-col items-center justify-center
        transition-all duration-500 ease-in-out ${
          isOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8 items-center text-2xl">
          <Link onClick={toggleMobileMenu} className="hover:text-gray-400" to="/">
            Home
          </Link>
          <Link onClick={toggleMobileMenu} className="hover:text-gray-400" to="/about">
            About me
          </Link>
          <Link onClick={toggleMobileMenu} className="hover:text-gray-400" to="/projects">
            Projects
          </Link>
          <Link onClick={toggleMobileMenu} className="hover:text-gray-400" to="/contact">
            Contact me
          </Link>
          
          <button
            className="mt-4 bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium"
          >
            Download Hv
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;