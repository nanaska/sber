import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid px-12 grid-cols-6 grid-rows-1 h-full">
      <div className="flex flex-col h-full col-start-1  col-end-5  items-center justify-center">
        <div>
          <span>
            <h1 className="text-6xl text-white font-[700]">
              ЯрГУ — твой инструмент достижения успеха
            </h1>
          </span>
        </div>
        <div className="mt-8 mr-auto hover:scale-105 duration-150 cursor-pointer active:scale-100 text-white btn-hero text-2xl px-6 py-2 font-[700]">
          Подробнее
        </div>
      </div>
      <div className="col-start-4 relative col-end-7 ">
        <Image
          className="absolute bottom-10 right-[0]"
          src={`/Saly-10.png`}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
