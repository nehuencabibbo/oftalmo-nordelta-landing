const treatments = [
  {
    title: "Campo Visual Computado",
    description:
      "Es una prueba que evalúa el alcance de la visión periférica de una persona, logrando detección precoz y evolución comparada de variadas lesiones oftalmológicas y neurológicas. Contamos con el moderno sistema suizo de diagnóstico computarizado Octopus con la Perimetría Pulsar para la detección temprana del Glaucoma.",
  },
  {
    title: "Tomografía de Coherencia óptica (OCT)",
    description:
      "Estudio de imagen no invasivo y de no contacto que permite evaluar con alta resolución las estructuras internas de la retina y el nervio óptico in vivo. Aplicaciones clínicas: Detección precoz de enfermedades de la retina como las Maculopatías, además permite un monitoreo de la enfermedad y su respuesta al tratamiento.",
  },
  {
    title: "Tomógrafo de nervio óptico (HRT)",
    description:
      "Es un dispositivo de tomografía láser confocal diseñado para generar imágenes tridimensionales de la cabeza del nervio óptico y la capa de fibras nerviosas. Aplicaciones clínicas: Diagnóstico y seguimiento del glaucoma; screening en población de alto riesgo; detección de progresión glaucomatosa, etc.",
  },
  {
    title: "Topografía Corneal",
    description:
      "La topografía corneal es un mapeo computado de la superficie de la córnea no invasivo. Permite analizar la forma y curvatura de la córnea, ayudando a diagnosticar enfermedades y planificar tratamientos o cirugías oculares. Aplicaciones clínicas: es muy útil en el diagnóstico y seguimiento de enfermedades corneales, como el queratocono, la degeneración marginal pelúcida, los astigmatismos irregulares, etc.",
  },
];

export default function Atencion() {
  return (
    <section
      id="atencion"
      className="flex flex-col items-center w-full h-screen bg-secondary"
    >
      <h2>Tratamientos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full text-shadow-lg px-20">
        {treatments.map((treatment) => (
          <div
            key={treatment.title}
            className="flex flex-col gap-8 items-center text-center"
          >
            <div className="flex flex-col w-full gap-4">
              <h3 className="text-3xl font-bold">{treatment.title}</h3>
              {/* Separator */}
              <div className="flex items-center justify-center gap-3 px-2">
                <span className="h-px flex-1 bg-custom-white/60" />
                <span className="w-2 h-2 rounded-full bg-custom-white" />
                <span className="h-px flex-1 bg-custom-white/60" />
              </div>
            </div>
            <p className="text-justify text-lg">{treatment.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
