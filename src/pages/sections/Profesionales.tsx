import mamus from "../../assets/mamus-frente.png";
import italianoLogo from "../../assets/hospital-italiano-logo.png";

export default function Profesionales() {
  return (
    <section
      id="profesionales"
      className="flex flex-col justify-center items-center w-full h-screen bg-primary p-8 gap-12"
    >
      <h2 className="text-custom-white text-5xl font-semibold text-shadow-md">
        Profesionales
      </h2>
      <div className="flex w-full gap-6 justify-center items-start">
        <img src={mamus} className="cover max-w-full h-60 sm:h-110 shadow-xl rounded-md"></img>
        <div className="flex flex-col gap-6 max-w-[40%]">
          <div className="flex items-center gap-3">
            <img src={italianoLogo} className="cover max-w-full h-7"></img>
            <h3 className="font-medium text-3xl text-shadow-md">
              Dra. Betty Giselle Arteaga
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              ipsum molestiae, sunt corporis nobis animi numquam nihil
              doloremque. Temporibus officiis facilis labore vero odio, ab
              obcaecati laborum corrupti eligendi voluptas.
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              ipsum molestiae, sunt corporis nobis animi numquam nihil
              doloremque. Temporibus officiis facilis labore vero odio, ab
              obcaecati laborum corrupti eligendi voluptas.
            </p>
            <p className="text-lg">
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
        { /* source: https://www.youtube.com/watch?v=KD1Yo8a_Qis */}
        <div className="flex flex-row oveflow-x-auto">
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
        </div>
      </div>
    </section>
  );
}
