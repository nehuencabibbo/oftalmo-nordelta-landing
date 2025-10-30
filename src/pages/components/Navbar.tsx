import { useState, useEffect } from "react";
import { WhatsappInitialMessage } from "../../constants";
import { getWhatsappContactLinkWithMessage } from "../../utils/contact";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`flex justify-between items-center fixed top-0 left-0 w-full z-50 h-16 px-4 sm:px-8 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <h1
        className={`opacity-90 text-shadow-md text-xl sm:text-2xl font-bold transition-colors duration-500 ${
          isScrolled ? "text-primary" : "text-white"
        }`}
      >
        Oftalmo Nordelta
      </h1>

      <ul
        className={`[&_a]:transition-all [&_a]:duration-500 text-shadow-md flex gap-10 font-semibold h-full items-center ${
          isScrolled ? "text-secondary" : "text-white"
        }`}
      >
        <li className="max-md:hidden">
          <a
            className="max-md:hidden hover:opacity-70 cursor-pointer"
            href="#profesionales"
            onClick={(e) => scrollToSection(e, "profesionales")}
          >
            Profesionales
          </a>
        </li>
        <li className="max-md:hidden">
          <a
            className="max-md:hidden hover:opacity-70 cursor-pointer"
            href="#atencion"
            onClick={(e) => scrollToSection(e, "atencion")}
          >
            Atención
          </a>
        </li>
        <li className="max-md:hidden">
          <a
            className="max-md:hidden hover:opacity-70 cursor-pointer"
            href="#ubicacion"
            onClick={(e) => scrollToSection(e, "ubicacion")}
          >
            Ubicación
          </a>
        </li>
        <li>
          <a
            href={getWhatsappContactLinkWithMessage(WhatsappInitialMessage)}
            className="max-md:align-center shadow-md inline-flex items-center text-white bg-secondary hover:bg-tertiary rounded-3xl px-3.5 py-1.5"
          >
            Sacar Turno
          </a>
        </li>
      </ul>
    </nav>
  );
}
