import { Helmet } from "react-helmet-async";
import ContactMe from "./contactMe";

const Contact = () => {
  // Extraemos las variables de entorno de Vite
  const siteUrl = import.meta.env.VITE_SITE_URL;
  const googleVerify = import.meta.env.VITE_GOOGLE_VERIFICATION;
  const ogImage = import.meta.env.VITE_OG_IMAGE;

  // URL específica para esta página
  const canonicalUrl = `${siteUrl}/contact`;

  return (
    <main className="relative w-full min-h-screen overflow-x-clip ">
      <Helmet>
        <title>Contact | Wilson Rodriguez - AZOTH Solutions</title>

        {/* Verificación de Google desde .env */}
        <meta name="google-site-verification" content={googleVerify} />

        <meta
          name="description"
          content="Do you have a project in mind? Get in touch with me for Full Stack development services, technical consulting, or professional collaborations."
        />

        {/* URL canónica dinámica */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph dinámico */}
        <meta property="og:title" content="Contact Wilson Rodriguez | AZOTH" />
        <meta
          property="og:description"
          content="Let's talk about your next digital project. High-quality web and mobile development."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
      </Helmet>

      {/* Decoración Visual */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt=""
        role="presentation"
        loading="lazy"
      />

      {/* Efecto de resplandor (Blur) */}
      <div className="h-0 w-[20rem] md:w-[40rem] absolute top-[10%] md:top-[20%] right-[-10%] md:right-[-5%] shadow-[0_0_900px_22px_#005FFA] -rotate-[30deg] -z-10"></div>

      <ContactMe />
    </main>
  );
};

export default Contact;
