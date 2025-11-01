import mamus from "../../assets/mamus-frente.png";
import italianoLogo from "../../assets/hospital-italiano-logo.png";

export default function Profesionales() {
  return (
    <section
      id="profesionales"
      className="flex flex-col justify-center items-center w-full min-h-screen bg-primary px-6 py-12 md:px-10 md:py-16 gap-12"
    >
      <h2 className="text-custom-white text-center text-4xl sm:text-5xl lg:text-6xl font-semibold text-shadow-md">
        Profesionales
      </h2>
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-10 lg:gap-16 items-center lg:items-stretch">
        <img
          src={mamus}
          className="w-full max-w-md sm:max-w-xl lg:w-1/2 xl:w-[45%] h-auto lg:h-[520px] xl:h-[560px] object-cover rounded-3xl shadow-2xl"
          alt="Profesional principal"
        ></img>
        <div className="flex flex-col gap-6 w-full lg:w-1/2 xl:w-[55%] text-custom-white">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <img
              src={italianoLogo}
              className="w-32 sm:w-40 max-w-full object-contain"
            ></img>
            <h3 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-shadow-md">
              Dra. Betty Giselle Arteaga
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg sm:text-xl leading-relaxed text-custom-white/90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              ipsum molestiae, sunt corporis nobis animi numquam nihil
              doloremque. Temporibus officiis facilis labore vero odio, ab
              obcaecati laborum corrupti eligendi voluptas.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-custom-white/90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              ipsum molestiae, sunt corporis nobis animi numquam nihil
              doloremque. Temporibus officiis facilis labore vero odio, ab
              obcaecati laborum corrupti eligendi voluptas.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-custom-white/90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              ipsum molestiae, sunt corporis nobis animi numquam nihil
              doloremque. Temporibus officiis facilis labore vero odio, ab
              obcaecati laborum corrupti eligendi voluptas.
            </p>
          </div>
        </div>
      </div>
      {/* Carousel Container with Fade Edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-primary to-transparent z-10 pointer-events-none"></div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-primary to-transparent z-10 pointer-events-none"></div>

        {/* !!! Si se cambia el gap hay que cambiarlo en el carrousel-card tambien */}
        {/* source: https://www.youtube.com/watch?v=KD1Yo8a_Qis */}
        {/*<div className="flex flex-row oveflow-x-auto">
          <div className="flex flex-row animate-scroll gap-6 pr-6">
            <div className="carrousel-card"></div>
            <div className="carrousel-card"></div>
            <div className="carrousel-card"></div>
            <div className="carrousel-card"></div>
            <div className="carrousel-card"></div>
          </div>
          <div aria-hidden className="flex flex-row animate-scroll gap-6 pr-6">
            <div className="carrousel-card"></div>
            <div className="carrousel-card"></div>
            <div className="carrousel-card"></div>
            <div className="carrousel-card"></div>
            <div className="carrousel-card"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
