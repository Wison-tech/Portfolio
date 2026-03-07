import Hero from "./Hero";
import Stack from "./Stack";
import Core from "./Core";
import Collage from "./Collage";

const Home = () => {
  return (
    <main>
      {/* Gradient Image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="Gradient-Image"
      />

      {/* Blur Effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_22px_#005FFA] -rotate-[30deg] -z-10"></div>

      <Hero />
      <Stack />
      <Core />
      <Collage />
      
    </main>
  );
};

export default Home;