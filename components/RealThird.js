import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function RealThird() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="ml-10 mt-10 flex flex-col mr-auto ">
          <span className="text-6xl text-[#0E0544] font-[700]">
            Дополнительные активности
          </span>
          <span className="text-3xl mt-4 text-[#0E0544] font-[400]">
            У нас можно не только учиться.
          </span>
        </div>
        <div>
          <div className="embla w-full my-4" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <Image src={`/slide1.png`} width={720} height={520} />
              </div>
              <div className="embla__slide">Slide 2</div>
              <div className="embla__slide">Slide 3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
