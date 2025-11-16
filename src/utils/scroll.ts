export type section =
  | "ubicacion"
  | "profesionales"
  | "atencion"
  | "cobertura"
  | "hero";

export const getSectionYAxisOffset = (sectionId: section) => {
  switch (sectionId) {
    case "ubicacion":
      return 15;
    case "profesionales":
      return 35;
    case "cobertura":
      return 30;
    case "hero":
      return 0;
    case "atencion":
      return 40;
    default:
      throw Error(`Unexistent section ${sectionId}`);
  }
};
