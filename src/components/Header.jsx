import { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    // Bloqueo de scroll para evitar el error de la imagen image_8c5175.png
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  // Esta ruta funciona porque al compilar, el contenido de /public 
  // se mueve a la raíz del servidor.
  const cvUrl = "/HV_WILSON_RODRIGUEZ_EN.pdf"; 

  const linkStyles = "text-base tracking-wider transition-colors hover:text-gray-300 z-50 text-white no-underline";

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center py-4 px-6 md:px-20 bg-black/10 backdrop-blur-md border-b border-white/5">
      
      {/* LOGO - Alineado con el diseño AZOTH Evolves */}
      <Link to="/" className="z-50 no-underline">
        <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter leading-none m-0">
          AZOTH
        </h2>
      </Link>

      {/* NAVEGACIÓN ESCRITORIO */}
      <nav className="hidden md:flex items-center gap-12">
        <Link to="/" className={linkStyles}>Home</Link>
        <Link to="/about" className={linkStyles}>About me</Link>
        <Link to="/projects" className={linkStyles}>Projects</Link>
        <Link to="/contact" className={linkStyles}>Contact me</Link>
      </nav>

      {/* BOTÓN DESCARGA ESCRITORIO */}
      <a
        href={cvUrl}
        download="Wilson_Rodriguez_HV.pdf" 
        className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50 no-underline text-center text-sm"
      >
        Download Hv
      </a>

      {/* Botón Menú Móvil */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50 text-white bg-transparent border-none outline-none"
      >
        <i className={isOpen ? "bx bx-x" : "bx bx-menu"}></i>
      </button>

      {/* Menú Móvil Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/95
        backdrop-blur-xl z-40 flex flex-col items-center justify-center
        transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-10 items-center text-2xl text-white">
          <Link onClick={toggleMobileMenu} className="no-underline text-white" to="/">HOME</Link>
          <Link onClick={toggleMobileMenu} className="no-underline text-white" to="/about">ABOUT ME</Link>
          <Link onClick={toggleMobileMenu} className="no-underline text-white" to="/projects">PROJECTS</Link>
          <Link onClick={toggleMobileMenu} className="no-underline text-white" to="/contact">CONTACT ME</Link>
          
          <a
            href={cvUrl}
            download="Wilson_Rodriguez_HV.pdf"
            onClick={toggleMobileMenu}
            className="mt-6 bg-white text-black py-4 px-10 rounded-full font-bold no-underline"
          >
            DOWNLOAD HV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;