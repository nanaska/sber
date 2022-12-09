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
      className={`w-full relative flex items-center justify-between  mt-4 ${rowClass} min-h-[20vh] `}
    >
      <div className=" h-full flex items-center justify-center ">
        <span className="text-white ml-10 font-[500] text-4xl">
          {deparment}
        </span>
      </div>
      <div className="absolute bottom-[-20px] right-5">
        <Image className=" z-10 " src={src} width={230} height={230} />
      </div>
    </motion.div>
  );
}
