import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsappServicioConsultingMessage } from "../../constants";
import { getWhatsappContactLinkWithMessage } from "../../utils/contact";
import treatmentsData from "./treatments.json";

const {
  estudios,
  serviciosGenerales,
  pruebasVisionColores,
  patologiasOculares,
  cirugiasProcedimientos,
} = treatmentsData;

const accordionTitleSize = "text-base";

export default function Atencion() {
  const [openValue, setOpenValue] = useState<string | undefined>(undefined);
  return (
    <section
      id="atencion"
      className="flex flex-col items-center w-full py-15 gap-8 bg-secondary"
    >
      <h2 className="text-custom-white text-center text-3xl sm:text-5xl lg:text-6xl font-semibold text-shadow-lg">
        Algunos de Nuestros Estudios
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl px-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h3 className="text-custom-white text-center text-xl sm:text-2xl font-semibold text-shadow-md mb-4">
              Estudios Especializados
            </h3>
            <Accordion
              type="single"
              collapsible
              className="text-custom-white w-full"
              value={openValue}
              onValueChange={setOpenValue}
            >
              {estudios.map((estudio) => (
                <AccordionItem key={estudio.id} value={estudio.id}>
                  <AccordionTrigger
                    className={`text-left ${accordionTitleSize}`}
                  >
                    {estudio.nombre}
                  </AccordionTrigger>
                  <AccordionContent className="text-custom-white/90">
                    <p className="mb-3">{estudio.descripcion}</p>
                    {estudio.aplicaciones && (
                      <div className="mt-4">
                        <p className="font-semibold mb-2">
                          Aplicaciones clínicas:
                        </p>
                        {Array.isArray(estudio.aplicaciones) ? (
                          <ul className="list-disc list-inside space-y-1 ml-2">
                            {estudio.aplicaciones.map((aplicacion, index) => (
                              <li key={index}>{aplicacion}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{estudio.aplicaciones}</p>
                        )}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="flex flex-col">
            <h3 className="text-custom-white text-center text-xl sm:text-2xl font-semibold text-shadow-md mb-4">
              Cirugías y Procedimientos
            </h3>
            <Accordion
              type="single"
              collapsible
              className="text-custom-white w-full"
              value={openValue}
              onValueChange={setOpenValue}
            >
              {cirugiasProcedimientos.map((cirugia) => (
                <AccordionItem key={cirugia.id} value={cirugia.id}>
                  <AccordionTrigger
                    className={`text-left ${accordionTitleSize}`}
                  >
                    {cirugia.nombre}
                  </AccordionTrigger>
                  <AccordionContent className="text-custom-white/90">
                    <p className="mb-3">{cirugia.descripcion}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <h3 className="text-custom-white text-center text-xl sm:text-2xl font-semibold text-shadow-md mb-4">
                Servicios Generales
              </h3>
              <Accordion
                type="single"
                collapsible
                className="text-custom-white w-full"
                value={openValue}
                onValueChange={setOpenValue}
              >
                {serviciosGenerales.map((servicio) => (
                  <AccordionItem key={servicio.id} value={servicio.id}>
                    <AccordionTrigger
                      className={`text-left ${accordionTitleSize}`}
                    >
                      {servicio.nombre}
                    </AccordionTrigger>
                    <AccordionContent className="text-custom-white/90">
                      <p className="mb-3">{servicio.descripcion}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <div className="flex flex-col">
                <h3 className="text-custom-white text-center text-xl sm:text-2xl font-semibold text-shadow-md mb-4">
                  Pruebas de Visión de Colores
                </h3>
                <Accordion
                  type="single"
                  collapsible
                  className="text-custom-white w-full"
                  value={openValue}
                  onValueChange={setOpenValue}
                >
                  {pruebasVisionColores.map((prueba) => (
                    <AccordionItem key={prueba.id} value={prueba.id}>
                      <AccordionTrigger
                        className={`text-left ${accordionTitleSize}`}
                      >
                        {prueba.nombre}
                      </AccordionTrigger>
                      <AccordionContent className="text-custom-white/90">
                        <p className="mb-3">{prueba.descripcion}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="flex flex-col">
                <h3 className="text-custom-white text-center text-xl sm:text-2xl font-semibold text-shadow-md mb-4">
                  Patologías Oculares
                </h3>
                <Accordion
                  type="single"
                  collapsible
                  className="text-custom-white w-full"
                  value={openValue}
                  onValueChange={setOpenValue}
                >
                  {patologiasOculares.map((patologia) => (
                    <AccordionItem key={patologia.id} value={patologia.id}>
                      <AccordionTrigger
                        className={`text-left ${accordionTitleSize}`}
                      >
                        {patologia.nombre}
                      </AccordionTrigger>
                      <AccordionContent className="text-custom-white/90">
                        <p className="mb-3">{patologia.descripcion}</p>
                        {patologia.tratamiento && (
                          <div className="mt-4">
                            <p className="font-semibold mb-2">Tratamiento:</p>
                            <p>{patologia.tratamiento}</p>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 flex-1">
            <h3 className="text-custom-white text-center text-5xl font-semibold text-shadow-md">
              ¿No encontró el estudio que buscaba?
            </h3>
            <a
              href={getWhatsappContactLinkWithMessage(
                WhatsappServicioConsultingMessage,
              )}
              className="cta-button flex gap-1 items-center"
            >
              <FaWhatsapp className="w-5 h-5" />
              Consulte aqui
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
