import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-full h-screen bg-primary"></div>
    </>
  );
}
