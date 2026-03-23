import React, { useReducer, useEffect, useCallback } from "react";

/**
 * Reducer para gestionar el estado de conexión del "Uplink".
 * Mantiene la interfaz sincronizada con la latencia real.
 */
const statusReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_STATUS":
      return { ...state, latency: action.latency, isStable: true };
    case "SET_ERROR":
      return { ...state, latency: "ERR", isStable: false };
    default:
      return state;
  }
};

const DynamicFooter = () => {
  const [status, dispatch] = useReducer(statusReducer, {
    latency: 0,
    isStable: true,
  });

  const currentYear = new Date().getFullYear();

  /**
   * Mide la latencia realizando un fetch ligero.
   * Usamos 'no-cors' y eliminamos caché para obtener resultados reales.
   */
  const measureLatency = useCallback(async (isMounted, controller) => {
    const start = Date.now();
    try {
      await fetch("https://www.google.com/favicon.ico", {
        mode: "no-cors",
        cache: "no-cache",
        signal: controller.signal,
      });

      if (isMounted) {
        dispatch({ type: "UPDATE_STATUS", latency: Date.now() - start });
      }
    } catch (e) {
      if (isMounted && e.name !== "AbortError") {
        dispatch({ type: "SET_ERROR" });
      }
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const runUpdate = () => measureLatency(isMounted, controller);

    runUpdate();
    const interval = setInterval(runUpdate, 8000);

    return () => {
      isMounted = false;
      controller.abort();
      clearInterval(interval);
    };
  }, [measureLatency]);

  return (
    <footer className="relative bg-[#0a0a0a] pt-16 pb-8 overflow-hidden border-t border-blue-500/10 font-sans">
      {/* Línea de gradiente superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-16 items-center md:items-start text-center md:text-left">
          {/* Identidad del Estudio */}
          <div className="space-y-4 w-full">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_#3b82f6]" />
              <span className="text-[10px] font-mono text-blue-500/80 uppercase tracking-[0.4em]">
                Studio Online // Global Access
              </span>
            </div>
            <h2
              translate="no"
              className="text-4xl md:text-5xl font-black text-white italic tracking-tighter leading-none"
            >
              AZOTH
            </h2>
            <p className="text-[10px] md:text-[11px] text-gray-500 font-mono leading-relaxed uppercase tracking-widest opacity-70">
              Enterprise Software Architecture{" "}
              <br className="hidden md:block" /> // Visual Engineering
            </p>
          </div>

          {/* Espaciador central */}
          <div className="hidden md:block"></div>

          {/* Canales Digitales y Acceso */}
          <div className="flex flex-col items-center md:items-end w-full space-y-8">
            <div className="flex gap-10 border-y md:border-y-0 border-white/5 py-4 md:py-0 w-full justify-center md:justify-end">
              <a
                href="https://github.com/Wison-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <span className="block text-[9px] text-gray-600 font-mono text-center md:text-right uppercase">
                  Source_Code
                </span>
                <span className="text-xs font-bold text-gray-400 group-hover:text-blue-400 transition-all tracking-[0.2em]">
                  GITHUB
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/wilson-mauricio-rodriguez-rodriguez"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <span className="block text-[9px] text-gray-600 font-mono text-center md:text-right uppercase">
                  Network_ID
                </span>
                <span className="text-xs font-bold text-gray-400 group-hover:text-blue-400 transition-all tracking-[0.2em]">
                  LINKEDIN
                </span>
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <span className="text-[9px] text-blue-500/40 font-mono uppercase tracking-[0.3em] mb-2">
                Business Inquiry // Encrypted
              </span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=azothw@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm text-gray-300 font-mono hover:text-blue-400 transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/[0.02] flex items-center gap-2"
              >
                <i className="bx bx-terminal text-blue-500"></i>{" "}
                azothw@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Créditos y Sistema de Monitorización (Uplink) */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
          <div className="text-center space-y-1">
            <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
              AZOTH Studio // Developed by Wilson Rodriguez
            </p>
            <p className="text-[8px] text-gray-700 font-mono uppercase">
              © {currentYear} // Software Architecture & Visual Design
            </p>
          </div>

          {/* Cápsula de Status de Conexión */}
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
            <div className="flex flex-col items-start border-r border-white/10 pr-3">
              <span className="text-[7px] text-gray-600 font-mono uppercase leading-none">
                Uplink
              </span>
              <span className="text-[10px] text-blue-500 font-mono font-bold tracking-tighter leading-none">
                {status.isStable ? "STABLE_CONNECTION" : "RETRYING_PROTOCOL"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`h-1.5 w-1.5 rounded-full ${
                  status.latency < 150
                    ? "bg-green-500 shadow-[0_0_8px_#22c55e]"
                    : "bg-yellow-500"
                } animate-pulse`}
              />
              <span className="text-[11px] text-gray-300 font-mono font-bold">
                {status.latency !== 0 ? `${status.latency}ms` : "---"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DynamicFooter;
