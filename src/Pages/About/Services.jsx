import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "boxicons/css/boxicons.min.css";

const Services = () => {
  useEffect(() => {
    // Inicialización de animaciones con una duración estándar
    AOS.init({ duration: 800, once: false });
  }, []);

  const whatsappUrl = "https://wa.me/573242332549?text=Hello%20Wilson,%20I%20am%20interested%20in%20your%20services%20regarding%20";

  const services = [
    {
      step: "01",
      title: "Product Architecture",
      description: "Designing scalable digital foundations using React, Django, and modern cloud infrastructure.",
      icon: "bx-layer"
    },
    {
      step: "02",
      title: "AI & RAG Integration",
      description: "Implementing intelligent systems and neural networks to automate complex business logic.",
      icon: "bx-brain"
    },
    {
      step: "03",
      title: "Native Mobile Apps",
      description: "High-performance mobile experiences built with Jetpack Compose (Kotlin) and Flutter.",
      icon: "bx-mobile-alt"
    },
    {
      step: "04",
      title: "3D Modeling & Assets",
      description: "High-fidelity 3D models created in Blender for web integration and digital storytelling.",
      icon: "bx-cube"
    },
    {
      step: "05",
      title: "Motion & Visual Content",
      description: "Premium post-production using After Effects, Premiere, and Photoshop for digital assets.",
      icon: "bx-video-recording"
    }
  ];

  return (
    /* CORRECCIÓN DE SCROLL: 
       - Usamos 'overflow-x-clip' para evitar scroll horizontal por los brillos azules.
       - Eliminamos 'h-screen' o cualquier altura fija para que el scroll sea el de la página principal.
       - El padding coincide con el de tu Navbar y Hero para alineación perfecta.
    */
    <section className="relative pt-20 pb-20 px-6 sm:px-10 lg:px-20 text-white overflow-x-clip bg-transparent">
      
      {/* Glow ambiental corregido para no bloquear clics (pointer-events-none) */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-0 pointer-events-none"></div>

      {/* ALINEACIÓN AZOTH: 
          Hemos quitado 'max-w-7xl mx-auto' para que los títulos se alineen al borde 
          izquierdo igual que el logo de tu cabecera.
      */}
      <div className="relative z-10">
        
        <div className="mb-12" data-aos="fade-up">
          <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-[10px] mb-2 block">
            / Expertise & Creative
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter uppercase">
            Services & <span translate="no" className="text-transparent italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Solutions</span>
          </h2>
        </div>

        {/* Grid de servicios con arquitectura Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className={`group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] rounded-[2rem] transition-all duration-500 flex flex-col justify-between min-h-[280px]
                ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
                ${index === 2 ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"}
              `}
            >
              {/* Reflejo de luz en la esquina al pasar el mouse */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 blur-[40px] rounded-full group-hover:bg-blue-500/15 transition-all duration-500 pointer-events-none"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-all duration-500 text-2xl">
                    <i className={`bx ${service.icon}`}></i>
                  </div>
                  <span className="text-gray-700 font-mono text-xs font-bold tracking-widest">
                    {service.step}
                  </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base mb-8">
                  {service.description}
                </p>

                {/* Botón de acción con WhatsApp */}
                <div className="mt-auto">
                  <a 
                    href={`${whatsappUrl}${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-blue-500 
                               opacity-100 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 
                               transition-all duration-300 hover:text-blue-300 font-bold"
                  >
                    Get this service <i className="bx bx-right-arrow-alt text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;