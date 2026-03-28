const Stack = () => {
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
    <section className="pt-10 lg:pt-0 flex lg:mt-32 flex-col items-center justify-center px-6 sm:px-10 lg:px-10">
      <div data-aos="fade-up" data-aos-duration="1000">
       
        <header className="text-center mb-8 max-w-2xl sm:max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-5xl font-black tracking-tighter mb-4 text-white uppercase italic">
           Tech <span className="text-gray-400">Ecosystem</span>
          </h2>
          {/* Separador minimalista: línea gris sutil */}
          <div className="h-[1px] w-24 bg-gray-800 mx-auto" />
        </header>
        <p className="text-base sm:text-lg tracking-[0.15em] text-gray-500 max-w-[25rem] lg:max-w-[40rem] text-center py-4 font-light uppercase">
          High-performance frameworks and languages powering our
          enterprise-grade solutions.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1300"
        className="flex flex-wrap justify-center gap-4 md:gap-8 py-10 w-full max-w-8xl mx-auto"
      >
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="group flex items-center justify-center gap-4 
            w-full max-w-[160px] md:max-w-[250px] 
            py-4 border rounded-xl border-white/10 bg-white/[0.01] 
            transition-all duration-500 
            hover:border-blue-500/50 hover:bg-blue-500/[0.03] hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
          >
            <i
              className={`bx ${tech.icon} text-2xl md:text-4xl transition-transform duration-500 group-hover:scale-110`}
              style={{ color: tech.color }}
            ></i>
            <span
              translate="no"
              className="text-sm md:text-2xl text-gray-400 font-mono tracking-widest group-hover:text-white transition-colors"
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
