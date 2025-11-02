import medicusLogo from "../../assets/medicus-logo.png";
import osdeLogo from "../../assets/osde-logo.png";
import omintLogo from "../../assets/omint-logo.png";
import italianoLogo from "../../assets/italiano-logo-vertical.png";

const coverageLogos = [
  { src: medicusLogo, alt: "Cobertura Medicus" },
  { src: osdeLogo, alt: "Cobertura OSDE" },
  { src: omintLogo, alt: "Cobertura Omint" },
  { src: italianoLogo, alt: "Cobertura Hospital Italiano" },
];

export default function ObrasSociales() {
  return (
    <section className="w-full bg-secondary px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <p className="flex max-w-xl flex-col items-center gap-4 text-5xl text-shadow-md font-semibold text-center md:items-start md:text-left">
          <span className="block">
            Atendemos <span className="text-accent">Privados</span>
          </span>
          <span className="block leading-15">y Aceptamos mas de</span>
          <span className="block">
            <span className="text-accent leading-15">
              120 Obras Sociales y Prepagas!
            </span>
          </span>
        </p>

        <div className="w-full max-w-xl mx-auto md:mx-0">
          <p className="mb-4 text-lg font-medium text-white">
            Algunas de ellas...
          </p>
          <div className="grid w-full grid-cols-2 gap-8">
            {coverageLogos.map(({ src, alt }) => (
              <div
                key={alt}
                className="flex min-h-[140px] w-full items-center justify-center rounded-xl bg-white p-8 shadow-lg transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-16 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
