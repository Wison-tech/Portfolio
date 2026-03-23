import React from "react";

const Stack = () => {
  // Configuración de tecnologías: nombres, iconos y colores oficiales
  const technologies = [
    { name: "React", icon: "bxl-react", color: "#61DAFB" },
    { name: "Flutter", icon: "bxl-flutter", color: "#035AA6" },
    { name: "Django", icon: "bxl-django", color: "#084432" },
    { name: "Docker", icon: "bxl-docker", color: "#0974BE" },
    { name: "Kotlin", icon: "bxl-android", color: "#0CCD74" },
    { name: "Laravel", icon: "bxl-php", color: "#7377AD" },
    { name: "Rust", icon: "bx-cog", color: "#BC3329" },
    { name: "PostgreSQL", icon: "bxl-postgresql", color: "#396C94" },
  ];

  return (
    <section
      id="tech-stack"
      className="pt-10 lg:pt-0 flex lg:mt-20 flex-col items-center justify-center px-6 sm:px-10 lg:px-10"
    >
      {/* Cabecera de la Sección */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <header className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
            Technical Expertise
          </h2>
          <div
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
            aria-hidden="true"
          />
        </header>
        <p className="text-base sm:text-lg tracking-wider text-gray-300 max-w-[25rem] lg:max-w-[30rem] text-center py-4">
          The core technologies behind my development process, from frontend
          aesthetics to backend logic.
        </p>
      </div>

      {/* Grilla de Tecnologías */}
      <ul
        data-aos="fade-up"
        data-aos-duration="1300"
        className="flex flex-wrap justify-center gap-4 md:gap-8 py-10 w-full max-w-7xl mx-auto"
      >
        {technologies.map((tech) => (
          <li
            key={tech.name}
            className="flex items-center justify-center gap-4 w-full max-w-[160px] 
            md:max-w-[250px] py-3 border rounded-full border-gray-600 transition-all 
            duration-300 hover:border-white hover:bg-white/5 shadow-sm hover:shadow-blue-500/10"
          >
            {/* Icono decorativo oculto para lectores de pantalla */}
            <i
              className={`bx ${tech.icon} text-3xl`}
              style={{ color: tech.color }}
              aria-hidden="true"
            ></i>

            <span
              translate="no"
              className="text-xl lg:text-3xl md:text-2xl text-gray-200 font-medium tracking-wide"
            >
              {tech.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stack;
