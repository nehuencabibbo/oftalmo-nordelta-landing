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

  return (
    <nav
      className={`flex justify-between items-center fixed top-0 left-0 w-full z-50 h-16 px-8 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <h1
        className={`text-2xl font-bold transition-colors duration-500 ${
          isScrolled ? "text-primary" : "text-white"
        }`}
      >
        Oftalmo Nordelta
      </h1>

      <ul
        className={`flex gap-10 font-semibold h-full items-center transition-colors duration-500 ${
          isScrolled ? "text-secondary" : "text-white"
        }`}
      >
        <li>
          <a href="/profesionales">Profesionales</a>
        </li>
        <li>
          <a href="/atencion">Atención</a>
        </li>
        <li>
          <a href="/ubicacion">Ubicación</a>
        </li>
        <li>
          <a
            href={getWhatsappContactLinkWithMessage(WhatsappInitialMessage)}
            className="inline-flex items-center text-white bg-secondary rounded-3xl px-3.5 py-1.5"
          >
            Sacar Turno
          </a>
        </li>
      </ul>
    </nav>
  );
}
