import consultorioPano from "../../assets/consultorio-panoramica-gemini-text-removal.jpg";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={consultorioPano}
        alt="Consultorio Panorámica"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Primary Color Overlay with Blur Effect */}
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm"></div>

      {/* Content Container - Add your text here */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* Your content goes here */}
      </div>
    </div>
  );
}
