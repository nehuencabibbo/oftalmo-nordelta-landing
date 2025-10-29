import { WhatsappInitialMessage } from "../../constants";
import { getWhatsappContactLinkWithMessage } from "../../utils/contact";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 w-full bg-white z-50 h-16 border-rounded-md px-8">
      <h1 className="text-2xl font-bold text-primary">Oftalmo Nordelta</h1>

      <ul className="flex gap-10 text-secondary font-semibold h-full items-center">
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
