import ContactMe from "./contactMe";

const Contact = () => {
  return (
    // overflow-x-hidden es vital para que los brillos no estiren la pantalla a la derecha
    <main className="relative w-full min-h-screen overflow-x-clip ">
      {/* Gradient Image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="Gradient-Image"
      />

      {/* Blur Effect - Ajustado para ser responsivo y no desbordar */}
      <div className="h-0 w-[20rem] md:w-[40rem] absolute top-[10%] md:top-[20%] right-[-10%] md:right-[-5%] shadow-[0_0_900px_22px_#005FFA] -rotate-[30deg] -z-10"></div>
      
      <ContactMe/>
    </main>
  );
};

export default Contact;