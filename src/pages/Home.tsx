import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Profesionales from "./sections/Profesionales";
import Atencion from "./sections/Atencion";
import Ubicacion from "./sections/Ubicacion";
import Footer from "./components/Footer";
import ObrasSociales from "./sections/ObrasSociales";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profesionales />
      <ObrasSociales />
      <Atencion />
      <Ubicacion />
      <Footer />
    </>
  );
}
