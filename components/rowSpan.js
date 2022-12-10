import Image from "next/image";
import { motion } from "framer-motion";
export default function RowSpan({ rowClass, deparment, src }) {
  return (
    <motion.div
        viewport={{ once: true }}
        whileInView={{
    opacity: 1,
            x: 0
    }}

      whileHover={{
        y: -20,

      }}
      initial={{
        y: 0,
        opacity: 0,
        x: -100,
      }}
      transition={{
        delay: 0,
        duration: 0.5,
      }}
      className={`w-full relative flex items-center justify-between  mt-4 ${rowClass} h-[48px] md:min-h-[20vh] `}
    >
      <div className=" h-full flex items-center justify-center ">
        <span className="text-white ml-10 font-[500] max-w-[200px] md:max-w-full text-[15px] md:text-4xl">
          {deparment}
        </span>
      </div>
      <div className="hidden md:block absolute bottom-[-20px] right-0 md:right-5">
        <Image className=" z-10 p-10 md:p-0" src={src} width={230} height={230} />
      </div>
      <div className="absolute md:hidden  bottom-[-45px] right-0 md:right-5">
        <Image className=" z-10 p-10 md:p-0" src={src} width={150} height={230} />
      </div>
    </motion.div>
  );
}
