import { MapPin, PhoneCall, Mail } from "lucide-react";
import type { IconType } from "react-icons";
import {
  PhoneNumber,
  PhoneNumberDisplay,
  WhatsappLink,
  WhatsappInitialMessage,
  Address,
  InstagramUrl,
  FacebookUrl,
} from "../../constants";
import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
// WebP image
import qrContactImageWebp from "../../assets/qr-contacto.webp";
// Fallback image
import qrContactImage from "../../assets/qr-contacto.jpeg";

const email = "oftalmonordelta@gmail.com";

export default function Footer() {
  const phoneDigits = PhoneNumber.replace(/\D/g, "");
  const whatsappHref = `${WhatsappLink}/${phoneDigits}?text=${encodeURIComponent(
    WhatsappInitialMessage,
  )}`;

  const socialLinks: Array<{
    href?: string;
    label: string;
    icon: IconType;
    iconSize?: number;
    comingSoon?: boolean;
  }> = [
    {
      href: InstagramUrl,
      label: "Instagram",
      icon: FaInstagram,
      iconSize: 18,
    },
    {
      href: FacebookUrl,
      label: "Facebook",
      icon: FaFacebook,
      iconSize: 18,
    },
    {
      label: "YouTube",
      icon: FaYoutube,
      iconSize: 18,
      comingSoon: true,
    },
    {
      label: "TikTok",
      icon: FaTiktok,
      iconSize: 18,
      comingSoon: true,
    },
  ];

  return (
    <footer className="w-full bg-secondary text-white-soft">
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-6 md:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-start gap-8 md:gap-12">
        <div className="flex flex-col gap-5 max-w-lg md:flex-1">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-shadow-md">
              Oftalmo Nordelta
            </h3>
            <p className="text-base text-white-soft/90 leading-relaxed whitespace-nowrap">
              Atención oftalmológica integral.
            </p>
          </div>
          <div className="flex items-start gap-3 text-white-soft/80">
            <MapPin className="w-5 h-5 text-accent" />
            <div className="flex flex-col text-sm">
              <span>{Address}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-1 max-w-sm">
          <h4 className="text-xl font-semibold">Contacto</h4>
          <a
            href={`tel:${PhoneNumber}`}
            className="flex items-center gap-3 text-white-soft/95 hover:text-white-soft transition-colors text-sm"
          >
            <PhoneCall className="w-5 h-5 shrink-0 text-accent" />
            <span>{PhoneNumberDisplay}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 text-white-soft/95 hover:text-white-soft transition-colors text-sm"
          >
            <Mail className="w-5 h-5 shrink-0 text-accent" />
            <span>{email}</span>
          </a>
        </div>

        <div className="flex flex-col gap-4 md:flex-1 max-w-md">
          <h4 className="text-xl font-semibold">Redes Sociales</h4>
          <div className="grid grid-cols-2 gap-4 w-full">
            {socialLinks.map(
              ({ href, label, icon: Icon, iconSize = 20, comingSoon }) => {
                if (comingSoon) {
                  return (
                    <div
                      key={label}
                      className="flex items-center justify-center gap-1 py-2 border border-white-soft/20 rounded-full text-xs sm:text-sm text-white-soft/70 cursor-not-allowed w-full relative"
                      title="Próximamente"
                    >
                      <Icon size={iconSize} className="shrink-0" />
                      <span>{label}</span>
                      <span className="text-[10px] absolute -top-1 -right-1 bg-accent text-primary rounded-full px-1.5 font-medium">
                        Próximamente
                      </span>
                    </div>
                  );
                }
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    className="flex items-center justify-center gap-1 py-2 border border-white-soft/25 rounded-full text-xs sm:text-sm text-white-soft/95 hover:border-white-soft hover:text-white-soft hover:bg-white-soft/10 transition-all w-full"
                  >
                    <Icon size={iconSize} className="shrink-0" />
                    <span>{label}</span>
                  </a>
                );
              },
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-1 max-w-sm">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-semibold">Sacar turno</h4>
            <p className="text-white-soft/90 text-sm">
              Turnos Unicamente por Whatsapp
            </p>
          </div>
          <div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="cta-button inline-flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Sacar turno</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-1 max-w-sm">
          <h4 className="text-xl font-semibold">Agendar Contacto</h4>
          <div className="flex justify-left">
            <picture>
              <source type="image/webp" srcSet={qrContactImageWebp} />
              <img
                src={qrContactImage}
                alt="QR código para agendar contacto"
                className="w-24 h-24 object-contain"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
    </footer>
  );
}
