import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Inicialización del SDK
  useEffect(() => {
    emailjs.init({
      publicKey: "rnkiCa8F4TaJYzbyy",
    });
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_zrngpsn";
    const TEMPLATE_ID = "template_nq3vstd";
    const PUBLIC_KEY = "nB8OW3chZIFnC3CJA";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        // Reset del mensaje de éxito tras 5 segundos
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch((error) => {
        console.error("CRITICAL ERROR:", error);
        alert("UPLINK FAILED: Connection rejected by the terminal.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 py-24">
      {/* Glow Ambiental Dinámico */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] transition-colors duration-1000 blur-[150px] pointer-events-none ${isSuccess ? "bg-green-500/10" : "bg-blue-600/10"}`}
      />

      <div className="relative z-10 w-full max-w-5xl bg-[#0a0a0c]/80 backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col lg:grid lg:grid-cols-5">
        {/* Panel Lateral: System Info */}
        <div className="lg:col-span-2 p-8 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-br from-blue-500/[0.03] to-transparent">
          <div>
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <span
                className={`w-2 h-2 rounded-full ${isSending ? "bg-yellow-500 animate-ping" : isSuccess ? "bg-green-500 shadow-[0_0_8px_#22c55e]" : "bg-blue-500 animate-pulse"}`}
              ></span>
              <p className="text-blue-400 font-mono text-[10px] uppercase tracking-[4px]">
                {isSending
                  ? "Uplinking..."
                  : isSuccess
                    ? "Transmission.Sent"
                    : "System.Ready"}
              </p>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter leading-tight lg:leading-[1.1] mb-6 uppercase">
              Start <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700 italic">
                Project
              </span>
            </h2>
            <p className="text-gray-400 text-sm lg:text-base font-light leading-relaxed max-w-[280px]">
              Ready to deploy your next digital foundation? Send the payload and
              let's stabilize the node.
            </p>
          </div>

          <div className="hidden lg:block pt-10 font-mono">
            <div className="text-[9px] text-gray-600 space-y-1 uppercase tracking-widest">
              <p>Terminal: AZOTH</p>
              <p>Status: Awaiting_Data</p>
            </div>
          </div>
        </div>

        {/* Panel Derecho: Command Input */}
        <div className="lg:col-span-3 p-8 lg:p-16 flex flex-col justify-center bg-black/20">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-[9px] font-mono text-blue-400/50 uppercase tracking-[3px] ml-1">
                  Identity_UID
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="AGENT_NAME"
                  required
                  className="bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-mono text-sm placeholder:text-gray-800"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[9px] font-mono text-blue-400/50 uppercase tracking-[3px] ml-1">
                  Return_Path
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL@NODE.COM"
                  required
                  className="bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-mono text-sm placeholder:text-gray-800"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-[9px] font-mono text-blue-400/50 uppercase tracking-[3px] ml-1">
                Payload_Data
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="DESCRIBE_PROJECT_GOALS..."
                required
                className="bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-mono text-sm resize-none placeholder:text-gray-800"
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSending || isSuccess}
                className={`relative w-full overflow-hidden group py-4 rounded-xl border transition-all duration-500 font-mono text-xs uppercase tracking-[6px] 
                  ${
                    isSuccess
                      ? "border-green-500/50 bg-green-500/10 text-green-400"
                      : "border-blue-500/30 bg-blue-500/5 text-blue-400 hover:border-blue-400 hover:bg-blue-500/10"
                  } 
                  disabled:cursor-not-allowed`}
              >
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <span className="relative z-10">
                  {isSending
                    ? "ESTABLISHING_LINK..."
                    : isSuccess
                      ? "UPLINK_COMPLETE"
                      : "EXECUTE_TRANSMISSION"}
                </span>

                {/* Glow Dinámico */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 ${isSuccess ? "bg-green-500/20" : "bg-blue-500/20"}`}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
