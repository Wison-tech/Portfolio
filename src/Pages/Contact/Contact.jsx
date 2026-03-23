import { Helmet } from 'react-helmet-async'; // Importante para SEO
import ContactMe from "./contactMe";

const Contact = () => {
  return (
    <main className="relative w-full min-h-screen overflow-x-clip ">
      <Helmet>
        {/* Título específico para la página de contacto */}
        <title>Contact | Wilson Rodriguez - AZOTH Solutions</title>
        
        {/* Descripción enfocada en la acción de contactar */}
        <meta name="description" content="Do you have a project in mind? Get in touch with me for Full Stack development services, technical consulting, or professional collaborations." />
        
        {/* URL canónica específica */}
        <link rel="canonical" href="https://azoth-dev.vercel.app/contact" />

        {/* Open Graph para que al compartir esta sección específica se vea bien */}
        <meta property="og:title" content="Contact Wilson Rodriguez | AZOTH" />
        <meta property="og:description" content="Let's talk about your next digital project. High-quality web and mobile development." />
        <meta property="og:url" content="https://azoth-dev.vercel.app/contact" />
        <meta property="og:image" content="https://azoth-dev.vercel.app/og-expert.png" />
      </Helmet>

      {/* Gradient Image - SEO: Marcada como decorativa */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="" 
        role="presentation"
        loading="lazy"
      />

      {/* Blur Effect - Ajustado para ser responsivo y no desbordar */}
      <div className="h-0 w-[20rem] md:w-[40rem] absolute top-[10%] md:top-[20%] right-[-10%] md:right-[-5%] shadow-[0_0_900px_22px_#005FFA] -rotate-[30deg] -z-10"></div>
      
      <ContactMe/>
    </main>
  );
};

export default Contact;