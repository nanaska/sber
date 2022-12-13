import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {useRouter} from "next/router";
export default function RowSpan({ rowClass, deparment, src, link }) {
  const router = useRouter()

  return (

    <motion.div
        onClick={()=>{router.push(link)}}
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
        x: { delay: 0.25 },
        duration: .25,
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
