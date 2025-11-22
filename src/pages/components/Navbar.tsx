import { useState, useEffect, useRef } from "react";
import { WhatsappInitialMessage } from "../../constants";
import { getWhatsappContactLinkWithMessage } from "../../utils/contact";
import { FaWhatsapp } from "react-icons/fa";
import { getSectionYAxisOffset, type section } from "../../utils/scroll";
import { Menu, Home, Users, Eye, Shield, MapPin } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    closeSheet = false,
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element && navRef.current) {
      const navbarHeight = navRef.current.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition +
        window.scrollY -
        navbarHeight +
        getSectionYAxisOffset(sectionId as section);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (closeSheet) {
        setIsSheetOpen(false);
      }
    }
  };

  const mobileNavItems = [
    {
      id: "hero",
      label: "Inicio",
      textColor: "text-black-soft",
      icon: Home,
    },
    {
      id: "profesionales",
      label: "Profesionales",
      textColor: "text-black-soft",
      icon: Users,
    },
    {
      id: "atencion",
      label: "Atención",
      textColor: "text-black-soft",
      icon: Eye,
    },
    {
      id: "cobertura",
      label: "Cobertura",
      textColor: "text-black-soft",
      icon: Shield,
    },
    {
      id: "ubicacion",
      label: "Ubicación",
      textColor: "text-black-soft",
      icon: MapPin,
    },
  ];

  return (
    <nav
      ref={navRef}
      className={`flex justify-between items-center fixed top-0 left-0 w-full z-50 h-16 px-4 sm:px-8 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <a
        className={`opacity-90 text-shadow-md text-xl min-[425px]:text-2xl font-bold transition-colors duration-500 ${
          isScrolled ? "text-primary" : "text-white-soft"
        }`}
        onClick={(e) => scrollToSection(e, "hero")}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        Oftalmo Nordelta
      </a>

      {/* Desktop Navigation */}
      <ul
        className={`text-lg [&_a]:transition-all [&_a]:duration-500 text-shadow-md gap-10 font-semibold h-full items-center hidden min-[935px]:flex ${
          isScrolled ? "text-secondary" : "text-white-soft"
        }`}
      >
        <li>
          <a
            className="hover:opacity-70 cursor-pointer"
            href="#profesionales"
            onClick={(e) => scrollToSection(e, "profesionales")}
          >
            Profesionales
          </a>
        </li>
        <li>
          <a
            className="hover:opacity-70 cursor-pointer"
            href="#atencion"
            onClick={(e) => scrollToSection(e, "atencion")}
          >
            Atención
          </a>
        </li>
        <li>
          <a
            className="hover:opacity-70 cursor-pointer"
            href="#cobertura"
            onClick={(e) => scrollToSection(e, "cobertura")}
          >
            Cobertura
          </a>
        </li>
        <li>
          <a
            className="hover:opacity-70 cursor-pointer"
            href="#ubicacion"
            onClick={(e) => scrollToSection(e, "ubicacion")}
          >
            Ubicación
          </a>
        </li>
        <li>
          <a
            href={getWhatsappContactLinkWithMessage(WhatsappInitialMessage)}
            className="text-base! max-md:align-center cta-button flex gap-1"
          >
            <FaWhatsapp className="w-5 h-5" />
            Sacar Turno
          </a>
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div className="flex items-center gap-4 min-[935px]:hidden">
        <a
          href={getWhatsappContactLinkWithMessage(WhatsappInitialMessage)}
          className="cta-button flex gap-1 text-md px-3 py-1.5"
        >
          <FaWhatsapp className="w-5 h-5" />
          <span className="hidden min-[425px]:inline">Sacar Turno</span>
        </a>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button
              className={`transition-colors duration-500 ${
                isScrolled ? "text-secondary" : "text-white-soft"
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader className="flex flex-col gap-2">
              <SheetTitle className="text-left text-primary opacity-90 text-2xl font-bold">
                Oftalmo Nordelta
              </SheetTitle>
              <div className="border-b border-gray-200" />
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-4">
              {mobileNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SheetClose key={item.id} asChild>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id, true)}
                      className={`flex items-center gap-3 text-lg font-semibold ${item.textColor} hover:text-primary transition-colors py-2`}
                    >
                      <Icon className="h-5 w-5 shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  </SheetClose>
                );
              })}
              <div className="mt-4 pt-4 border-t">
                <SheetClose asChild>
                  <a
                    href={getWhatsappContactLinkWithMessage(
                      WhatsappInitialMessage,
                    )}
                    className="cta-button flex items-center justify-center gap-2 w-full"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Sacar Turno</span>
                  </a>
                </SheetClose>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
