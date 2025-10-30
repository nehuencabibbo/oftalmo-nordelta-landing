import mamus from "../../assets/mamus-frente.png";
import italianoLogo from "../../assets/hospital-italiano-logo.png";

export default function Profesionales() {
  return (
    <section
      id="profesionales"
      className="flex flex-col justify-center items-center w-full h-screen bg-primary p-8 gap-15"
    >
      <h2 className="text-custom-white text-5xl font-semibold text-shadow-md">
        Profesionales
      </h2>
      <div className="flex w-full h-full px-30 gap-6">
        <img src={mamus} className="cover max-w-full h-110"></img>
        <div className="flex flex-col gap-6">
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
      <div className="flex gap-6 w-full px-30">
        <div className="flex bg-custom-white shadow-xl rounded-xl w-[30%] h-40"></div>
        <div className="flex bg-custom-white shadow-xl rounded-xl w-[30%] h-40"></div>
        <div className="flex bg-custom-white shadow-xl rounded-xl w-[30%] h-40"></div>
      </div>
    </section>
  );
}
