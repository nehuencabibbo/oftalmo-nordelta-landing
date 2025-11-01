import { MapPin, PhoneCall, Mail, Clock } from "lucide-react";
import type { IconType } from "react-icons";
import {
  PhoneNumber,
  PhoneNumberDisplay,
  WhatsappLink,
  WhatsappInitialMessage,
} from "../../constants";
import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

const email = "contacto@oftalmonordelta.com";
const addressLine = "Pje. de las Ciencias 75";
const addressCity = "Rincón de Milberg, Provincia de Buenos Aires";

export default function Footer() {
  const phoneDigits = PhoneNumber.replace(/\D/g, "");
  const whatsappHref = `${WhatsappLink}/${phoneDigits}?text=${encodeURIComponent(
    WhatsappInitialMessage
  )}`;

  const socialLinks: Array<{
    href: string;
    label: string;
    icon: IconType;
    iconSize?: number;
  }> = [
    {
      href: "https://www.youtube.com",
      label: "YouTube",
      icon: FaYoutube,
      iconSize: 18,
    },
    {
      href: "https://www.instagram.com",
      label: "Instagram",
      icon: FaInstagram,
      iconSize: 18,
    },
    {
      href: "https://www.facebook.com",
      label: "Facebook",
      icon: FaFacebook,
      iconSize: 18,
    },
    {
      href: "https://www.tiktok.com",
      label: "TikTok",
      icon: FaTiktok,
      iconSize: 18,
    },
  ];

  return (
    <footer className="w-full bg-secondary border-border text-custom-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-8 md:gap-12">
        <div className="flex flex-col gap-5 max-w-lg md:flex-1">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-shadow-md">
              Oftalmo Nordelta
            </h3>
            <p className="text-custom-white/70 leading-relaxed whitespace-nowrap">
              Atención oftalmológica integral.
            </p>
          </div>
          <div className="flex items-start gap-3 text-custom-white/80">
            <MapPin className="w-5 h-5 text-accent" />
            <div className="flex flex-col text-sm">
              <span>{addressLine}</span>
              <span>{addressCity}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-1 max-w-sm">
          <h4 className="text-xl font-semibold">Contacto</h4>
          <a
            href={`tel:${PhoneNumber}`}
            className="flex items-center gap-3 text-custom-white/80 hover:text-custom-white transition-colors text-sm"
          >
            <PhoneCall className="w-5 h-5 shrink-0 text-accent" />
            <span>{PhoneNumberDisplay}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 text-custom-white/80 hover:text-custom-white transition-colors text-sm"
          >
            <Mail className="w-5 h-5 shrink-0 text-accent" />
            <span>{email}</span>
          </a>
          <div className="flex items-center gap-3 text-custom-white/80 text-sm">
            <Clock className="w-5 h-5 shrink-0 text-accent" />
            <div className="flex flex-col">
              <span className="whitespace-nowrap">
                Lunes y Viernes · 09:00 a 20:00 hs
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-1 max-w-md">
          <h4 className="text-xl font-semibold">Redes Sociales</h4>
          <div className="grid grid-cols-2 gap-2 w-full">
            {socialLinks.map(({ href, label, icon: Icon, iconSize = 20 }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1 py-2 border border-custom-white/20 rounded-full text-xs sm:text-sm text-custom-white/80 hover:border-custom-white hover:text-custom-white hover:bg-custom-white/10 transition-all w-full"
              >
                <Icon size={iconSize} className="shrink-0" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-1 max-w-sm">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-semibold">Sacar turno</h4>
            <p className="text-custom-white/70 text-sm">
              Turnos Unicamente por Whatsapp
            </p>
          </div>
          <div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="cta-button bg-primary! inline-flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Sacar turno</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
