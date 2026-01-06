// WebP logos
import medicusLogoWebp from "../../assets/medicus-logo.webp";
import osdeLogoWebp from "../../assets/osde-logo.webp";
import omintLogoWebp from "../../assets/omint-logo.webp";
import italianoLogoWebp from "../../assets/hospital-italiano-logo.webp";
// Fallback logos
import medicusLogo from "../../assets/medicus-logo.png";
import osdeLogo from "../../assets/osde-logo.png";
import omintLogo from "../../assets/omint-logo.png";
import italianoLogo from "../../assets/hospital-italiano-logo.png";

const coverageLogos = [
  { srcWebp: medicusLogoWebp, src: medicusLogo, alt: "Cobertura Medicus" },
  { srcWebp: osdeLogoWebp, src: osdeLogo, alt: "Cobertura OSDE" },
  { srcWebp: omintLogoWebp, src: omintLogo, alt: "Cobertura Omint" },
  { srcWebp: italianoLogoWebp, src: italianoLogo, alt: "Cobertura Hospital Italiano" },
];

export default function ObrasSociales() {
  return (
    <section id="cobertura" className="w-full bg-primary-light px-6 py-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-3xl bg-white-bg p-8 md:py-12 md:px-18 shadow-lg">
          <div className="flex w-full flex-col items-center text-center gap-8 lg:gap-4 lg:flex-row lg:items-start lg:justify-between lg:text-left">
            <div className="flex flex-col lg:self-stretch justify-center">
              <p className="flex max-w-xl flex-col items-center gap-2 md:gap-3 text-[2.5rem] sm:text-5xl text-shadow-md font-semibold text-center text-black-soft lg:items-start lg:text-left">
                <span className="inline-block leading-13">
                  Atendemos{" "}
                  <span className="inline-block text-accent italic border-b-[5px] border-accent">
                    Privados
                  </span>
                </span>
                <span className="inline-block leading-13 sm:leading-15">
                  y&nbsp;Aceptamos mas&nbsp;de
                </span>
                <span className="inline-block">
                  <span className="text-accent leading-12 sm:leading-17 italic border-b-[5px] border-accent">
                    120 Obras Sociales y Prepagas!
                  </span>
                </span>
              </p>
            </div>

            <div className="w-full max-w-xl mx-auto flex flex-col justify-center">
              <p className="mb-4 text-lg font-medium text-black-soft md:text-center italic">
                Algunas de ellas...
              </p>
              <div className="grid w-full grid-cols-2 gap-6">
                {coverageLogos.map(({ srcWebp, src, alt }) => (
                  <div
                    key={alt}
                    className="flex min-[380px]:min-h-[90px] min-[380px]:p-3 min-[420px]:min-h-[120px] min-[420px]:p-4 min-h-[80px] sm:min-h-[140px] w-full items-center justify-center rounded-xl bg-secondary/20 hover:bg-secondary/30 p-2 sm:p-4 shadow-lg transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
                  >
                    <picture>
                      <source type="image/webp" srcSet={srcWebp} />
                      <img
                        src={src}
                        alt={alt}
                        className="h-16 w-full object-contain"
                        width={800}
                        height={300}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
