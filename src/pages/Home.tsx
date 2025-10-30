import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Profesionales from "./sections/Profesionales";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profesionales />
    </>
  );
}
