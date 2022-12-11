import Image from "next/image"
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import HeroImage from "../media/media-1.png"
import {media} from "../media";
import { Carousel } from '@mantine/carousel';
export default function realThird(){
// eslint-disable-next-line react-hooks/rules-of-hooks
const autoplay = useRef(Autoplay({ delay: 3000 }));

  return(<div className="w-full md:p-24 mx-auto px-auto mt-0 flex flex-col md:items-start items-center justify-center mb-0 md:mt-0">
    <div className="flex flex-col mb-5 justify-center items-start">
        <span className="text-center text-[36px] md:text-5xl font-[700]">Дополнительные активности</span>
        <span className="text-center text-[13px] md:text-[36px] font-[400] md:mr-auto">У нас можно не только учиться.</span>
    </div>
  <div className="w-full  ">
      <Carousel
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          styles={{
              controls: {

              },
              indicator: {
                  width: 30,
                  height: 30,
                  transition: 'width 250ms ease',
                  '&[data-active]': {
                      width: 40,
                      background: "linear-gradient(154.56deg, #2086C8 11.7%, #B1DBF7 85.77%)"
                  },
              },
          }}
          slideSize="100%"  slideGap="xs" controlSize={28} loop withIndicators>
          {media.map((value, index)=>{
              return(<>
              <Carousel.Slide key={index}><Image src={value} width={1580} height={728}/></Carousel.Slide>
              </>)
          })}
      </Carousel>

  </div>



  </div>)
}