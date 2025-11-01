import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Profesionales from "./sections/Profesionales";
import Atencion from "./sections/Atencion";
import Ubicacion from "./sections/Ubicacion";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profesionales />
      <Atencion /> 
      <Ubicacion /> 
      <Footer />
    </>
  );
}
