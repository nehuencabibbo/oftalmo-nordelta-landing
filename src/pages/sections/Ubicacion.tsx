import { Navigation, MapPin, Building2, PhoneCall } from "lucide-react";
import { PhoneNumber, PhoneNumberDisplay } from "../../constants";

export default function Ubicacion() {
  const openInMaps = () => {
    window.open("https://maps.app.goo.gl/Wh1MhfQVphojvN5y5", "_blank");
  };

  return (
    <div
      id="ubicacion"
      className="flex flex-col w-full min-h-screen bg-primary items-center px-6 md:px-10 pt-6 pb-12 md:pt-12 md:pb-16 gap-10"
    >
      <div className="flex flex-col gap-10 md:gap-12 w-full max-w-5xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-custom-white text-5xl font-semibold text-shadow-md">
            Ubicación
          </h2>
          <p className="text-center text-custom-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Nos encontramos en el corazón de Nordelta. Cerca del Centro
            Comercial.
          </p>
        </div>
        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          <div className="flex items-start gap-3 bg-custom-white/10 border border-border rounded-2xl p-4 md:p-6 text-custom-white shadow-lg">
            <MapPin size={30} className="shrink-0 text-accent mt-1" />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Dirección</h3>
              <p className="text-sm text-custom-white/80">
                Pje. de las Ciencias 75, B1670 Rincón de Milberg, Provincia de
                Buenos Aires.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-custom-white/10 border border-border rounded-2xl p-4 md:p-6 text-custom-white shadow-lg">
            <Building2 size={30} className="shrink-0 text-accent mt-1" />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Edificio</h3>
              <p className="text-sm text-custom-white/80">
                North Coral Plaza · 4to Piso · Oficina 45.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-custom-white/10 border border-border rounded-2xl p-4 md:p-6 text-custom-white shadow-lg">
            <PhoneCall size={30} className="shrink-0 text-accent mt-1" />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Contacto</h3>
              <a
                href={`tel:${PhoneNumber}`}
                className="text-sm text-custom-white/80 tracking-wide"
              >
                {PhoneNumberDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl px-0 md:px-4 flex-1 flex">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-border flex-1">
          <div className="relative h-full min-h-[280px] md:min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.493863893361!2d-58.73033502330959!3d-34.51268485292881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd16a8c044d7%3A0xb157a8f3d6c8b98b!2sPje.%20de%20las%20Ciencias%2075%2C%20B1670%20Buenos%20Aires%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700440332301!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la clínica"
              className="grayscale-30"
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
