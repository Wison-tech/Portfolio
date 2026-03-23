

const Core = () => {

  const cards = [
    {
      id: "agile-collaboration",
      title: "Agile & Collaboration",
      description:
        "Expertise in Scrum and Agile methodologies, focused on delivering high-quality software through iterative cycles. Committed to team collaboration, proactive communication, and shared goals to ensure project success.",
      data_os: "fade-up",
    },
    {
      id: "code-quality",
      title: "Code Quality & Git",
      description:
        "Strong advocate for Clean Code principles and Git version control. Experienced in Software Testing and debugging to sectiontain robust production environments and ensure long-term code sectiontainability.",
      data_os: "fade-up",
    },
    {
      id: "scalable-systems",
      title: "Scalable Systems",
      description:
        "Design and implementation of RESTful APIs and scalable backend architectures. Focused on building high-performance systems with optimized PostgreSQL databases and enterprise-level logic.",
      data_os: "fade-up",
    },
  ];

  return (
    <section
      className="pt-10 lg:pt-0 flex lg:mt-20 flex-col
  items-center justify-center
  sm:px-10 lg:px-15"
    >
      <div data-aos="fade-up" data-aos-duration="1000">
        <header className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
            Core Principles
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </header>
        <p
          className="text-base sm:text-lg tracking-wider
        text-gray-400 max-w-[25rem] lg:max-w-[30rem] text-center py-4 px-4"
        >
          Professional standards and methodologies applied to build reliable,
          high-quality software.
        </p>
      </div>
      <div
        className="flex flex-wrap justify-center gap-6 md:gap-8 py-10 w-full max-w-8xl
      mx-auto p-4 md:p-8 lg:p-8"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            data-aos={card.data_os}
            data-aos-offset="50"
            data-aos-easing="ease-in-out"
            className="flex-1 min-w-[100%] md:min-w-[45%] lg:min-w-[30%] flex flex-col justify-center
            items-center text-center p-8 border border-gray-600 transition-all duration-300 hover:border-white rounded-[30px]"
          >
            <h2 className="text-2xl font-medium text-white">{card.title}</h2>
            <p className="pt-5 text-gray-400 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Core;
