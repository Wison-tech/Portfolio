import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutDynamic = () => {
  useEffect(() => {
    AOS.init({ duration: 800,
        once:false
     });
  }, []);

  return (
    /* ELIMINADO: overflow-hidden (causante frecuente de scrolls internos si el padre tiene h-fija)
       CAMBIADO A: overflow-x-clip para evitar que el resplandor azul cree scroll horizontal 
       sin atrapar el scroll vertical.
    */
    <section className="relative pt-20 pb-8 lg:pb-24 px-6 sm:px-10 lg:px-20 text-white overflow-x-clip">
      
      {/* Background Decorative Element */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          
          {/* Left Column: Headline */}
          <div className="lg:sticky lg:top-24 w-full lg:w-1/3">
            <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-[10px] lg:text-xs mb-4 block" data-aos="fade-right">
              / My Story
            </span>
            
            <h2 translate="no" className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] lg:leading-[0.9] tracking-tighter uppercase break-words" data-aos="fade-up">
              CODE <br className="hidden lg:block" /> 
              <span translate="no" className="text-transparent inline-block" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                THAT 
              </span> <br className="hidden lg:block" /> 
              EVOLVES
            </h2>
            
            {/* Stats */}
            <div className="mt-8 lg:mt-16 flex gap-8 lg:gap-10 border-l border-blue-500/30 pl-5 lg:pl-6" data-aos="fade-up" data-aos-delay="200">
              <div>
                <p className="text-3xl lg:text-4xl font-bold">+2</p>
                <p className="text-[9px] lg:text-[10px] text-gray-500 uppercase tracking-widest leading-none">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold">+15</p>
                <p className="text-[9px] lg:text-[10px] text-gray-500 uppercase tracking-widest leading-none">Full Projects.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="w-full lg:w-2/3 space-y-12 lg:space-y-16 mt-8 lg:mt-0">
            <div data-aos="fade-left" data-aos-delay="100">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-gray-300">
                I am a developer who believes that <span className="text-white font-medium italic">technology is a functional art</span>. I don't just write lines of code; I build bridges between ideas and digital reality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              <div data-aos="fade-up" data-aos-delay="300" className="group">
                <h4 className="text-blue-500 font-bold mb-3 flex items-center gap-2 text-sm lg:text-base uppercase tracking-tighter">
                  <span className="h-[1px] w-4 bg-blue-500"></span> 01. Focus
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                  My work focuses on scalability. I leverage modern stacks like <strong>React and Django</strong> to ensure every product can grow seamlessly.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400" className="group">
                <h4 className="text-blue-500 font-bold mb-3 flex items-center gap-2 text-sm lg:text-base uppercase tracking-tighter">
                  <span className="h-[1px] w-4 bg-blue-500"></span> 02. Philosophy
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                  "Clean code" isn't a slogan; it's my standard. I write code with maintainability and technical elegance in mind.
                </p>
              </div>
            </div>

            {/* Main Tech Ecosystem */}
            <div className="pt-8 border-t border-white/5" data-aos="fade-in">
              <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] mb-6">Main Tech Ecosystem</p>
              <div className="flex flex-wrap gap-x-8 lg:gap-x-12 gap-y-4 opacity-40 grayscale hover:opacity-100 transition-opacity duration-700">
                <span translate="no" className="text-lg lg:text-2xl font-bold tracking-tighter">REACT</span>
                <span translate="no" className="text-lg lg:text-2xl font-bold tracking-tighter">FLUTTER</span>
                <span translate="no" className="text-lg lg:text-2xl font-bold tracking-tighter">DJANGO</span>
                <span translate="no" className="text-lg lg:text-2xl font-bold tracking-tighter">POSTGRESQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDynamic;