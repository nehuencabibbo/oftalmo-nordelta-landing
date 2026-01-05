// WebP responsive images
import consultorioPanoMobile from "../../assets/consultorio-panoramica-mobile.webp";
import consultorioPanoTablet from "../../assets/consultorio-panoramica-tablet.webp";
import consultorioPanoDesktop from "../../assets/consultorio-panoramica-desktop.webp";
// Fallback image
import consultorioPano from "../../assets/consultorio-panoramica.jpeg";
import { MamusWorkStartDate, OpeningDate } from "../../constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full flex items-center justify-center relative overflow-hidden"
      style={{
        height: "100dvh", // Dynamic viewport height - accounts for mobile browser UI
        minHeight: "100vh", // Fallback for older browsers
      }}
    >
      {/* Background Image */}
      <picture>
        <source
          type="image/webp"
          srcSet={`${consultorioPanoMobile} 640w, ${consultorioPanoTablet} 1024w, ${consultorioPanoDesktop} 1920w`}
          sizes="100vw"
        />
        <img
          src={consultorioPano}
          alt="Consultorio Oftalmo Nordelta"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>

      {/* Primary Color Overlay with Blur Effect */}
      <div
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        style={{
          transform: "translateX(0)", // Create compositing layer to prevent blur recalculation
          willChange: "backdrop-filter", // Hint browser to optimize blur rendering
        }}
      />

      {/* Content Container */}
      <div className="z-10 text-center px-4 w-full max-w-4xl mx-auto flex flex-col gap-5">
        <h1 className="text-white-soft text-shadow-lg/20 text-8xl max-[32rem]:text-7xl font-semibold">
          Oftalmo Nordelta
        </h1>
        <p className="text-white-soft text-shadow-lg text-lg max-[32rem]:text-base tracking-wide px-5 sm:px-20 xl:px-25">
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
