import Image from "next/image"
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeroImage from "../media/media-1.png"

export default function realThird(){
  return(<div className="max-w-4xl px-auto mt-0 flex items-center justify-center mb-0 md:mt-0">



    {/*<Swiper*/}
    {/*    // install Swiper modules*/}
    {/*    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}*/}
    {/*    spaceBetween={0}*/}
    {/*    slidesPerView={1}*/}

    {/*    centeredSlides={true}*/}
    {/*    autoplay={{*/}
    {/*      delay: 5000,*/}
    {/*      disableOnInteraction: false,*/}
    {/*    }}*/}
    {/*    pagination={{ clickable: true, color: "#FFD2B0" }}*/}

    {/*    onSwiper={(swiper) => {}}*/}
    {/*    onSlideChange={() => {}}*/}
    {/*>*/}
    {/*  <SwiperSlide>*/}
    {/*    <Image alt="Акция 10% за заказ с собой" src={HeroImage} width={1524} height={720}/>*/}
    {/*  </SwiperSlide>*/}
    {/*  <SwiperSlide>*/}
    {/*    <Image alt="Акция 10% за заказ с собой" src={HeroImage} width={1524} height={720}/>*/}
    {/*  </SwiperSlide>*/}
    {/*  <SwiperSlide>*/}
    {/*    <Image alt="Акция 10% за заказ с собой" src={HeroImage} width={1524} height={720}/>*/}
    {/*  </SwiperSlide>*/}
    {/*  <SwiperSlide>*/}
    {/*    <Image alt="Акция 10% за заказ с собой" src={HeroImage} width={1524} height={720}/>*/}
    {/*  </SwiperSlide>*/}
    {/*  <br/>*/}
    {/*</Swiper>*/}

  </div>)
}