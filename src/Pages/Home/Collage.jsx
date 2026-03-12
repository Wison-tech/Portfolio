


const BentoItem = ({ children, span = "md:col-span-1" }) => (
    
  <div
    data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom"
    className={`${span} bg-[#141415] rounded-3xl p-8 border border-white/10 shadow-lg overflow-hidden flex flex-col justify-center transition-all hover:border-blue-500/40 hover:bg-[#161616] group relative`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 h-full flex flex-col justify-center">
      {children}
    </div>
  </div>
);

const Collage = () => {

  return (
    <main className="min-h-screen py-12 px-4 sm:px-10 lg:px-20 text-gray-300">
      <section className="max-w-max mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white uppercase">
            Development Philosophy
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[380px]">
          {/* Block 1: Architecture & Scalability */}
          <BentoItem span="md:col-span-2">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                  Scalable Architecture
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                I design systems based on **SOLID** principles and **Clean
                Architecture**. My focus lies in creating decoupled services
                that allow for constant software evolution without compromising
                core stability.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Dry Principles",
                  "Design Patterns",
                  "Unit Testing",
                  "Modularized",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-500/5 border border-blue-500/20 text-blue-300 rounded-lg text-[11px] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoItem>

          {/* Block 2: 3D Design & Blender Mastery */}
          <BentoItem>
            <div className="flex flex-col h-full justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400 font-bold text-xs font-mono uppercase tracking-widest">
                    3D Workflow
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Blender Integration
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Crafting high-fidelity 3D assets and environments. I leverage
                  **Blender** to bridge the gap between static design and
                  immersive digital experiences.
                </p>
              </div>
              <div className="relative h-24 mt-8 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden">
                {/* Wireframe effect */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="relative group-hover:scale-110 transition-transform duration-500">
                  <svg
                    className="w-12 h-12 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
            </div>
          </BentoItem>

          {/* Block 3: Performance & Optimization */}
          <BentoItem>
            <div className="flex flex-col h-full justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Efficiency First
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Implementing caching strategies and database query
                  optimization to minimize latency in high-demand environments.
                </p>
              </div>
              <div className="bg-black/40 border border-white/5 rounded-2xl p-4 font-mono text-[10px] space-y-2 mt-8">
                <div className="flex justify-between text-gray-500 font-bold tracking-tighter">
                  <span>OPTIMIZATION_ENGINE</span>
                  <span className="text-green-500">ACTIVE</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full">
                  <div className="h-full w-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                </div>
              </div>
            </div>
          </BentoItem>

          {/* Block 4: UX & Experience-Driven Dev */}
          <BentoItem span="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">
                  Visual Consistency
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Building interfaces that prioritize usability. I apply
                  **Atomic Design** workflows to ensure visual harmony across
                  every component, from 2D UI to 3D spatial elements.
                </p>
                <div className="flex items-center gap-6 border-t border-white/10 pt-4">
                  <div className="flex flex-col text-center">
                    <span className="text-white font-bold text-lg leading-tight text-left">
                      W3C
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase font-bold text-left tracking-widest">
                      Standards
                    </span>
                  </div>
                  <div className="flex flex-col text-center">
                    <span className="text-white font-bold text-lg leading-tight text-left">
                      SEO
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase font-bold text-left tracking-widest">
                      Semantic
                    </span>
                  </div>
                  <div className="flex flex-col text-center">
                    <span className="text-white font-bold text-lg leading-tight text-left">
                      A11Y
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase font-bold text-left tracking-widest">
                      Friendly
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative h-48 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-8 gap-1 p-2 opacity-20">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-full bg-blue-500/10 border border-blue-500/20 rounded-sm"
                    />
                  ))}
                </div>
                <div className="relative z-10 text-center space-y-2">
                  <div className="px-4 py-2 bg-[#18181b] border border-white/10 rounded-lg shadow-2xl">
                    <span className="text-xs font-mono text-blue-400">
                      DESIGN_SYSTEM_V1.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </BentoItem>
        </div>
      </section>
    </main>
  );
};

export default Collage;
