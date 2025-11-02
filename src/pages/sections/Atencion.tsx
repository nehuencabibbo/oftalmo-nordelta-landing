export default function Atencion() {

    return (
        <section id="atencion" className="w-full h-screen bg-custom-white">
            {/* Carousel Container with Fade Edges */}
            <div className="relative w-full overflow-hidden">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-accent/40 to-transparent z-10 pointer-events-none"></div>

                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-accent/40 to-transparent z-10 pointer-events-none"></div>
                {/* !!! Si se cambia el gap hay que cambiarlo en el carrousel-card tambien */}
                {/* source: https://www.youtube.com/watch?v=KD1Yo8a_Qis */}
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
    )
}