import consultorioPano from "../../assets/consultorio-panoramica-gemini-text-removal.jpg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${consultorioPano})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Primary Color Overlay with Blur Effect */}
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />

      {/* Content Container */}
      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Your content goes here */}
      </div>
    </section>
  );
}
