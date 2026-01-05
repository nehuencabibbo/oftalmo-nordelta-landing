import { Navigation, MapPin, Building2 } from "lucide-react";
// WebP responsive images
import consultorioPanoMobile from "../../assets/consultorio-panoramica-mobile.webp";
import consultorioPanoTablet from "../../assets/consultorio-panoramica-tablet.webp";
import consultorioPanoDesktop from "../../assets/consultorio-panoramica-desktop.webp";
import consultorioEntradaMobile from "../../assets/consultorio-entrada-mobile.webp";
import consultorioEntradaTablet from "../../assets/consultorio-entrada-tablet.webp";
import consultorioEntradaDesktop from "../../assets/consultorio-entrada-desktop.webp";
// Fallback images
import consultorioImage from "../../assets/consultorio-panoramica.jpeg";
import consultorioEntradaImage from "../../assets/consultorio-entrada.jpeg";
import { Address, MapsUrl, MapsEmbedSrc } from "../../constants";

export default function Ubicacion() {
  const openInMaps = () => {
    window.open(MapsUrl, "_blank");
  };

  return (
    <div
      id="ubicacion"
      className="flex flex-col w-full min-h-screen bg-primary items-center px-6 md:px-10 pt-4 pb-6 md:pt-6 md:pb-8 gap-4"
    >
      <div className="flex flex-col gap-4 md:gap-6 w-full max-w-6xl">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-white-soft leading-tight text-5xl font-semibold text-shadow-md">
            ¿Dónde estamos?
          </h2>
          <p className="tracking-wide text-center text-white-soft max-w-4xl mx-auto text-lg text-shadow-md">
            Nos encontramos en{" "}
            <span className="tracking-wide text-accent font-semibold">
              {Address}
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-8 w-full lg:flex-1 lg:min-h-0">
          <div className="relative flex-1">
            <div className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-2xl border border-border">
              <iframe
                src={MapsEmbedSrc}
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
                className="cta-button bg-accent! flex justify-center items-center hover:cursor-pointer absolute max-[335px]:bottom-[15%] bottom-[15%] min-[473px]:bottom-[20%] sm:bottom-[20%] md:bottom-[22%] lg:bottom-[29%] left-1/2 -translate-x-1/2 z-10 text-sm min-[385px]:text-base"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Abrir en Google&nbsp;Maps
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:w-[32%] lg:overflow-y-auto">
            <section className="flex flex-col gap-2 text-white-soft">
              <h3 className="text-lg font-semibold tracking-wide">
                ¿Cómo encontrarnos?
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin size={22} className="shrink-0 text-accent mt-0.5" />
                  <p className="text-base text-white-soft/80 leading-relaxed">
                    {Address}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Building2
                    size={22}
                    className="shrink-0 text-accent mt-0.5"
                  />
                  <p className="text-base text-white-soft/80 leading-relaxed">
                    North Coral Plaza · 4to Piso · Oficina 45.
                  </p>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-2">
              <div className="overflow-hidden rounded-3xl">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${consultorioPanoMobile} 640w, ${consultorioPanoTablet} 1024w, ${consultorioPanoDesktop} 1920w`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 32vw"
                  />
                  <img
                    src={consultorioImage}
                    alt="Vista del edificio North Coral Plaza"
                    className="lg:h-40 sm:h-80 h-60 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-white-soft tracking-wide">
                  Edificio North Coral Plaza
                </h3>
                <p className="text-base text-white-soft/80 text-justify leading-relaxed">
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
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${consultorioEntradaMobile} 640w, ${consultorioEntradaTablet} 1024w, ${consultorioEntradaDesktop} 1600w`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 32vw"
                  />
                  <img
                    src={consultorioEntradaImage}
                    alt="Entrada principal del consultorio"
                    className="lg:h-40 sm:h-80 h-60 w-full object-cover object-bottom"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-white-soft tracking-wide">
                  Entrada Principal
                </h3>
                <p className="text-base text-white-soft/80 text-justify leading-relaxed">
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
