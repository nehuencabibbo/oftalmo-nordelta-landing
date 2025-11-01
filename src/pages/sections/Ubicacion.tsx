import { Navigation } from "lucide-react";

export default function Ubicacion() {
  const openInMaps = () => {
    window.open("https://maps.app.goo.gl/Wh1MhfQVphojvN5y5", "_blank");
  };

  return (
    <div id="ubicacion" className="flex flex-col w-full h-screen bg-primary justify-center items-center p-8 gap-12">
        <div className="flex flex-col gap-6">
            <h2 className="text-center text-custom-white text-5xl font-semibold text-shadow-md">Ubicación</h2>
            <p className="text-shadow-lg text-md">Nos encontramos ubicados en <span className="text-accent font-bold">Pje. de las Ciencias 75, B1670 Rincón de Milberg, Provincia de Buenos Aires. 4to Piso Oficina 45.</span></p>
        </div>
        <div className="w-full h-screen px-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                <div className="relative h-140">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.493863893361!2d-58.73033502330959!3d-34.51268485292881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd16a8c044d7%3A0xb157a8f3d6c8b98b!2sPje.%20de%20las%20Ciencias%2075%2C%20B1670%20Buenos%20Aires%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700440332301!5m2!1ses-419!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de la clínica"
                    className="grayscale-[30%]"
                />

                {/* Button with absolute positioning*/}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 cta-button">
                    <button
                    onClick={openInMaps}
                    className="flex justify-center items-center hover:cursor-pointer"
                    >
                    <Navigation className="w-5 h-5 mr-2" />
                    Abrir en Google Maps
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}
