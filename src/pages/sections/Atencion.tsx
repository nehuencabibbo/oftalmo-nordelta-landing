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

// Accordion styling constants - change these to update all accordions at once
const accordionTitleClass =
  "text-left text-base text-black-soft/90 text-shadow-sm [&[data-state=open]]:underline";
const accordionItemClass = "border-b border-black-soft/70";
const accordionContentClass = "text-black-soft";

// Section title styling constant - change this to update all H3 section titles at once
const sectionTitleClass =
  "text-black-soft text-center text-xl sm:text-[26px] font-bold mb-4";

export default function Atencion() {
  const [openValue, setOpenValue] = useState<string | undefined>(undefined);
  return (
    <section
      id="atencion"
      className="flex flex-col items-center w-full py-10 gap-10 bg-primary-light"
    >
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-white-soft text-center leading-tight text-5xl lg:text-6xl font-semibold text-shadow-lg">
          Algunas de Nuestras Prestaciones
        </h2>
        <p className="text-white-soft/90 text-center text-base lg:text-lg max-w-4xl px-15">
          Nuestro centro cuenta con la mejor tecnología en equipamiento de
          diagnóstico y tratamiento.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl px-4">
        <div className="flex flex-col gap-8">
          <div className="bg-white-bg rounded-lg p-6 shadow-md">
            <div className="flex flex-col">
              <h3 className={sectionTitleClass}>Estudios Especializados</h3>
              <Accordion
                type="single"
                collapsible
                className="text-primary w-full"
                value={openValue}
                onValueChange={setOpenValue}
              >
                {estudios.map((estudio) => (
                  <AccordionItem
                    key={estudio.id}
                    value={estudio.id}
                    className={accordionItemClass}
                  >
                    <AccordionTrigger className={accordionTitleClass}>
                      {estudio.nombre}
                    </AccordionTrigger>
                    <AccordionContent className={accordionContentClass}>
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
          </div>
          <div className="bg-white-bg rounded-lg p-6 shadow-md">
            <div className="flex flex-col">
              <h3 className={sectionTitleClass}>Cirugías y Procedimientos</h3>
              <Accordion
                type="single"
                collapsible
                className="text-primary w-full"
                value={openValue}
                onValueChange={setOpenValue}
              >
                {cirugiasProcedimientos.map((cirugia) => (
                  <AccordionItem
                    key={cirugia.id}
                    value={cirugia.id}
                    className={accordionItemClass}
                  >
                    <AccordionTrigger className={accordionTitleClass}>
                      {cirugia.nombre}
                    </AccordionTrigger>
                    <AccordionContent className={accordionContentClass}>
                      <p className="mb-3">{cirugia.descripcion}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white-bg rounded-lg p-6 shadow-md">
              <div className="flex flex-col">
                <h3 className={sectionTitleClass}>Servicios Generales</h3>
                <Accordion
                  type="single"
                  collapsible
                  className="text-primary w-full"
                  value={openValue}
                  onValueChange={setOpenValue}
                >
                  {serviciosGenerales.map((servicio) => (
                    <AccordionItem
                      key={servicio.id}
                      value={servicio.id}
                      className={accordionItemClass}
                    >
                      <AccordionTrigger className={accordionTitleClass}>
                        {servicio.nombre}
                      </AccordionTrigger>
                      <AccordionContent className={accordionContentClass}>
                        <p className="mb-3">{servicio.descripcion}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-between">
              <div className="bg-white-bg rounded-lg p-6 shadow-md">
                <div className="flex flex-col">
                  <h3 className={sectionTitleClass}>
                    Pruebas de Visión de Colores
                  </h3>
                  <Accordion
                    type="single"
                    collapsible
                    className="text-primary w-full"
                    value={openValue}
                    onValueChange={setOpenValue}
                  >
                    {pruebasVisionColores.map((prueba) => (
                      <AccordionItem
                        key={prueba.id}
                        value={prueba.id}
                        className={accordionItemClass}
                      >
                        <AccordionTrigger className={accordionTitleClass}>
                          {prueba.nombre}
                        </AccordionTrigger>
                        <AccordionContent className={accordionContentClass}>
                          <p className="mb-3">{prueba.descripcion}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
              <div className="bg-white-bg rounded-lg p-6 shadow-md">
                <div className="flex flex-col">
                  <h3 className={sectionTitleClass}>Patologías Oculares</h3>
                  <Accordion
                    type="single"
                    collapsible
                    className="text-primary w-full"
                    value={openValue}
                    onValueChange={setOpenValue}
                  >
                    {patologiasOculares.map((patologia) => (
                      <AccordionItem
                        key={patologia.id}
                        value={patologia.id}
                        className={accordionItemClass}
                      >
                        <AccordionTrigger className={accordionTitleClass}>
                          {patologia.nombre}
                        </AccordionTrigger>
                        <AccordionContent className={accordionContentClass}>
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
          </div>
          <div className=" rounded-2xl p-6 flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-6 flex-1">
            <div className="flex flex-col flex-1 items-center">
              <h3 className="text-white-soft text-center text-[40px] font-semibold text-shadow-md leading-tight">
                ¿No encontró lo que buscaba?
              </h3>
              <p className="text-white-soft/90 text-base sm:text-lg">
                Estamos aquí para ayudarle
              </p>
            </div>
            <a
              href={getWhatsappContactLinkWithMessage(
                WhatsappServicioConsultingMessage,
              )}
              className="cta-button flex gap-1 items-center whitespace-nowrap"
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
