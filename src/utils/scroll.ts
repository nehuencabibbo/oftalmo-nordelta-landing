export type section = "ubicacion" | "profesionales" | "atencion" | "cobretura"

export const getSectionYAxisOffset = (sectionId: section) => {
    switch (sectionId) {
        case "ubicacion":
            return 25
        case "profesionales":
          return 35
        default:
            throw Error(`Unexistent section ${sectionId}`)
      }
}