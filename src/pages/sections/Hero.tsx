import consultorioPano from "../../assets/consultorio-panoramica.jpeg";
import { MamusWorkStartDate, OpeningDate } from "../../constants";

export default function Hero() {
  return (
    <section
      id="hero"
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
      <div className="z-10 text-center px-4 w-full max-w-4xl mx-auto flex flex-col gap-5">
        <h1 className="text-custom-white text-shadow-lg/20 text-8xl max-[32rem]:text-7xl font-semibold">
          Oftalmo Nordelta
        </h1>
        <p className="text-custom-white text-shadow-lg text-lg max-[32rem]:text-md tracking-wide px-5 sm:px-20 xl:px-25">
          Cuidando la visión de nuestros pacientes hace más de{" "}
          <span className="font-bold text-accent">
            {new Date().getFullYear() - OpeningDate.getFullYear()} años
          </span>
          , respaldados por profesionales con más de{" "}
          <span className="font-bold text-accent">
            {new Date().getFullYear() - MamusWorkStartDate.getFullYear()} años
          </span>{" "}
          de experiencia en el sector
        </p>
      </div>
    </section>
  );
}
