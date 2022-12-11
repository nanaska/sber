import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (


        <motion.div

            viewport={{once: true}}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,


            }}

            initial={{
                y: 0,
                opacity: 0,
                x: -200,


            }}
            transition={{
                delay: 0,
                duration: 0.5,
            }}
            className="grid px-2 md:px-12 grid-cols-6   grid-rows-1 h-full">
            <div className="flex flex-col h-full col-start-1  col-end-4 md:col-end-5  items-start justify-center">
                <div>
          <span className="mr-auto">
            <h1 className="text-xl md:text-5xl 2xl:text-6xl max-w-[170px] mr-auto md:max-w-[800px] text-white font-[700]">
              ЯрГУ — твой инструмент достижения успеха
            </h1>
          </span>
                </div>
                <div
                    className="mt-8 mr-auto      hover:scale-105 duration-150 cursor-pointer active:scale-100 text-white btn-hero text-[10px] md:text-2xl px-6 py-2 font-[700]">
                    <Link href="https://www.uniyar.ac.ru/yargu/">Подробнее</Link>
                </div>
            </div>
            <div

                className="col-start-3  md:col-start-4 flex items-center justify-center relative col-end-7 ">
                <Image
                    className="block xl:hidden absolute py-auto my-auto bottom-[35px]  md:bottom-12 2xl:bottom-48 right-[0]"
                    src={`/Saly-10.png`}
                    width={500}
                    height={500}
                />
                <Image
                    className="hidden  2xl:block absolute py-auto my-auto bottom-[35px]  md:bottom-12 2xl:bottom-32 right-[0]"
                    src={`/Saly-10.png`}
                    width={700}
                    height={500}
                />
                <Image
                    className="hidden xl:block 2xl:hidden absolute py-auto my-auto bottom-[35px]  md:bottom-12 2xl:bottom-48 right-[0]"
                    src={`/Saly-10.png`}
                    width={500}
                    height={500}
                />
            </div>
        </motion.div>
    );
}
