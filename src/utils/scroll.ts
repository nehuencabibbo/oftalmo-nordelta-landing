export type section = "ubicacion" | "profesionales" | "atencion" | "cobertura";

export const getSectionYAxisOffset = (sectionId: section) => {
  switch (sectionId) {
    case "ubicacion":
      return 15;
    case "profesionales":
      return 35;
    case "cobertura":
      return 30;
    default:
      throw Error(`Unexistent section ${sectionId}`);
  }
};
