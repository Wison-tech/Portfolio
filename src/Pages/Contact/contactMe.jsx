import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Paso 1: Inicialización robusta del SDK
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

    const SERVICE_ID = 'service_avbx9fi';
    const TEMPLATE_ID = 'template_ulk063k';
    const PUBLIC_KEY = 'rnkiCa8F4TaJYzbyy'; // Pasamos la llave aquí para evitar errores de validación

    // Paso 2: Envío forzando el uso de la Public Key
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        alert('DATA UPLINK SUCCESSFUL: Message transmitted to AZOTH node.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('CRITICAL ERROR:', error);
        alert('UPLINK FAILED: Connection rejected by the terminal.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden top-20 flex items-center justify-center px-4 py-30">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-5xl bg-[#0a0a0c]/80 backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col lg:grid lg:grid-cols-5">
        
        {/* Panel Lateral Izquierdo */}
        <div className="lg:col-span-2 p-8 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-br from-blue-500/[0.03] to-transparent">
          <div>
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 notranslate">
              <span className={`w-2 h-2 rounded-full ${isSending ? 'bg-yellow-500 animate-ping' : 'bg-blue-500 animate-pulse'}`}></span>
              <p className="text-[#3b82f6] font-mono text-[10px] uppercase tracking-[4px]">
                {isSending ? 'Uplinking...' : 'System.Online'}
              </p>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter leading-tight lg:leading-[1.1] mb-6">
              Let's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">Connect</span>
            </h2>
            <p className="text-gray-400 text-base font-light leading-relaxed max-w-full lg:max-w-[300px]">
              Have an idea in mind? Send me a message and let's optimize the next node together.
            </p>
          </div>

          <div className="hidden lg:block pt-10 notranslate">
            <p className="text-[11px] font-mono text-gray-600 tracking-[5px] uppercase">
              Terminal Access // 2026
            </p>
          </div>
        </div>

        {/* Panel Derecho: Formulario */}
        <div className="lg:col-span-3 p-8 lg:p-16 flex flex-col justify-center">
          <form ref={form} id="contact-form" onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-[9px] font-mono text-blue-400/50 uppercase tracking-[3px] ml-1 notranslate">
                  Identity_UID
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-700 w-full"
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-[9px] font-mono text-blue-400/50 uppercase tracking-[3px] ml-1 notranslate">
                  Return_Path
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@email.com"
                  required
                  className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-700 w-full"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-[9px] font-mono text-blue-400/50 uppercase tracking-[3px] ml-1 notranslate">
                Payload_Data
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                required
                className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none placeholder:text-gray-700 w-full"
              ></textarea>
            </div>

            <div className="pt-2">
              {/* Nuevo diseño de botón: Cyber-Minimalist */}
              <button
                type="submit"
                disabled={isSending}
                className="relative w-full overflow-hidden group py-4 lg:py-5 rounded-xl border border-blue-500/30 bg-blue-500/5 transition-all duration-500 hover:border-blue-400 hover:bg-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* Efecto de barrido de luz */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="relative z-10 text-xs uppercase tracking-[4px] lg:tracking-[8px] text-blue-400 font-light group-hover:text-white transition-colors">
                  {isSending ? 'Establishing Link...' : 'Execute Transmission'}
                </span>
                
                {/* Glow exterior al hacer hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-md bg-blue-500/20 transition-opacity duration-500" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;