const Core = () => {
  const cards = [
    {
      id: "agile-collaboration",
      title: "Operational Excellence",
      description:
        "Deployment of Agile & Scrum frameworks designed for high-velocity environments. We prioritize transparent communication and iterative delivery to ensure complex milestones are met with precision.",
      data_os: "fade-up",
    },
    {
      id: "code-quality",
      title: "Technical Integrity",
      description:
        "Strict adherence to Clean Code and Solid principles. Our production environments are reinforced through automated testing and rigorous version control, guaranteeing long-term system maintainability.",
      data_os: "fade-up",
    },
    {
      id: "scalable-systems",
      title: "System Scalability",
      description:
        "Architecting robust backend ecosystems and RESTful infrastructures. We focus on high-performance logic and optimized data schemas to support enterprise-level growth and traffic demands.",
      data_os: "fade-up",
    },
  ];

  return (
    <section
      className="pt-10 lg:pt-0 flex lg:mt-32 flex-col
  items-center justify-center
  sm:px-10 lg:px-15"
    >
      <div data-aos="fade-up" data-aos-duration="1000">
        <header className="text-center mb-8 max-w-[90%] sm:max-w-[100%]">
          <h2 className="text-3xl lg:text-5xl font-black tracking-tighter mb-4 text-white uppercase italic">
            Engineering <span className="text-gray-400">Foundations</span>
          </h2>
          {/* Separador minimalista: línea gris sutil */}
          <div className="h-[1px] w-24 bg-gray-800 mx-auto" />
        </header>
        <p
          className="text-base sm:text-lg tracking-[0.1em]
        text-gray-300 max-w-[25rem] lg:max-w-[40rem] text-center py-4 px-4 font-light"
        >
          Our development cycle is governed by industry-leading standards to
          ensure every digital asset is a reliable asset.
        </p>
      </div>

      <div
        className="flex flex-wrap justify-center gap-6 md:gap-8 py-16 w-full max-w-7xl
      mx-auto p-4 md:p-8 lg:p-8"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            data-aos={card.data_os}
            data-aos-offset="50"
            data-aos-easing="ease-in-out"
            className="group flex-1 min-w-[100%] md:min-w-[45%] lg:min-w-[30%] flex flex-col justify-center
            items-center text-center p-10 border border-white/5 transition-all duration-500 
            hover:border-blue-600/50 hover:bg-blue-600/[0.02] rounded-[40px] relative overflow-hidden"
          >
            {/* Sutil efecto de luz al fondo al hacer hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h2 className="text-xl font-bold text-white tracking-widest uppercase mb-2 group-hover:text-blue-500 transition-colors">
              {card.title}
            </h2>
            <p className="pt-5 text-gray-400 leading-relaxed font-light text-sm sm:text-base">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Core;
