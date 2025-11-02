import mamus from "../../assets/mamus-frente.png";
import italianoLogo from "../../assets/hospital-italiano-logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsappInitialMessage } from "../../constants";
import { getWhatsappContactLinkWithMessage } from "../../utils/contact";

export default function Profesionales() {
  return (
    <section
      id="profesionales"
      className="flex flex-col justify-center items-center w-full min-h-screen bg-primary px-6 py-8 md:px-10  gap-12"
    >
      <h2 className="text-custom-white text-center text-4xl sm:text-5xl lg:text-6xl font-semibold text-shadow-md">
        Profesionales
      </h2>
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-10 lg:gap-16 items-center lg:items-stretch">
        <div className="flex flex-col w-full max-w-md sm:max-w-xl lg:w-1/2 xl:w-[45%]">
          <img
            src={mamus}
            className="w-full h-auto object-cover rounded-3xl shadow-2xl"
            alt="Profesional principal"
          ></img>
          <p className="text-sm text-custom-white/80 italic mt-3 text-center">
            Dr. Betty Giselle Arteaga, Medica Oftalmologa, M.N. 112049 – M.P.
            33230
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-1/2 xl:w-[55%] text-custom-white">
          <div className="flex flex-row items-center gap-4">
            <img
              src={italianoLogo}
              className="w-32 sm:w-40 max-w-full object-contain"
            ></img>
            <h3 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-shadow-md">
              Dra. Betty Giselle Arteaga
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg sm:text-xl leading-relaxed text-custom-white/90 text-justify">
              Con más de{" "}
              <span className="font-bold text-accent">
                dos décadas de experiencia clínica
              </span>
              , la Dra. Betty Giselle Arteaga es una autoridad en el campo de la
              Oftalmología en Argentina. Es experta en el manejo de pacientes
              con <span className="font-bold text-accent">Baja Visión</span> y
              lidera el programa de{" "}
              <span className="font-bold text-accent">
                Rehabilitación Visual
              </span>{" "}
              como Jefa de Servicio en el{" "}
              <span className="font-bold text-accent">
                Hospital Italiano de Buenos Aires
              </span>
              .
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-custom-white/90 text-justify">
              Además de su extensa labor asistencial, la Dra. Arteaga cumple un
              rol académico fundamental como{" "}
              <span className="font-bold text-accent">Profesora</span> del
              Departamento de Clínica Quirúrgica en el Instituto Universitario
              del Hospital Italiano. Su compromiso con la excelencia y la
              actualización constante se refleja en su participación activa en
              el{" "}
              <span className="font-bold text-accent">
                Congreso Mundial de Oftalmología (WOC)
              </span>
              , donde frecuentemente presenta afiches y comparte sus
              conocimientos.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href={getWhatsappContactLinkWithMessage(WhatsappInitialMessage)}
              className="cta-button inline-flex items-center justify-center gap-2 px-6 py-3 text-lg"
            >
              <FaWhatsapp className="w-6 h-6" />
              <span>Saque Turno Ahora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
