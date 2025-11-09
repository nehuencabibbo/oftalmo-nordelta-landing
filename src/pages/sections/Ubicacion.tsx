import { Navigation, MapPin, Building2 } from "lucide-react";
import consultorioImage from "../../assets/consultorio-panoramica-gemini-text-removal.jpg";

export default function Ubicacion() {
  const openInMaps = () => {
    window.open("https://maps.app.goo.gl/Wh1MhfQVphojvN5y5", "_blank");
  };

  return (
    <div
      id="ubicacion"
      className="flex flex-col w-full min-h-screen bg-primary items-center px-6 md:px-10 pt-4 pb-6 md:pt-6 md:pb-8 gap-4"
    >
      <div className="flex flex-col gap-4 md:gap-6 w-full max-w-6xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-custom-white text-5xl font-semibold text-shadow-md">
            Ubicación
          </h2>
          <p className="tracking-wide text-center text-custom-white max-w-3xl mx-auto text-md text-shadow-md">
            Nos encontramos en{" "}
            <span className="tracking-wide text-accent font-semibold">
              Pje. de las Ciencias 75, B1670 Rincón de Milberg, Provincia de
              Buenos Aires.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-8 w-full lg:flex-1 lg:min-h-0">
          <div className="relative flex-1">
            <div className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-2xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.493863893361!2d-58.73033502330959!3d-34.51268485292881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd16a8c044d7%3A0xb157a8f3d6c8b98b!2sPje.%20de%20las%20Ciencias%2075%2C%20B1670%20Buenos%20Aires%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700440332301!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la clínica"
                className="absolute inset-0 h-full w-full grayscale-30"
              />
              <button
                onClick={openInMaps}
                className="cta-button bg-accent!  flex justify-center items-center hover:cursor-pointer absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Abrir en Google Maps
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:w-[32%] lg:overflow-y-auto">
            <section className="flex flex-col gap-2 text-custom-white">
              <h3 className="text-lg font-semibold tracking-wide">
                ¿Dónde estamos?
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin size={22} className="shrink-0 text-accent mt-0.5" />
                  <p className="text-sm text-custom-white/80 leading-relaxed">
                    Pje. de las Ciencias 75, B1670 Rincón de Milberg, Provincia
                    de Buenos Aires.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Building2
                    size={22}
                    className="shrink-0 text-accent mt-0.5"
                  />
                  <p className="text-sm text-custom-white/80 leading-relaxed">
                    North Coral Plaza · 4to Piso · Oficina 45.
                  </p>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-2">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={consultorioImage}
                  alt="Vista del edificio"
                  className="h-32 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-custom-white tracking-wide">
                  Edificio North Coral Plaza
                </h3>
                <p className="text-sm text-custom-white/80 text-justify leading-relaxed">
                  El edificio se encuentra ubicado en el centro comercial de
                  nordelta. Nuestras oficinas se encuentran en el{" "}
                  <span className="tracking-wide text-accent font-semibold">
                    4to piso. Oficina 45.
                  </span>
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-2">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={consultorioImage}
                  alt="Entrada principal"
                  className="h-32 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-custom-white tracking-wide">
                  Entrada Principal
                </h3>
                <p className="text-sm text-custom-white/80 text-justify leading-relaxed">
                  Esta es la entrada principal del edificio, se encuentra del
                  lado del estacionamiento. Para entrar tocar el timbre y luego
                  subir por el ascensor.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
