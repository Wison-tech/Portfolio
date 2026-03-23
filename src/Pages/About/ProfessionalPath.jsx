import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "boxicons/css/boxicons.min.css";

const CareerPath = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const expertise = [
    { area: "Mobile Development", tools: "Kotlin, Jetpack Compose, Flutter" },
    {
      area: "Frontend Architecture",
      tools: "React, Next.js, Tailwind CSS, Spline",
    },
    { area: "Backend Systems", tools: "Django, Node.js, Laravel, .NET Core" },
    { area: "Cloud & Devops", tools: "Docker, PostgreSQL, AWS, CI/CD" },
    { area: "AI Innovation", tools: "RAG Systems, Neural Networks, AI Agents" },
  ];

  return (
    <section className="relative pt-20 pb-24 px-6 sm:px-10 lg:px-20 text-white overflow-x-clip">
      {/* Glow ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header de la sección */}
        <div className="mb-24" data-aos="fade-up">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-blue-500"></span>
            <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-[10px] lg:text-xs">
              Studio Legacy & Expertise
            </span>
          </div>
          <h2 className="text-5xl lg:text-8xl font-bold tracking-tighter leading-[0.9] uppercase">
            PROFESSIONAL <br />
            <span
              translate="no"
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
            >
              PATHWAY
            </span>
          </h2>
        </div>

        {/* Grid de contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          {/* Lado A: Cronología / Timeline */}
          <div className="space-y-16">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.5em] text-gray-500 mb-10">
              / Chronology
            </h4>

            <div className="space-y-12">
              {/* AZOTH Launch */}
              <div
                className="relative pl-8 border-l border-blue-500/30"
                data-aos="fade-up"
              >
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-2 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                <span className="text-[10px] text-blue-400 font-mono tracking-widest uppercase">
                  Feb 2026 — Present
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold mt-1 tracking-tight">
                  AZOTH Studio
                </h3>
                <p className="text-blue-500/80 text-[11px] font-mono mt-1 uppercase tracking-tighter">
                  Founder & Lead Architect
                </p>
                <p className="text-gray-400 mt-3 text-sm lg:text-base leading-relaxed max-w-md italic">
                  Architecting enterprise-grade digital systems and
                  high-performance SaaS solutions for global markets.
                </p>
              </div>

              {/* Packvision - Background Legacy */}
              <div
                className="relative pl-8 border-l border-white/10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="absolute w-2 h-2 bg-gray-600 rounded-full -left-[4.5px] top-2"></div>
                <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                  Apr 2024 — Feb 2026
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold mt-1 tracking-tight">
                  Packvision SAS
                </h3>
                <p className="text-blue-500/80 text-[11px] font-mono mt-1 uppercase tracking-tighter">
                  Software Engineer
                </p>
                <p className="text-gray-400 mt-3 text-sm lg:text-base leading-relaxed max-w-md">
                  Contributed to large-scale backend infrastructure and
                  cross-platform performance optimization for business software.
                </p>
              </div>

              {/* Academic & Tech Foundation */}
              <div
                className="relative pl-8 border-l border-white/10"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="absolute w-2 h-2 bg-gray-800 rounded-full -left-[4.5px] top-2"></div>
                <span className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">
                  Apr 2022 — Apr 2024
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold mt-1 tracking-tight">
                  SENA CBA
                </h3>
                <p className="text-gray-500 text-[11px] font-mono mt-1 uppercase tracking-tighter italic">
                  Software Technologist
                </p>
                <p className="text-gray-400 mt-3 text-sm lg:text-base leading-relaxed max-w-md font-light">
                  Solid foundation in software analysis, complex algorithms, and
                  architectural patterns that define our studio's standards.
                </p>
              </div>
            </div>
          </div>

          {/* Lado B: Matrix de Capacidades del Estudio */}
          <div className="relative lg:pt-10">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.5em] text-gray-500 mb-10">
              / Studio Capabilities
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  className="group relative p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] rounded-2xl hover:border-blue-500/30 transition-all duration-500"
                >
                  <p className="text-blue-500/60 font-mono text-[9px] uppercase tracking-[0.3em] mb-2 group-hover:text-blue-400 transition-colors">
                    {item.area}
                  </p>
                  <p className="text-lg lg:text-xl text-gray-300 font-medium tracking-tight leading-snug group-hover:text-white">
                    {item.tools}
                  </p>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <i className="bx bx-chevron-right text-blue-500"></i>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Status Card */}
            <div
              className="mt-12 p-8 border border-blue-500/10 rounded-2xl bg-blue-500/[0.02] relative overflow-hidden"
              data-aos="zoom-in"
            >
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full"></div>
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <p className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">
                  Active R&D
                </p>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our R&D unit is currently scaling{" "}
                <strong className="text-gray-300">Kotlin Multiplatform</strong>{" "}
                performance and developing proprietary{" "}
                <strong className="text-gray-300">RAG architectures</strong> for
                enterprise-level AI agents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPath;
