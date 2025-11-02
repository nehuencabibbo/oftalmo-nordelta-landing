import medicusLogo from "../../assets/medicus-logo.png";
import osdeLogo from "../../assets/osde-logo.png";
import omintLogo from "../../assets/omint-logo.png";
import italianoLogo from "../../assets/hospital-italiano-logo.png";
import { getWhatsappContactLinkWithMessage } from "../../utils/contact";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsappObraSocialConsultingMessage } from "../../constants";

const coverageLogos = [
  { src: medicusLogo, alt: "Cobertura Medicus" },
  { src: osdeLogo, alt: "Cobertura OSDE" },
  { src: omintLogo, alt: "Cobertura Omint" },
  { src: italianoLogo, alt: "Cobertura Hospital Italiano" },
];

export default function ObrasSociales() {
  return (
    <section id="cobertura" className="w-full bg-secondary px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 md:gap-12 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="flex flex-col md:self-stretch">
          <p className="flex max-w-xl flex-col items-center gap-2 md:gap-3 text-5xl text-shadow-md font-semibold text-center md:items-start md:text-left">
            <span className="block leading-12">
              Atendemos <span className="text-accent italic border-b-6">Privados</span>
            </span>
            <span className="block leading-12 md:leading-15">
              y Aceptamos mas&nbsp;de
            </span>
            <span className="block">
              <span className="text-accent leading-15 italic border-b-6">
                120 Obras Sociales y Prepagas!
              </span>
            </span>
          </p>
          <a
            href={getWhatsappContactLinkWithMessage(
              WhatsappObraSocialConsultingMessage
            )}
            className="cta-button mt-10 md:mt-12 self-center items-center justify-center gap-2 px-6 py-3 text-lg hidden! min-[1121px]:inline-flex!"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>Consulte por la suya</span>
          </a>
        </div>

        <div className="w-full max-w-xl mx-auto flex flex-col">
          <p className="mb-4 text-lg font-medium text-custom-white md:text-center italic">
            Algunas de ellas...
          </p>
          <div className="grid w-full grid-cols-2 gap-8">
            {coverageLogos.map(({ src, alt }) => (
              <div
                key={alt}
                className="flex min-h-[140px] w-full items-center justify-center rounded-xl bg-custom-white p-8 shadow-lg transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-16 w-full object-contain"
                />
              </div>
            ))}
          </div>
          <a
            href={getWhatsappContactLinkWithMessage(
              WhatsappObraSocialConsultingMessage
            )}
            aria-hidden="true"
            className="cta-button self-center mx-auto mt-10 min-[1121px]:hidden! items-center justify-center gap-2 px-6 py-3 text-lg"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>Consulte por la suya</span>
          </a>
        </div>
      </div>
    </section>
  );
}
