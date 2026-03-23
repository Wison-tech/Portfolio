import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import Stack from "./Stack";
import Core from "./Core";
import Collage from "./Collage";

const Home = () => {
  return (
    <main>
      <Helmet>
        {/* Título: Enfocado en la marca y el valor corporativo */}
        <title>
          AZOTH | Enterprise Software Architecture & Digital Systems
        </title>

        <meta
          name="google-site-verification"
          content="7MYpcBhTP4rNk6Sdokv6579T_t8LjrTjckD76CCjaqQ"
        />

        {/* Descripción: Eliminamos el enfoque en Wilson y lo ponemos en la solución */}
        <meta
          name="description"
          content="High-end digital engineering and scalable software architectures. Specialized in full-stack systems, cloud optimization, and AI-driven solutions for modern enterprises."
        />

        {/* URL canónica */}
        <link rel="canonical" href="https://azoth-dev.vercel.app/" />

        {/* Open Graph: Orientado a LinkedIn y networking profesional */}
        <meta
          property="og:title"
          content="AZOTH // Advanced Digital Engineering"
        />
        <meta
          property="og:description"
          content="Transforming complex business requirements into high-performance software. Scalable architectures, system integration, and visual engineering."
        />
        <meta property="og:url" content="https://azoth-dev.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Imagen OG: El alt ahora es corporativo */}
        <meta
          property="og:image"
          content="https://azoth-dev.vercel.app/og-expert.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="AZOTH - Advanced Engineering Solutions"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AZOTH Systems" />
        <meta
          name="twitter:description"
          content="Enterprise-grade software development and scalable digital architecture."
        />
        <meta
          name="twitter:image"
          content="https://azoth-dev.vercel.app/og-expert.png"
        />
      </Helmet>

      {/* Imagen de gradiente optimizada */}
      <img
        className="absolute top-0 right-0 opacity-40 -z-10"
        src="/gradient.png"
        alt=""
        role="presentation"
        fetchpriority="high"
      />

      {/* Efecto de Blur */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_22px_#005FFA] -rotate-[30deg] -z-10 opacity-30"></div>

      <Hero />
      <Stack />
      <Core />
      <Collage />
    </main>
  );
};

export default Home;
