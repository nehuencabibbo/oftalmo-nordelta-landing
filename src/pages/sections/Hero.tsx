import consultorioPano from "../../assets/consultorio-panoramica-gemini-text-removal.jpg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="w-full h-screen flex items-start justify-center pt-72"
      style={{
        backgroundImage: `url(${consultorioPano})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Primary Color Overlay with Blur Effect */}
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />

      {/* Content Container */}
      <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col gap-5">
        <h1 className="text-shadow-lg/20 text-8xl font-semibold">Oftalmo Nordelta</h1>
        <p className="text-shadow-lg text-md tracking-wide px-35">
          Cuidando la visión de nuestros pacientes hace más de <span className="font-bold text-accent">7 años</span>. Junto a profesionales con mas de <span className="font-bold text-accent">20 años</span> de experiencia. 
        </p>
      </div>
    </section>
  );
}
